# Generated by Django 3.2 on 2022-04-26 02:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('curricular', '0011_grade_problemaultimobalanceamento'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grade',
            name='problemaUltimoBalanceamento',
        ),
    ]