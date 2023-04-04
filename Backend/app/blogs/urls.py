from django.urls import(
    path,
    include,
)
from rest_framework.routers import DefaultRouter
from blogs import views

router= DefaultRouter()
router.register('blog', views.BlogsViewSet)
router.register('tags', views.TagsViewSet)
app_name= 'blogs'

urlpatterns = [
    path('', include(router.urls)),
]