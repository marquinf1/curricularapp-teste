# Generated by Django 3.2 on 2022-03-30 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curricular', '0008_grade_embalanceamento'),
    ]

    operations = [
        migrations.AddField(
            model_name='grade',
            name='balanceamentoInterrompido',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
