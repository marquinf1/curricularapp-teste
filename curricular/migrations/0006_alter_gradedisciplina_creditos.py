# Generated by Django 3.2 on 2022-03-20 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curricular', '0005_alter_gradedisciplina_retencao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gradedisciplina',
            name='creditos',
            field=models.IntegerField(default=0, help_text='Créditos da disciplina na grade'),
        ),
    ]
