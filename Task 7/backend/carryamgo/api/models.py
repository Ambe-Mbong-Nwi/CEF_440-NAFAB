from django.db import models
from django.db.models import Avg
from django.contrib.auth.hashers import make_password
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils import timezone


class Seller(models.Model):
    seller_id = models.AutoField(primary_key=True)
    seller_name = models.CharField(max_length=100)
    seller_email = models.EmailField(max_length=254, blank=True, unique=True, verbose_name='Email Address')
    seller_number = models.CharField(max_length=20)
    seller_address = models.CharField(max_length=30)
    name_market = models.CharField(max_length=100)
    seller_password = models.CharField(max_length=128, verbose_name='Password')
    reset_password_token = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.seller_password = make_password(self.seller_password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.seller_name


class Buyer(models.Model):
    buyer_id = models.AutoField(primary_key=True)
    buyer_name = models.CharField(max_length=100)
    buyer_email = models.EmailField(max_length=254, blank=True, unique=True, verbose_name='Email Address')
    buyer_number = models.CharField(max_length=20)
    buyer_password = models.CharField(max_length=128, verbose_name='Password')
    reset_password_token = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.buyer_password = make_password(self.buyer_password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.buyer_name


class Rating(models.Model):
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=((1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')))

    @property
    def seller_average_rating(self):
        average_rating = Rating.objects.filter(seller=self.seller).aggregate(Avg('rating'))['rating__avg']
        return average_rating


class Shop(models.Model):
    shop_id = models.AutoField(primary_key=True)
    shop_name = models.CharField(max_length=100)
    shop_address = models.CharField(max_length=30)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.shop_name


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    product_price = models.IntegerField(blank=False)
    product_quantity = models.IntegerField(blank=False)
    product_image = models.ImageField(upload_to='Product Image', blank=True)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, default=1)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    order_quantity = models.IntegerField(blank=False)
    order_price = models.IntegerField(blank=False, default=0)
    order_status = models.CharField(max_length=100, default='Pending')
    product_price = models.IntegerField(blank=False, default=0)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.product_price = self.product.product_price
        self.order_price = self.calculate_order_price()
        super().save(*args, **kwargs)

    def calculate_order_price(self):
        final_price = self.order_quantity * self.product_price
        return final_price

    def __str__(self):
        return self.order_status


@receiver(pre_save, sender=Order)
def update_order_prices(sender, instance, **kwargs):
    instance.product_price = instance.product.product_price
    instance.order_price = instance.calculate_order_price()


class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    message = models.TextField(max_length=100)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message


class Notification(models.Model):
    NOTIFICATION_TYPES = (
        ('order', 'New Order'),
        ('promotion', 'New Promotion'),
        ('end_promotion', 'End of Promotion'),
        ('message', 'New Message'),
        ('shop', 'New Shop'),
        ('product', 'New Product'),
    )

    notification_id = models.AutoField(primary_key=True)
    notification_type = models.CharField(max_length=20, choices=NOTIFICATION_TYPES, default="order")
    notification = models.TextField(max_length=255)
    buyer = models.ForeignKey(Buyer, null=True, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, null=True, on_delete=models.CASCADE)
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.notification

    def get_recipient(self):
        if self.notification_type in ['promotion', 'end_promotion']:
            return self.buyer
        elif self.notification_type in ['shop', 'product']:
            return self.seller
        elif self.notification_type in ['message', 'order']:
            return self.seller, self.buyer


class Promotion(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    original_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    promotion_image = models.ImageField(upload_to='promotion images')
    discounted_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.promotion_image = self.product.product_image
        self.original_price = self.product.product_price
        self.discounted_price = self.calculate_discounted_price()
        super().save(*args, **kwargs)

    def calculate_discounted_price(self):
        discount = (self.discount_percentage / 100) * self.product.product_price
        return self.product.product_price - discount

    def __str__(self):
        return f"Promotion for {self.product.product_name} by {self.seller.seller_name}"


class Subscription(models.Model):
    SUB_TYPE_CHOICES = (
        ('basic', 'Basic'),
        ('professional', 'Professional')
    )
    SUB_AMOUNT_CHOICES = (
        (5000, '5000'),
        (9000, '9000')
    )
    SUB_INVENTORY_CHOICES = (
        (100, 100),
        (300, 300),
    )

    subcription_type = models.CharField(choices=SUB_TYPE_CHOICES, max_length=20, default='basic')
    subscription_amount = models.IntegerField(choices=SUB_AMOUNT_CHOICES, default=5000)
    subscription_description = models.CharField(max_length=255, default="The best way to get started with our services")
    subscription_inventory = models.IntegerField(choices=SUB_INVENTORY_CHOICES, default=100)
    duration = models.DurationField(default='30 days')
    created_at = models.DateField(auto_now_add=True)
    end_date = models.DateField(blank=True, null=True)

    def save(self, *args, **kwargs):
        self.end_date = self.created_at + self.duration
        super().save(*args, **kwargs)

    def delete_if_expired(self):
        if self.end_date and self.end_date < timezone.now().date():
            self.delete()

    def __str__(self):
        return self.get_sub_type_display()
