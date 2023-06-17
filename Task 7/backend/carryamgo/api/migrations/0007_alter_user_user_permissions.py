# Generated by Django 4.2.2 on 2023-06-16 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('api', '0006_alter_user_user_permissions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(related_name='api_user_permissions', to='auth.permission'),
        ),
    ]