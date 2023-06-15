from rest_framework import generics, status
from django.contrib.auth import get_user_model, authenticate, login
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password
from django.utils.crypto import get_random_string
from rest_framework.permissions import IsAuthenticated

from .models import Seller, Buyer, Rating, Shop, Product, Order, Message, Notification, Promotion, Subscription
from .serializers import (
    SellerSerializer, BuyerSerializer, RatingSerializer, ShopSerializer,
    ProductSerializer, OrderSerializer, MessageSerializer, NotificationSerializer,
    PromotionSerializer, SubscriptionSerializer, BuyerAuthenticationSerializer, SellerAuthenticationSerializer
)

User = get_user_model()


class SellerListCreateView(generics.ListCreateAPIView):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    permission_classes = [IsAuthenticated]


class SellerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    permission_classes = [IsAuthenticated]


class BuyerListCreateView(generics.ListCreateAPIView):
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer
    permission_classes = [IsAuthenticated]


class BuyerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer
    permission_classes = [IsAuthenticated]


class RatingListCreateView(generics.ListCreateAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = [IsAuthenticated]


class RatingRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = [IsAuthenticated]


class ShopListCreateView(generics.ListCreateAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    permission_classes = [IsAuthenticated]


class ShopRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    permission_classes = [IsAuthenticated]


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]


class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]


class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]


class OrderRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]


class MessageListCreateView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]


class MessageRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]


class NotificationListCreateView(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]


class NotificationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]


class PromotionListCreateView(generics.ListCreateAPIView):
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializer
    permission_classes = [IsAuthenticated]


class PromotionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializer
    permission_classes = [IsAuthenticated]


class SubscriptionListCreateView(generics.ListCreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    permission_classes = [IsAuthenticated]


class SubscriptionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    permission_classes = [IsAuthenticated]


class SellerAuthenticationAPIView(APIView):
    def post(self, request):
        serializer = SellerAuthenticationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_seller:
            login(request, user)
            return Response({'detail': 'Seller authentication successful.'})
        else:
            return Response({'detail': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)


class BuyerAuthenticationAPIView(APIView):
    def post(self, request):
        serializer = BuyerAuthenticationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_buyer:
            login(request, user)
            return Response({'detail': 'Buyer authentication successful.'})
        else:
            return Response({'detail': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)


class BuyerRegisterView(generics.CreateAPIView):
    queryset = User.objects.none()
    serializer_class = BuyerSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        user.is_buyer = True
        user.set_password(user.password)
        user.save()


class SellerRegisterView(generics.CreateAPIView):
    queryset = User.objects.none()
    serializer_class = SellerSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        user.is_seller = True
        user.set_password(user.password)
        user.save()


class ForgotPasswordAPIView(APIView):
    def post(self, request):
        number = request.data.get('number')
        user_type = request.data.get('user_type')  # Either 'buyer' or 'seller'

        if user_type == 'buyer':
            user = get_object_or_404(Buyer, buyer_number=number)
        elif user_type == 'seller':
            user = get_object_or_404(Seller, seller_number=number)
        else:
            return Response({'error': 'Invalid user type'})

        # Generate a random reset password token
        reset_password_token = get_random_string(length=32)

        # Update the user's reset_password_token field
        user.reset_password_token = make_password(reset_password_token)
        user.save()

        # Return the reset password token to the user
        return Response({'reset_password_token': reset_password_token})


class ResetPasswordAPIView(APIView):
    def post(self, request):
        reset_password_token = request.data.get('reset_password_token')
        new_password = request.data.get('new_password')
        user_type = request.data.get('user_type')  # Either 'buyer' or 'seller'

        if user_type == 'buyer':
            user = Buyer.objects.filter(reset_password_token=make_password(reset_password_token)).first()
        elif user_type == 'seller':
            user = Seller.objects.filter(reset_password_token=make_password(reset_password_token)).first()
        else:
            return Response({'error': 'Invalid user type'})

        if not user:
            return Response({'error': 'Invalid reset password token'})

        # Update the user's password
        user.buyer_password = make_password(new_password) if user_type == 'buyer' else make_password(new_password)
        user.reset_password_token = None  # Clear the reset password token
        user.save()

        return Response({'message': 'Password reset successful'})
