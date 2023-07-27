from rest_framework import serializers
from .models import Category, Blog

class ModalBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id','title','author','desc','cover','date']

class CategorySerializer(serializers.ModelSerializer):
    blogs = ModalBlogSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id','category','cover','blogs']




class ModalCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category']

class BlogSerializer(serializers.ModelSerializer):
    # category = serializers.SlugRelatedField(slug_field='category', read_only=True)
    category = ModalCategorySerializer(read_only=True)
    
    class Meta:
        model = Blog
        fields = ['id','title','desc','cover','date','category','author']


