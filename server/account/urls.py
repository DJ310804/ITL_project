from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from account.views import (
    UserRegistrationView,
    UserLoginView,
    UserProfileView,
    UserChangePasswordView,
    SendPasswordResetEmailView,
    UserPasswordResetView
)
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
from .views import ConsumerViewSet,ProductViewSet, ClaimRewardView, RewardsViewSet, ConsumerDetailView
from .views import get_products

router = DefaultRouter()
router.register(r'consumers', ConsumerViewSet)
router.register(r'products', ProductViewSet)
router.register(r'rewards', RewardsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('scrape_products/', get_products, name='get_products'),
    path('claim_reward/', ClaimRewardView.as_view(), name='claim_reward'),
    path('consumer/<int:id>/', ConsumerDetailView.as_view(), name='claim_reward'),
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('login/',UserLoginView.as_view(),name='login'),
    path('profile/',UserProfileView.as_view(),name='profile'),
    path('changepassword/',UserChangePasswordView.as_view(),name='changepassword'),
    path('send-reset-password-email/',SendPasswordResetEmailView.as_view(),name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/',UserPasswordResetView.as_view(),name='reset-password'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

