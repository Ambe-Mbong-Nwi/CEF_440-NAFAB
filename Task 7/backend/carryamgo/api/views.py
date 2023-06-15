from rest_framework import generics, status
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password
from django.utils.crypto import get_random_string
from rest_framework.permissions import IsAuthenticated
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication



from .models import Seller, Buyer, Rating, Shop, Product, Order, Message, Notification, Promotion, Subscription
from .serializers import (
    SellerSerializer, BuyerSerializer, RatingSerializer, ShopSerializer,
    ProductSerializer, OrderSerializer, MessageSerializer, NotificationSerializer,
    PromotionSerializer, SubscriptionSerializer
)

User = get_user_model()
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


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



class BuyerLoginView(generics.GenericAPIView):
    serializer_class = BuyerSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        buyer = User.objects.get(buyer_email=serializer.validated_data['buyer_email'])

        if not buyer.check_password(serializer.validated_data['buyer_password']):
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        payload = jwt_payload_handler(buyer)
        token = jwt_encode_handler(payload)

        return Response({'token': token})


class SellerLoginView(generics.GenericAPIView):
    serializer_class = SellerSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        seller = User.objects.get(seller_email=serializer.validated_data['seller_email'])

        if not seller.check_password(serializer.validated_data['seller_password']):
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        payload = jwt_payload_handler(seller)
        token = jwt_encode_handler(payload)

        return Response({'token': token})


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
