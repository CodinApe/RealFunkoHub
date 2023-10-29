from django.contrib import admin
from .models import Post, Comment

# Register your models here.

class imageAdmin(admin.ModelAdmin):
    list_display = ["title", "photo"]; # tells Django admin to display its contents in the admin dashboard.

admin.site.register(Post, imageAdmin); 
admin.site.register(Comment); 