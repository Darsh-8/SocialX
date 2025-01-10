# urls.py
from django.urls import path
from .views import ChatbotAPI

urlpatterns = [
    path('api/chatbot/', ChatbotAPI.as_view(), name='chatbot-api'),
]
