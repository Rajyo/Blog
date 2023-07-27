from django.db import models

# Create your models here.
class Category(models.Model):
    id = models.SmallAutoField(auto_created=True, primary_key=True, blank=False, null=False)
    category = models.CharField(max_length=50)
    cover = models.ImageField(upload_to='category', blank=True, null=True)

    def __str__(self):
        return self.category



class Blog(models.Model):
    id = models.SmallAutoField(auto_created=True, primary_key=True, blank=False, null=False)
    title = models.CharField(max_length=100)
    desc = models.TextField()
    category = models.ForeignKey(Category, related_name='blogs', on_delete=models.CASCADE, blank=True, null=True)
    author = models.CharField(max_length=50)
    cover = models.ImageField(upload_to='blog', blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    # created_date = models.DateTimeField(auto_now_add = True)  
    # updated_date = models.DateTimeField(auto_now = True)

    def __str__(self) -> str:
        return self.title
