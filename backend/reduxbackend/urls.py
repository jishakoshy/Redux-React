# urls.py

from django.urls import path
from . import views
# from .views import CustomObtainAuthToken
# path('api/login', CustomObtainAuthToken.as_view(), name='api-login'),

urlpatterns = [
    path('register/', views.register_user, name='register_user'),    
    path('login/', views.admin_login, name='admin_login'),

]
