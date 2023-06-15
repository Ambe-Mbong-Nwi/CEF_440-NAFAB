# Generated by Django 4.2.2 on 2023-06-14 15:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Buyer',
            fields=[
                ('buyer_id', models.AutoField(primary_key=True, serialize=False)),
                ('buyer_name', models.CharField(max_length=100)),
                ('buyer_number', models.CharField(max_length=20)),
                ('buyer_email', models.EmailField(blank=True, max_length=254, unique=True, verbose_name='Email Address')),
                ('buyer_address', models.CharField(max_length=30)),
                ('buyer_password', models.BinaryField(verbose_name='Password')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('product_name', models.CharField(max_length=100)),
                ('product_price', models.IntegerField()),
                ('product_quantity', models.IntegerField()),
                ('product_image', models.ImageField(blank=True, upload_to='images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Seller',
            fields=[
                ('seller_id', models.AutoField(primary_key=True, serialize=False)),
                ('seller_name', models.CharField(max_length=100)),
                ('seller_email', models.EmailField(blank=True, max_length=254, unique=True, verbose_name='Email Address')),
                ('seller_number', models.CharField(max_length=20)),
                ('seller_address', models.CharField(max_length=30)),
                ('seller_password', models.BinaryField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('shop_id', models.AutoField(primary_key=True, serialize=False)),
                ('shop_name', models.CharField(max_length=100)),
                ('shop_address', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.seller')),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.buyer')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.seller')),
            ],
        ),
        migrations.CreateModel(
            name='Promotion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('discount_percentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('original_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('discounted_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.seller')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='seller',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.seller'),
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('order_id', models.AutoField(primary_key=True, serialize=False)),
                ('order_quantity', models.IntegerField()),
                ('order_price', models.IntegerField()),
                ('order_status', models.CharField(default='Pending', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.buyer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product')),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('notification_id', models.AutoField(primary_key=True, serialize=False)),
                ('notification', models.TextField(max_length=255)),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.buyer')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.seller')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('message_id', models.AutoField(primary_key=True, serialize=False)),
                ('message', models.TextField(max_length=100)),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.buyer')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.seller')),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('cart_id', models.AutoField(primary_key=True, serialize=False)),
                ('cart_quantity', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.buyer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product')),
            ],
        ),
    ]