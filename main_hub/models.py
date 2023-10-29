from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    """Model to handle posting- including a title, category, and optional text/image"""
    title = models.TextField(max_length=150); 
    text = models.TextField(max_length=600); 
    date_added = models.DateTimeField(auto_now_add=True); 
    photo = models.ImageField(upload_to='pics'); # tells Django to store the photo in a dir called pics under the media directory
    CATEGORY_CHOICES = (
        ('a', 'News'),
        ('b', 'Event'),
        ('c', 'Random'),
    )
    category = models.CharField(max_length=1, choices=CATEGORY_CHOICES, blank=True); 
    #Many to Many relationship allows users to have multiple likes, and posts can have multiple likes

    votes_total = models.IntegerField(default=0); 
    likers = models.ManyToManyField(User); 



class Comment(models.Model):
    """A class to handle users ability to comment on a pre-existing post"""
    text = models.TextField(max_length=200, blank=True); 
    date_added = models.DateTimeField(auto_now_add=True); 
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True); 

    def __str__(self):
        return self.text; 



    


