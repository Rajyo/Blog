# Create your views here.
from .models import Blog, Category
from .serializers import BlogSerializer, CategorySerializer
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    queryset = Blog.objects.order_by('-date')
    serializer_class = BlogSerializer
    paginator = None

    def update(self, request, *args, **kwargs):
        instance = self.queryset.get(pk=kwargs.get('pk'))
        serializer = self.serializer_class(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        post = serializer.save()
        print(post)
        try:
            cate = self.request.data['category']
            print(type(cate))
        except:
            cate = ""        
        if cate:
            category = Category.objects.get(category=cate)
            print(type(category))
            print(category)
            post.category = category
        else:
            print("wrong category")
        post.save()
        return Response(serializer.data)



class CreateBlogAPIView(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    queryset = Blog.objects.order_by('-date')
    serializer_class = BlogSerializer
    paginator = None

    def perform_create(self, serializer):
        post = serializer.save()
        print(post)
        # Set category
        try:
            cate = self.request.data['category']
            print(type(cate))
        except:
            cate = ""        
        if cate:
            # cat = Category.objects.all(category)
            # print(type(cat))
            # print(cat)
            category = Category.objects.get(category=cate)
            print(type(category))
            print(category)
            post.category = category
        else:
            print("wrong category")
        post.save()


class MyBlogViewset(viewsets.ViewSet):
    def retrieve(self, request, *args, **kwargs):
        queryset = Blog.objects.all()
        author = kwargs.get('author',None)
        author = Blog.objects.filter(author=author)
        serializer = BlogSerializer(author,many=True, context={'request': request})
        paginator = None
        return Response(serializer.data)

    

class CategoryViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Category.objects.all()
        queryset = Category.objects.order_by('cover')
        serializer = CategorySerializer(queryset, many=True, context={'request': request})
        paginator = None
        
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        queryset = Category.objects.all()
        category = kwargs.get('category',None)
        category = Category.objects.get(category=category)
        serializer = CategorySerializer(category, context={'request': request})
        paginator = None
        return Response(serializer.data)

