from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from django.http import Http404
from grocery_app.serializers import GroceryPostSerializer
from grocery_app.serializers import GroceryPutSerializer
from grocery_app.models import Grocery
import re
from django.db.models import Max


class GroceryPost(APIView):
    def post(self, request, format=None):
        data = JSONParser().parse(request)
        serializer = GroceryPostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GroceryGet(APIView):
    def change_date_format(self, dt):
        return re.sub(r'(\d{1,2})-(\d{1,2})-(\d{4})', '\\3-\\2-\\1', dt)

    def get(self, request, name, date, format=None):
        new_date = self.change_date_format(date.replace('/', '-'))
        data = Grocery.objects.filter(
            name=name, date=new_date).values('skuid', 'price')
        return Response(data)


class GroceryById(APIView):

    def change_date_format(self, dt):
        return re.sub(r'(\d{1,2})-(\d{1,2})-(\d{4})', '\\3-\\2-\\1', dt)

    def get(self, request, skuid, date, format=None):
        new_date = self.change_date_format(date.replace('/', '-'))
        data = Grocery.objects.filter(
            date=new_date, skuid=skuid).values('skuid', 'price')
        return Response(data)


class GroceryUpdate(APIView):

    def change_date_format(self, dt):
        return re.sub(r'(\d{1,2})-(\d{1,2})-(\d{4})', '\\3-\\2-\\1', dt)

    def get_object(self, pk):
        try:
            return Grocery.objects.get(pk=pk)
        except Grocery.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        data = JSONParser().parse(request)
        grocery = self.get_object(pk)
        date = data['date']
        new_date = self.change_date_format(date.replace('/', '-'))
        new_data = {}
        new_data['date'] = new_date
        new_data['price'] = data['price']
        serializer = GroceryPutSerializer(grocery, data=new_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MaxPriceReport(APIView):
    def get(self, request, format=None):
        data = Grocery.objects.values('name').annotate(Max('price'))
        return Response(data)
