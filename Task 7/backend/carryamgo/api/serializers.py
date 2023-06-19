from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Seller, Buyer, Rating, Shop, Product, Order, Message, Notification, Promotion, Subscription


class SellerSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField(source='user.id')
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
    shop_name = serializers.CharField(source='shop.shop_name', read_only=True)
    seller_name = serializers.CharField(source='seller.user.username', read_only=True)
    name_market = serializers.CharField(source='seller.name_market', read_only=True)

    class Meta:
        model = Product
        fields = ['product_id', 'product_name', 'product_price', 'product_quantity',
                  'product_image', 'shop_name', 'seller_name', 'name_market']


class OrderSerializer(serializers.ModelSerializer):
    buyer = serializers.ReadOnlyField(source='buyer.user.username')
    product = serializers.ReadOnlyField(source='product.product_name')
    seller = serializers.ReadOnlyField(source='seller.user.username')
    product_price = serializers.ReadOnlyField(source='product.product_price')
    product_image = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = ['order_id', 'order_quantity', 'order_price', 'order_status', 'product_price',
                  'buyer', 'product', 'seller', 'product_image', 'created_at']

    def get_product_image(self, instance):
        return instance.product.product_image.url if instance.product.product_image else None

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['product_image'] = self.get_product_image(instance)
        return representation

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['order_price'] = instance.calculate_order_price()
        return representation


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
