from django.contrib import admin
from django.contrib.admin import site
# Register your models here.
from curricular.models import Instituicao, Curso, Curriculo, Disciplina, Grade, GradeDisciplina, Relacionamento, Requisito

site.register(Instituicao)
site.register(Curso)
site.register(Curriculo)
site.register(Disciplina)
site.register(Grade)
site.register(GradeDisciplina)
site.register(Relacionamento)
site.register(Requisito)

