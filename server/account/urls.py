from django.urls import path,include
from account.views import UserRegistrationView,UserLoginView,UserProfileView,UserChangePasswordView,SendPasswordResetEmailView,UserPasswordResetView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
from .views import ConsumerViewSet

router = DefaultRouter()
router.register(r'consumers', ConsumerViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('login/',UserLoginView.as_view(),name='login'),
    path('profile/',UserProfileView.as_view(),name='profile'),
    path('changepassword/',UserChangePasswordView.as_view(),name='changepassword'),
    path('send-reset-password-email/',SendPasswordResetEmailView.as_view(),name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/',UserPasswordResetView.as_view(),name='reset-password'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]