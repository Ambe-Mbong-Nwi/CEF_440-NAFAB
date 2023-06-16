from django.db import models
from django.contrib.auth.models import AbstractUser, Permission, Group
from django.db.models import Avg
from django.utils import timezone


class User(AbstractUser):
    groups = models.ManyToManyField(
        Group,
        related_name='api_user_groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='api_user_permissions',
    )
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=30, null=True, blank=True)
    last_name = models.CharField(max_length=150, null=True, blank=True)


class Seller(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, default=None)
    seller_number = models.CharField(max_length=20)
    seller_address = models.CharField(max_length=30)
    name_market = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class Buyer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, default=None)
    buyer_number = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class Rating(models.Model):
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE, related_name='buyer_ratings')
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='seller_ratings')
    rating = models.IntegerField(choices=((1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')))

    @property
    def seller_average_rating(self):
        average_rating = Rating.objects.filter(seller=self.seller).aggregate(Avg('rating'))['rating__avg']
        return average_rating


class Shop(models.Model):
    shop_id = models.AutoField(primary_key=True)
    shop_name = models.CharField(max_length=100)
    shop_address = models.CharField(max_length=30)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='shops')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.shop_name

    def save(self, *args, **kwargs):
        created = not self.pk  # Check if the shop is being created
        super().save(*args, **kwargs)
        if created:
            Notification.objects.create(
                notification_type='shop',
                notification='New shop created',
                seller=self.seller,
            )


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    product_price = models.IntegerField(blank=False)
    product_quantity = models.IntegerField(blank=False)
    product_image = models.ImageField(upload_to='Product Image', blank=True)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, default=1)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='products')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name

    def save(self, *args, **kwargs):
        created = not self.pk  # Check if the product is being created
        super().save(*args, **kwargs)
        if created:
            Notification.objects.create(
                notification_type='product',
                notification='New product created',
                seller=self.seller,
            )


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    order_quantity = models.IntegerField(blank=False)
    order_price = models.IntegerField(blank=False, default=0)
    order_status = models.CharField(max_length=100, default='Pending')
    product_price = models.IntegerField(blank=False, default=0)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE, related_name='orders')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='orders')
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='orders', default=None)
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

    def save(self, *args, **kwargs):
        created = not self.pk  # Check if the order is being created
        super().save(*args, **kwargs)
        if created:
            Notification.objects.create(
                notification_type='order',
                notification='New order made',
                buyer=self.buyer,
                seller=self.seller,
            )


class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    message = models.TextField(max_length=100)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE, related_name='messages_sent')
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='messages_received')
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    def save(self, *args, **kwargs):
        created = not self.pk  # Check if the message is being created
        super().save(*args, **kwargs)
        if created:
            Notification.objects.create(
                notification_type='message',
                notification='New message received',
                buyer=self.buyer,
                seller=self.seller,
            )


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

    def save(self, *args, **kwargs):
        if self.pk is None:
            if self.notification_type == 'product':
                self.notification = 'New product created'
                self.buyer = None
                self.seller = self.seller
            elif self.notification_type == 'promotion':
                self.notification = 'New promotion created'
                self.buyer = self.buyer
                self.seller = None
            elif self.notification_type == 'end_promotion':
                self.notification = 'Promotion has ended'
                self.buyer = self.buyer
                self.seller = None
            elif self.notification_type == 'message':
                self.notification = 'New message received'
                self.buyer = self.buyer
                self.seller = self.seller
            elif self.notification_type == 'shop':
                self.notification = 'New shop created'
                self.buyer = None
                self.seller = self.seller
            elif self.notification_type == 'order':
                self.notification = 'New order made'
                self.buyer = self.buyer
                self.seller = self.seller
        super().save(*args, **kwargs)

    def get_recipient(self):
        if self.notification_type in ['promotion', 'end_promotion']:
            return self.buyer
        elif self.notification_type in ['shop', 'product']:
            return self.seller
        elif self.notification_type in ['message', 'order']:
            return self.seller, self.buyer


class Promotion(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE, related_name='promotions')
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
        return f"Promotion for {self.product.product_name} by {self.seller.user.username}"


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
    subscription_type = models.CharField(choices=SUB_TYPE_CHOICES, max_length=20, default='basic')
    subscription_amount = models.IntegerField(choices=SUB_AMOUNT_CHOICES, default=5000)
    subscription_description = models.CharField(max_length=255, default="The best way to get started with our services")
    subscription_inventory = models.IntegerField(choices=SUB_INVENTORY_CHOICES, default=100)
    duration = models.DurationField(default='30 days')
    seller = models.OneToOneField(Seller, on_delete=models.CASCADE, related_name='subscriptions')

    def __str__(self):
        return f"{self.subscription_type} Subscription"
