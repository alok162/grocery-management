from django.conf.urls import url
from grocery_app import views

urlpatterns = [
    url(r'^V1/grocery/', views.GroceryPost.as_view()),
    url(r'^V1/get_grocery/(?P<name>\S+)/date=(?P<date>.+)/$',
        views.GroceryGet.as_view()),
    url(r'^V1/get_grocerybyid/(?P<skuid>.+)/detail/date=(?P<date>.+)/$',
        views.GroceryById.as_view()),
    url(r'^V1/grocer/(?P<pk>.+)/$', views.GroceryUpdate.as_view()),
    url(r'^V1/report/grocery/maxprice/$', views.MaxPriceReport.as_view()),
]
