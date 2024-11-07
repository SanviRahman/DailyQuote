from django.urls import path
from .views import QuoteOfTheDay, SearchQuotes

urlpatterns = [
    path('quote/', QuoteOfTheDay.as_view(), name='quote_of_the_day'),
    path('quotes/search/', SearchQuotes.as_view(), name='search_quotes'),
]