from rest_framework import serializers
from grocery_app.models import Grocery


class GroceryPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grocery
        fields = ['skuid', 'name']


class GroceryPutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grocery
        fields = ['price', 'date']
