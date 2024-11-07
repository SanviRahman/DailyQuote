from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Quote
from .serializers import QuoteSerializer
import random

class QuoteOfTheDay(APIView):
    def get(self, request):
        # Select a random quote
        quote = random.choice(Quote.objects.all())
        if not quote:
            return Response({'error': 'No quotes found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = QuoteSerializer(quote)
        return Response(serializer.data)

class SearchQuotes(APIView):
    def get(self, request):
        author = request.GET.get('author', '')
        quotes = Quote.objects.filter(author__icontains=author)
        serializer = QuoteSerializer(quotes, many=True)
        return Response({'results': serializer.data})
