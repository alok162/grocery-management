# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-07-18 12:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Grocery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skuid', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('price', models.FloatField(blank=True, null=True)),
                ('date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]