from django.db import models

class Article(models.Model):
  class Meta:
    db_table = 'articles'

  text = models.TextField(null=False)
  created_at = models.DateTimeField(auto_now_add=True)