from django.urls import path
from . import views

app_name = 'main_hub'; 
urlpatterns = [
    path('', views.index, name='index'),
    path('create_post/', views.create_post, name= 'create_post'),
    path('post/<int:post_id>/', views.post, name='post'),
    path('edit_post/<int:post_id>/', views.edit_post, name='edit_post'),
    path('delete_post<int:post_id>/', views.delete_post, name='delete_post'),
    path('like_post/<int:post_id>/', views.like_post, name='like_post'),

]
