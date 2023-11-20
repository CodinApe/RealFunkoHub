from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import Http404
from .models import Post
from .forms import CreatePost, Comment

# Create your views here.

def index(request):
    data = Post.objects.all(); 
    # grabs all post objects with the category attribute set to 'a, b, c' (News, Events, Random)
    news_posts = Post.objects.filter(category = 'a'); 
    event_posts = Post.objects.filter(category = 'b'); 
    random_posts = Post.objects.filter(category = 'c'); 

    context = {'data': data, 'news_posts': news_posts, 'event_posts': event_posts, 'random_posts': random_posts}; 
    return render(request, 'main_hub/posts.html', context); 

@login_required(login_url='users:login')
def create_post(request):
    if request.method == 'POST':
        form = CreatePost(request.POST, request.FILES); 
        if form.is_valid():
            post = form.save(commit=False); 
            post.owner = request.user; 
            post.save();  
            return redirect('main_hub:index'); 
    else:
        form = CreatePost(); 

    context = {'form' : form}; 

    return render(request, 'main_hub/createPost.html', context); 

@login_required(login_url='users:login')
def edit_post(request, post_id):
    """Edit previous post by loading post form with previous data"""
    post = Post.objects.get(id=post_id); 
    if post.owner != request.user:
        raise Http404; 
    if request.method == 'POST':
        form = CreatePost(request.POST, request.FILES, instance=post); 
        if form.is_valid():
            form.save(); 
            return redirect('main_hub:index'); 
    else:
        form = CreatePost(instance=post); 
     
    context = {'post': post, 'form': form}; 
    
    return render(request, 'main_hub/edit_post.html', context); 


def delete_post(request, post_id):
    """Delete a post"""
    post = Post.objects.get(id=post_id); 
    if post.owner != request.user:
        raise Http404; 
    if request.method == 'POST':

        post.delete(); 
        return redirect('main_hub:index'); 

    context = {'post': post}; 

    return render(request, 'main_hub/delete_post.html', context); 
    
    
@login_required(login_url='users:login')
def post(request, post_id):
    """A selected post to view and comment on"""
    post = Post.objects.get(id=post_id); 
    if request.method == 'POST':
        form = Comment(request.POST); 
        if form.is_valid():
            new_comment = form.save(); 
            new_comment.post = post; 
            new_comment.owner=(request.user); 
            new_comment.save(); 
             
            return redirect('main_hub:post', post_id); 
    else:
        form = Comment(); 
    comments = post.comment_set.order_by('date_added'); 
    
    likers = post.likers.all(); 
    votes_total = post.votes_total; 
    context = {'post': post, 'comments': comments, 'form': form, 'likers': likers, 'votes': votes_total}; 

    return render(request, 'main_hub/post.html', context); 

@login_required
def like_post(request, post_id):
    """"""
    post = Post.objects.get(id=post_id); 
    if request.method == 'POST':
        liker = post.likers.filter(pk=request.user.pk); 
        if liker.exists():
            post.votes_total -= 1; 
            post.likers.remove(request.user.pk); 
            post.save(); 
            return redirect('main_hub:post', post_id);  
        else:
            post.votes_total += 1; 
            post.likers.add(request.user); 
            post.save(); 
            return redirect('main_hub:post', post_id);  
