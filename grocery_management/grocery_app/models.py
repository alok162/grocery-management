from django.db import models

# Create your models here.
from datetime import date
TIME_FORMAT = '%d/%m/%Y'


class Grocery(models.Model):
    skuid = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)
    price = models.FloatField(null=True, blank=True)
    date = models.DateField(null=True, blank=True)
