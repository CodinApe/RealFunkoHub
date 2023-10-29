from django import forms
from .models import Post, Comment

class CreatePost(forms.ModelForm):
    class Meta:
        model = Post; 
        fields = ['title', 'text', 'photo', 'category']; 

class Comment(forms.ModelForm):
    class Meta:
        model = Comment; 
        fields = ['text']; 


