# Generated by Django 3.2 on 2022-03-20 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curricular', '0006_alter_gradedisciplina_creditos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gradedisciplinacursar',
            name='periodo',
            field=models.IntegerField(default=0, help_text='Período da disciplina', null=True),
        ),
    ]
