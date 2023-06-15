from django.contrib.auth import get_user_model
from rest_framework import authentication, exceptions
from rest_framework_jwt.authentication import BaseJSONWebTokenAuthentication
from rest_framework_jwt import utils

User = get_user_model()

class BuyerSellerAuthentication(BaseJSONWebTokenAuthentication):
    def authenticate(self, request):
        try:
            user, token = super().authenticate(request)
            user_type = user.user_type

            if user_type == 'buyer':
                user = User.objects.get(id=user.id, is_buyer=True)
            elif user_type == 'seller':
                user = User.objects.get(id=user.id, is_seller=True)
            else:
                raise exceptions.AuthenticationFailed('Invalid user type')

            return (user, token)

        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('User not found')
        except utils.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed('Token has expired')
        except IndexError:
            raise exceptions.AuthenticationFailed('Token not provided')

    def authenticate_header(self, request):
        return 'Bearer'
