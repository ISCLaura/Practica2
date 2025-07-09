"""from django.urls import path
from . import views
urlpatterns = [
    path('posts/<int:post_id>/', views.detalle_post, name='detalle_post'),
]"""
from django.urls import path
from . import views

urlpatterns = [
    path('api/posts/', views.lista_posts_api, name='api_lista_posts'),
    path('api/posts/<int:post_id>/', views.detalle_post_api, name='api_detalle_post'),
    # También puedes conservar las vistas HTML si deseas
]
