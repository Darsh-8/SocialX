from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
import json
from decouple import config

LANGFLOW_API_URL = config("LANGFLOW_API_URL")
APPLICATION_TOKEN = config("APPLICATION_TOKEN")
LANGFLOW_ID = config("LANGFLOW_ID")
FLOW_ID = config("FLOW_ID")

class ChatbotAPI(APIView):
    def post(self, request):
        message = request.data.get("message")
        if not message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

        api_url = f"{LANGFLOW_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{FLOW_ID}"
        print(api_url)
        headers = {
            "Authorization": f"Bearer {APPLICATION_TOKEN}",
            "Content-Type": "application/json"
        }
        payload = {
            "input_value": message,
            "output_type": "chat",
            "input_type": "chat"
        }
        response = requests.post(api_url, json=payload, headers=headers)

        if response.status_code == 200:
            return Response(response.json(), status=status.HTTP_200_OK)
        return Response({"error": "Failed to fetch response from Langflow"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
