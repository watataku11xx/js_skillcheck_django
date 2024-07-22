from .models import Article
from django import forms

class PostArticleForm(forms.ModelForm):
  class Meta:
    model = Article
    fields = ['text']