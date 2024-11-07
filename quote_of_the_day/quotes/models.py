from django.db import models

class Quote(models.Model):
    quote = models.TextField()
    author = models.CharField(max_length=100)

    def __str__(self):
        return f'"{self.quote}" - {self.author}'
