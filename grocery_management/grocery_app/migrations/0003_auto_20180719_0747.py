# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-07-19 07:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery_app', '0002_auto_20180718_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grocery',
            name='date',
            field=models.DateField(blank=True, null=True, verbose_name='%d/%m/%Y'),
        ),
    ]
