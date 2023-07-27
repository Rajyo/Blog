from .views import BlogViewSet, CategoryViewSet, CreateBlogAPIView,MyBlogViewset
from rest_framework.routers import DefaultRouter
from django.urls import path, include

app_name = "blog"

router = DefaultRouter()
router.register(r'blog', BlogViewSet, basename='blog')
# router.register(r'category', CategoryViewSet, basename='category')
router.register(r'createBlog', CreateBlogAPIView, basename='create_blog')

list_category = CategoryViewSet.as_view({'get':'list'})
retrieve_category = CategoryViewSet.as_view({'get':'retrieve'})

retrieve_author= MyBlogViewset.as_view({'get':'retrieve'})

urlpatterns = [
    path('category/', list_category, name='list-category'),
    path('category/<str:category>/', retrieve_category, name='retrieve-category'),
    path('author/<str:author>/', retrieve_author, name='retrieve-author'),
    path('', include(router.urls))
]