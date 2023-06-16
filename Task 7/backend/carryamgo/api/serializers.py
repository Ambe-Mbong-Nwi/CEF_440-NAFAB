from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Seller, Buyer, Rating, Shop, Product, Order, Message, Notification, Promotion, Subscription


class SellerSerializer(serializers.ModelSerializer):
    id=serializers.ReadOnlyField(source='user.id')
    email = serializers.ReadOnlyField(source='user.email')
    username = serializers.ReadOnlyField(source='user.username')
    password = serializers.ReadOnlyField(source='user.password')

    class Meta:
        model = Seller
        fields = ['id', 'username', 'email', 'password', 'seller_number', 'seller_address', 'name_market']


class BuyerSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField(source='user.id')
    email = serializers.ReadOnlyField(source='user.email')
    username = serializers.ReadOnlyField(source='user.username')
    password = serializers.ReadOnlyField(source='user.password')

    class Meta:
        model = Buyer
        fields = ['id', 'username', 'email', 'password', 'buyer_number']


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


class PromotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promotion
        fields = '__all__'


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'


class SellerAuthenticationSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})


class BuyerAuthenticationSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
