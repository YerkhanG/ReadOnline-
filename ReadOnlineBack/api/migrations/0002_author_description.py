# Generated by Django 4.2 on 2023-04-29 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='description',
            field=models.CharField(default='no descr', max_length=1000),
        ),
    ]
