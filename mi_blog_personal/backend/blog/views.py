"""from django.shortcuts import render, get_object_or_404
from .models import Post
def detalle_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'blog/detalle_post.html', {'post': post})"""

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Post
from .serializers import PostSerializer

@api_view(['GET'])
def lista_posts_api(request):
    posts = Post.objects.all().order_by('-fecha')
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def detalle_post_api(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    serializer = PostSerializer(post)
    return Response(serializer.data)
