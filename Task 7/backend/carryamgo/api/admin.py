from django.contrib import admin

# Register your models here.
from . models import Seller, Buyer, Rating, Product, Order, Message, Notification, Shop, Promotion, Subscription

admin.site.register(Seller) 
admin.site.register(Buyer)
admin.site.register(Rating)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Message)
admin.site.register(Notification)
admin.site.register(Shop)
admin.site.register(Promotion)
admin.site.register(Subscription)