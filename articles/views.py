from django.shortcuts import render, redirect
from django.views import View
from articles.models import Article
from .forms  import PostArticleForm


class IndexView(View):
  def get(self,request,*args,**kwargs):
    articles =  Article.objects.all().order_by('-created_at')
    form = PostArticleForm()
    return render(request, 'articles/index.html', {'articles': articles, 'form': form})

  def post(self, request, *args, **kwargs):
    form = PostArticleForm(request.POST)
    if form.is_valid():
      form.save()
      return redirect('articles:index')