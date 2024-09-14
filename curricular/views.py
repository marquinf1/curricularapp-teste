# Create your views here.
from __future__ import absolute_import
import os
import tempfile

from django.contrib import messages
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import Group
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Count
from django.db.models import Max
from django.db.models import Q
from django.db.models import Subquery
from django.db.models import Sum
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.template import loader
from django.template.loader import render_to_string
from django.urls import reverse
from gurobipy import gurobipy
from gurobipy import GRB
from weasyprint import HTML
import time
from celery.result import AsyncResult
from django.http import JsonResponse

from .forms import SignUpForm, EditProfileForm
from .models import Instituicao, Curso, Curriculo, Grade, Disciplina, GradeDisciplina, Relacionamento, Requisito, \
    GradeDisciplinaCursar, UserCurso

from celery import shared_task, uuid
from celery.app import default_app
from balancing.celery import app

#os numeros correspondem à posição na linha do array elevado ao quadrato. Entretanto,
#verificar o motivo de unal e usal (2014) utilizarem outra abordagem em linhas iguais à terceira (vacation???)
DISTANCIA_SEMESTRES = [[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324],  # 0
                       [100, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289],  # 1
                       [100, 100, 0, 2, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289],  # 2
                       [100, 100, 100, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225],  # 3
                       [100, 100, 100, 100, 0, 2, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225],  # 4
                       [100, 100, 100, 100, 100, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169],  # 5
                       [100, 100, 100, 100, 100, 100, 0, 2, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169],  # 6
                       [100, 100, 100, 100, 100, 100, 100, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121],  # 7
                       [100, 100, 100, 100, 100, 100, 100, 100, 0, 2, 9, 16, 25, 36, 49, 64, 81, 100, 121],  # 8
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81],  # 9
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 2, 9, 16, 25, 36, 49, 64, 81],  # 10
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 1, 4, 9, 16, 25, 36, 49],  # 11
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 2, 9, 16, 25, 36, 49], #12
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 1, 4, 9, 16, 25], #13
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 2, 9, 16, 25], #14
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 1, 4, 9], #15
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 2, 9], #16
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 1], #17
                       [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0]] #18

# constantes que controlam as distâncias entre disciplinas de acordo com o grau de relação entre estas
DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO = 0;
DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO = 2;

PONTUACAOINICIALRELACAO = 1;
PONTUACAORELACAOPREREQUISITO = 9;  # apenas para pré-requisitos

PARAROTIMIZACAO = 'NAO'
TASKIDCORRENTE = None


def instituicao_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        instituicoesList = Instituicao.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(instituicoesList, 100)

        try:
            instituicoes = paginator.page(page)
        except PageNotAnInteger:
            instituicoes = paginator.page(1)
        except EmptyPage:
            instituicoes = paginator.page(paginator.num_pages)

        context = {'instituicoes': instituicoes}

        if 'success' in request.GET:
            context = {**context, 'message': 'success'}

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'instituicaoJaCadastrada' in request.GET:
            context = {**context, 'message': 'instituicaoJaCadastrada'}

        if 'cursoAssociado' in request.GET:
            context = {**context, 'message': 'cursoAssociado'}

        template = loader.get_template('admin/instituicao/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def instituicao_create(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':

            instituicoes = Instituicao.objects.all()

            for instituicao in instituicoes:
                if instituicao.nome == request.POST['nome'] or instituicao.sigla == request.POST['sigla']:
                    return HttpResponseRedirect(reverse('instituicao_index') + '?instituicaoJaCadastrada')

            instituicao = Instituicao(
                nome=request.POST['nome'],
                sigla=request.POST['sigla'],
                pais=request.POST['pais'],
                estado=request.POST['estado'],
                cidade=request.POST['cidade'],
            )
            try:
                instituicao.save()
            except Exception as e:
                return print(e)
            return HttpResponseRedirect(reverse('instituicao_index') + '?success')

        context = {}
        template = loader.get_template('admin/instituicao/create.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def instituicao_edit(request, instituicao_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        instituicao = Instituicao.objects.filter(id=instituicao_id).first()

        if request.method == 'POST':
            instituicoes = Instituicao.objects.all()

            for instituicaoEditar in instituicoes:
                if instituicao.id != instituicaoEditar.id and (
                        instituicaoEditar.nome == request.POST['nome'] or instituicaoEditar.sigla == request.POST[
                    'sigla']):
                    return HttpResponseRedirect(reverse('instituicao_index') + '?instituicaoJaCadastrada')

            instituicao.nome = request.POST['nome']
            instituicao.sigla = request.POST['sigla']
            instituicao.pais = request.POST['pais']
            instituicao.estado = request.POST['estado']
            instituicao.cidade = request.POST['cidade']
            instituicao.save()
            return HttpResponseRedirect(reverse('instituicao_index') + '?success')

        context = {'instituicao': instituicao}
        template = loader.get_template('admin/instituicao/edit.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def instituicao_view(request, instituicao_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        instituicao = Instituicao.objects.filter(id=instituicao_id).first()
        context = {'instituicao': instituicao}
        template = loader.get_template('admin/instituicao/view.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def instituicao_delete(request, instituicao_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            curso = Curso.objects.filter(instituicao_id=instituicao_id).first()
            if curso != None:
                return HttpResponseRedirect(reverse('instituicao_index') + '?cursoAssociado')
            Instituicao.objects.filter(id=instituicao_id).delete()
            return HttpResponseRedirect(reverse('instituicao_index') + '?successDelete')
        instituicao = Instituicao.objects.filter(id=instituicao_id).first()
        context = {'instituicao': instituicao}
        template = loader.get_template('admin/instituicao/delete.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curso_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        instituicoes = Instituicao.objects.all()
        if request.method == 'POST' and request.POST['instituicao_id'] != '':
            cursosList = Curso.objects.filter(
                instituicao_id=request.POST['instituicao_id'])
            page = request.GET.get('page', 1)
            paginator = Paginator(cursosList, 100)

            try:
                cursos = paginator.page(page)
            except PageNotAnInteger:
                cursos = paginator.page(1)
            except EmptyPage:
                cursos = paginator.page(paginator.num_pages)

            instituicao = Instituicao.objects.filter(id=request.POST['instituicao_id']).first()
            context = {'instituicaoSelection': instituicao, 'instituicoes': instituicoes, 'cursos': cursos}

        else:
            instituicaoId = request.GET.get('instituicao_id')
            if instituicaoId:
                cursosList = Curso.objects.filter(
                    instituicao_id=instituicaoId)
                instituicao = Instituicao.objects.filter(id=instituicaoId).first()
            else:
                cursosList = Curso.objects.all()[:100]

            page = request.GET.get('page', 1)
            paginator = Paginator(cursosList, 100)

            try:
                cursos = paginator.page(page)
            except PageNotAnInteger:
                cursos = paginator.page(1)
            except EmptyPage:
                cursos = paginator.page(paginator.num_pages)

            if instituicaoId:
                context = {'instituicaoSelection': instituicao, 'instituicoes': instituicoes, 'cursos': cursos}
            else:
                context = {'instituicoes': instituicoes, 'cursos': cursos}

        if 'success' in request.GET:
            context = {**context, 'message': 'success'}

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'cursoJaCadastrado' in request.GET:
            context = {**context, 'message': 'cursoJaCadastrado'}

        if 'curriculoAssociado' in request.GET:
            context = {**context, 'message': 'curriculoAssociado'}

        if 'disciplinaAssociada' in request.GET:
            context = {**context, 'message': 'disciplinaAssociada'}

        if 'usuarioAssociado' in request.GET:
            context = {**context, 'message': 'usuarioAssociado'}

        template = loader.get_template('admin/curso/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curso_create(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            cursos = Curso.objects.filter(instituicao_id=request.POST['instituicao_id'])

            for curso in cursos:
                if curso.nome == request.POST['nome'] or curso.codigo == request.POST['codigo']:
                    print(curso.nome + ' ' + curso.codigo)
                    return HttpResponseRedirect(reverse('curso_index') + '?cursoJaCadastrado')

            instituicao = Instituicao.objects.filter(id=request.POST['instituicao_id']).first()
            curso = Curso(
                nome=request.POST['nome'],
                instituicao=instituicao,
                codigo=request.POST['codigo']
            )
            try:
                curso.save()
            except:
                return
            return HttpResponseRedirect(reverse('curso_index') + '?successCreate')

        instituicoes = Instituicao.objects.all()

        context = {'instituicoes': instituicoes}

        template = loader.get_template('admin/curso/create.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curso_view(request, curso_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        curso = Curso.objects.filter(id=curso_id).first()
        context = {'curso': curso}
        template = loader.get_template('admin/curso/view.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curso_edit(request, curso_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        curso = Curso.objects.filter(id=curso_id).first()
        instituicoes = Instituicao.objects.all()

        if request.method == 'POST':
            cursos = Curso.objects.filter(instituicao_id=request.POST['instituicao_id'])
            print(cursos.query)
            for cursoEditar in cursos:
                if curso.id != cursoEditar.id and (
                        cursoEditar.nome == request.POST['nome'] or cursoEditar.codigo == request.POST['codigo']):
                    return HttpResponseRedirect(reverse('curso_index') + '?cursoJaCadastrado')

            instituicao = Instituicao.objects.filter(id=request.POST['instituicao_id']).first()
            curso.instituicao = instituicao
            curso.nome = request.POST['nome']
            curso.codigo = request.POST['codigo']
            curso.save()
            return HttpResponseRedirect(reverse('curso_index') + '?success')

        context = {'curso': curso, 'instituicoes': instituicoes}
        template = loader.get_template('admin/curso/edit.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curso_delete(request, curso_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):

        if request.method == 'POST':
            curriculo = Curriculo.objects.filter(curso_id=curso_id).first()
            if curriculo != None:
                return HttpResponseRedirect(reverse('curso_index') + '?curriculoAssociado')
            disciplina = Disciplina.objects.filter(curso_id=curso_id).first()
            if disciplina != None:
                return HttpResponseRedirect(reverse('curso_index') + '?disciplinaAssociada')
            userCurso = UserCurso.objects.filter(curso_id=curso_id).first()
            if userCurso != None:
                return HttpResponseRedirect(reverse('curso_index') + '?usuarioAssociado')
            Curso.objects.filter(id=curso_id).delete()
            return HttpResponseRedirect(reverse('curso_index') + '?successDelete')

        curso = Curso.objects.filter(id=curso_id).first()
        context = {'curso': curso}
        template = loader.get_template('admin/curso/delete.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curriculo_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        cursos = Curso.objects.filter(
            id__in=Subquery(UserCurso.objects.values('curso_id').filter(user_id=request.user.id).order_by('curso_id')))
        if request.method == 'POST' and request.POST['curso_id'] != '':
            curriculosList = Curriculo.objects.filter(
                curso_id=request.POST['curso_id'])
            page = request.GET.get('page', 1)
            paginator = Paginator(curriculosList, 100)

            try:
                curriculos = paginator.page(page)
            except PageNotAnInteger:
                curriculos = paginator.page(1)
            except EmptyPage:
                curriculos = paginator.page(paginator.num_pages)

            curso = Curso.objects.filter(id=request.POST['curso_id']).first()
            context = {'cursoSelection': curso, 'cursos': cursos, 'curriculos': curriculos}

        else:
            cursoId = request.GET.get('curso_id')
            if cursoId:
                curriculosList = Curriculo.objects.filter(
                    curso__id=cursoId)
                curso = Curso.objects.filter(id=cursoId).first()
            else:
                curriculosList = Curriculo.objects.filter(curso__id__in=Subquery(cursos.values('id')))[:100]

            page = request.GET.get('page', 1)
            paginator = Paginator(curriculosList, 100)

            try:
                curriculos = paginator.page(page)
            except PageNotAnInteger:
                curriculos = paginator.page(1)
            except EmptyPage:
                curriculos = paginator.page(paginator.num_pages)

            if cursoId:
                context = {'cursoSelection': curso, 'cursos': cursos, 'curriculos': curriculos}
            else:
                context = {'cursos': cursos, 'curriculos': curriculos}

        if 'success' in request.GET:
            context = {**context, 'message': 'success'}

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'curriculoJaCadastrado' in request.GET:
            context = {**context, 'message': 'curriculoJaCadastrado'}

        if 'gradeAssociada' in request.GET:
            context = {**context, 'message': 'gradeAssociada'}

        template = loader.get_template('admin/curriculo/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curriculo_create(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            curriculos = Curriculo.objects.filter(curso_id=request.POST['curso_id'])

            for curriculo in curriculos:
                if curriculo.nome == request.POST['nome']:
                    return HttpResponseRedirect(reverse('curriculo_index') + '?curriculoJaCadastrado')

            curso = Curso.objects.filter(id=request.POST['curso_id']).first()
            curriculo = Curriculo(
                curso=curso,
                nome=request.POST['nome'],
                quantidadeDisciplinas=request.POST['quantidadeDisciplinas'],
                quantidadePeriodos=request.POST['quantidadePeriodos'],
                cargaMinimaPorPeriodo=request.POST['cargaMinimaPorPeriodo'],
                cargaMaximaPorPeriodo=request.POST['cargaMaximaPorPeriodo'],
                quantidadeMinimaDisciplinasPorPeriodo=request.POST['quantidadeMinimaDisciplinasPorPeriodo'],
                quantidadeMaximaDisciplinasPorPeriodo=request.POST['quantidadeMaximaDisciplinasPorPeriodo'],
                quantidadePeriodosCicloBasico=request.POST['quantidadePeriodosCicloBasico'],
            )
            try:
                curriculo.save()
            except:
                return
            return HttpResponseRedirect(reverse('curriculo_index') + '?success')

        cursos = Curso.objects.filter(
            id__in=Subquery(UserCurso.objects.values('curso_id').filter(user_id=request.user.id).order_by('curso_id')))

        context = {'cursos': cursos}
        template = loader.get_template('admin/curriculo/create.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curriculo_view(request, curriculo_id=None):
    if request.user.is_authenticated:
        curriculo = Curriculo.objects.filter(id=curriculo_id).first()
        context = {'curriculo': curriculo}
        template = loader.get_template('admin/curriculo/view.html')
        return HttpResponse(template.render(context, request))
    else:
        return redirect('login')


def curriculo_edit(request, curriculo_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        curriculo = Curriculo.objects.filter(id=curriculo_id).first()
        cursos = Curso.objects.filter(
            id__in=Subquery(UserCurso.objects.values('curso_id').filter(user_id=request.user.id).order_by('curso_id')))

        if request.method == 'POST':
            curriculos = Curriculo.objects.filter(curso_id=request.POST['curso_id'])

            for curriculoEditar in curriculos:
                if curriculo.id != curriculoEditar.id and curriculoEditar.nome == request.POST['nome']:
                    return HttpResponseRedirect(reverse('curriculo_index') + '?curriculoJaCadastrado')

            curso = Curso.objects.filter(id=request.POST['curso_id']).first()
            curriculo.curso = curso
            curriculo.nome = request.POST['nome']
            curriculo.quantidadeDisciplinas = request.POST['quantidadeDisciplinas']
            curriculo.quantidadePeriodos = request.POST['quantidadePeriodos']
            curriculo.cargaMinimaPorPeriodo = request.POST['cargaMinimaPorPeriodo']
            curriculo.cargaMaximaPorPeriodo = request.POST['cargaMaximaPorPeriodo']
            curriculo.quantidadeMinimaDisciplinasPorPeriodo = request.POST['quantidadeMinimaDisciplinasPorPeriodo']
            curriculo.quantidadeMaximaDisciplinasPorPeriodo = request.POST['quantidadeMaximaDisciplinasPorPeriodo']
            curriculo.quantidadePeriodosCicloBasico = request.POST['quantidadePeriodosCicloBasico']

            curriculo.save()
            return HttpResponseRedirect(reverse('curriculo_index') + '?success')

        context = {'curriculo': curriculo, 'cursos': cursos}
        template = loader.get_template('admin/curriculo/edit.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def curriculo_delete(request, curriculo_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            grade = Grade.objects.filter(curriculo_id=curriculo_id).first()
            if grade != None:
                return HttpResponseRedirect(reverse('curriculo_index') + '?gradeAssociada')

            Curriculo.objects.filter(id=curriculo_id).delete()
            return HttpResponseRedirect(reverse('curriculo_index') + '?successDelete')

        curriculo = Curriculo.objects.filter(id=curriculo_id).first()
        context = {'curriculo': curriculo}
        template = loader.get_template('admin/curriculo/delete.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        curriculos = Curriculo.objects.filter(curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id).order_by('curso_id', 'id'))).order_by(
            'id')
        if request.method == 'POST':
            if request.POST['curriculo_id'] != '':
                if request.POST['situacaoGrades'] == '1':
                    gradesList = Grade.objects.filter(
                        curriculo_id=request.POST['curriculo_id'], gradeAluno=False, solucao=False).order_by('id')
                elif request.POST['situacaoGrades'] == '2':
                    gradesList = Grade.objects.filter(
                        curriculo_id=request.POST['curriculo_id'], gradeAluno=False, solucao=True).order_by('id')
                else:
                    gradesList = Grade.objects.filter(
                        curriculo_id=request.POST['curriculo_id'], gradeAluno=False).order_by('id')
            elif request.POST['situacaoGrades'] != '':
                if request.POST['situacaoGrades'] == '1':
                    gradesList = Grade.objects.filter(gradeAluno=False, solucao=False).order_by('id')
                elif request.POST['situacaoGrades'] == '2':
                    gradesList = Grade.objects.filter(gradeAluno=False, solucao=True).order_by('id')
                else:
                    gradesList = Grade.objects.filter(gradeAluno=False).order_by('id')
            else:
                gradesList = Grade.objects.filter(gradeAluno=False).order_by('id')

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)

            if request.POST['curriculo_id'] != '':
                curriculo = Curriculo.objects.filter(id=request.POST['curriculo_id']).first()
                context = {'curriculoSelection': curriculo, 'curriculos': curriculos, 'grades': grades,
                           'situacaoGrades': request.POST['situacaoGrades']}
            else:
                context = {'curriculos': curriculos, 'grades': grades,
                           'situacaoGrades': request.POST['situacaoGrades']}


        else:
            curriculoId = request.GET.get('curriculo_id')
            situacaoGrades = request.GET.get('situacaoGrades')
            if curriculoId:
                if situacaoGrades == '1':
                    gradesList = Grade.objects.filter(
                        curriculo_id=curriculoId, gradeAluno=False, solucao=False).order_by('id')
                elif situacaoGrades == '2':
                    gradesList = Grade.objects.filter(
                        curriculo_id=curriculoId, gradeAluno=False, solucao=True).order_by('id')
                else:
                    gradesList = Grade.objects.filter(
                        curriculo_id=curriculoId, gradeAluno=False).order_by('id')
                curriculo = Curriculo.objects.filter(id=curriculoId).first()
            elif situacaoGrades == '1':
                gradesList = Grade.objects.filter(gradeAluno=False, solucao=False, curriculo__id__in=Subquery(
                    curriculos.values('id'))).order_by('id')
            elif situacaoGrades == '2':
                gradesList = Grade.objects.filter(gradeAluno=False, solucao=True, curriculo__id__in=Subquery(
                    curriculos.values('id'))).order_by('id')
            else:
                gradesList = Grade.objects.filter(gradeAluno=False, curriculo__id__in=Subquery(
                    curriculos.values('id'))).order_by('id')

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)

            if curriculoId:
                context = {'curriculoSelection': curriculo, 'curriculos': curriculos, 'grades': grades,
                           'situacaoGrades': situacaoGrades}
            else:
                context = {'curriculos': curriculos, 'grades': grades, 'situacaoGrades': situacaoGrades}

        emBalanceamento = False
        for curriculo in curriculos:
            grades = Grade.objects.filter(emBalanceamento=True, gradeAluno=False, solucao=False, curriculo_id=curriculo.id).all()
            if grades.exists():
                emBalanceamento = True


        if 'success' in request.GET:
            context = {**context, 'message': 'success'}

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'gradeBalanceadaAssociada' in request.GET:
            context = {**context, 'message': 'gradeBalanceadaAssociada'}

        if 'gradeBalanceadaAssociada' in request.GET:
            context = {**context, 'message': 'gradeBalanceadaAssociada'}

        if 'gradeBalanceadaGradeCursoIncorreta' in request.GET:
            context = {**context, 'message': 'gradeBalanceadaGradeCursoIncorreta'}

        if 'gradeAlunoAssociada' in request.GET:
            context = {**context, 'message': 'gradeAlunoAssociada'}

        if 'redirect' in request.GET:
            context = {**context, 'message': 'redirect'}

        if emBalanceamento is True:
            context = {**context, 'message': 'balanceando'}

        if emBalanceamento is False:
            context = {**context, 'message': 'balanceandoConcluido'}

        if 'numeroGradesComparacaoIncorreto' in request.GET:
            context = {**context, 'message': 'numeroGradesComparacaoIncorreto'}

        template = loader.get_template('admin/grade/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_create(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':

            grades = Grade.objects.filter(curriculo_id=request.POST['curriculo_id'], gradeAluno=False)
            for grade in grades:
                if grade.nome == request.POST['nome']:
                    return HttpResponseRedirect(reverse('grade_create') + '?gradeJaCadastrada')

            curriculo = Curriculo.objects.filter(id=request.POST['curriculo_id']).first()
            grade = Grade(
                curriculo=curriculo,
                nome=request.POST['nome'],
                user=request.user
            )
            try:
                grade.save()
            except:
                return
            return HttpResponseRedirect(reverse('grade_index') + '?success')

        curriculos = Curriculo.objects.filter(curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id).order_by('curso_id')))

        context = {'curriculos': curriculos}

        if 'gradeJaCadastrada' in request.GET:
            context = {**context, 'message': 'gradeJaCadastrada'}

        template = loader.get_template('admin/grade/create.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_view(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        grade = Grade.objects.filter(id=grade_id).first()
        distanciaBasicaPeriodos = range(1, grade.curriculo.quantidadePeriodos)
        maxCreditosRetencao = None
        custoLayout = None
        if grade.gradeOriginal is None:
            dadosCondensados = pesquisar_dados_condensado(grade_id)
            maxCreditosRetencao = dadosCondensados['maxCreditosRetencao']
            custoLayout = dadosCondensados['custoLayout']

        context = {'grade': grade, 'maxCreditosRetencao': maxCreditosRetencao, 'custoLayout': custoLayout,
                   'distanciaBasicaPeriodos': distanciaBasicaPeriodos}

        if 'successBalance' in request.GET:
            context = {**context, 'message': 'successBalance'}

        if 'successDeleteSolucoes' in request.GET:
            context = {**context, 'message': 'successDeleteSolucoes'}

        if 'gradeEmBalanceamento' in request.GET:
            context = {**context, 'message': 'gradeEmBalanceamento'}

        if 'stoppedBalance' in request.GET:
            context = {**context, 'message': 'stoppedBalance'}

        if grade.emBalanceamento is True and grade.problemaUltimoBalanceamento is False:
            context = {**context, 'message': 'balanceando'}

        elif grade.problemaUltimoBalanceamento is True:
            context = {**context, 'message': 'problemaUltimoBalanceamento'}

        if grade.balanceada is True:
            context = {**context, 'message': 'balanceandoConcluido'}

        template = loader.get_template('admin/grade/view.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_edit(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        grade = Grade.objects.filter(id=grade_id).first()
        curriculos = Curriculo.objects.filter(curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id).order_by('curso_id')))

        if request.method == 'POST':
            grades = Grade.objects.filter(curriculo_id=request.POST['curriculo_id'], gradeAluno=False)

            for gradeEditar in grades:
                if grade.id != gradeEditar.id and (
                        gradeEditar.nome == request.POST['nome']):
                    return HttpResponseRedirect(reverse('grade_edit', args=[grade.id]) + '?gradeJaCadastrada')

            curriculo = Curriculo.objects.filter(id=request.POST['curriculo_id']).first()
            grade.curriculo = curriculo
            grade.nome = request.POST['nome']
            grade.user = request.user
            grade.save()
            return HttpResponseRedirect(reverse('grade_index') + '?success')

        context = {'grade': grade, 'curriculos': curriculos}

        if 'gradeJaCadastrada' in request.GET:
            context = {**context, 'message': 'gradeJaCadastrada'}

        template = loader.get_template('admin/grade/edit.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_delete(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':

            gradeAluno = Grade.objects.filter(gradeOriginal_id=grade_id, gradeAluno=True).first()
            if gradeAluno != None:
                return HttpResponseRedirect(reverse('grade_index') + '?gradeAlunoAssociada')

            gradeBalanceada = Grade.objects.filter(gradeOriginal_id=grade_id).first()
            if gradeBalanceada != None:
                return HttpResponseRedirect(reverse('grade_index') + '?gradeBalanceadaAssociada')

            Grade.objects.filter(id=grade_id).delete()
            return HttpResponseRedirect(reverse('grade_index') + '?successDelete')

        grade = Grade.objects.filter(id=grade_id).first()
        context = {'grade': grade}
        template = loader.get_template('admin/grade/delete.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_delete_solucoes(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            Grade.objects.filter(gradeOriginal_id=grade_id, gradeAluno=False).delete()
            gradeOriginal = Grade.objects.filter(id=grade_id).first()
            gradeOriginal.balanceada = False
            gradeOriginal.emBalanceamento = False
            gradeOriginal.balanceamentoInterrompido = False
            gradeOriginal.save()
            return HttpResponseRedirect(reverse('grade_view', args=[grade_id]) + '?successDeleteSolucoes')

        grade = Grade.objects.filter(id=grade_id).first()
        context = {'grade': grade}
        template = loader.get_template('admin/grade/deletesolucoes.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_relatorio_analise(request, grade_id):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        """Generate pdf."""
        # Model data
        grade = Grade.objects.filter(id=grade_id).first()
        if grade.gradeOriginal:
            dadosCondensados = pesquisar_dados_condensado(grade_id)

        dadosCondensadosOriginal = pesquisar_dados_condensado(grade.gradeOriginal.id)

        gradeDisciplinaCreditosRetencao = dadosCondensados['gradeDisciplinaCreditosRetencao']
        maxCreditosRetencao = dadosCondensados['maxCreditosRetencao']
        custoLayout = dadosCondensados['custoLayout']

        gradeDisciplinaCreditosRetencaoOriginal = dadosCondensadosOriginal['gradeDisciplinaCreditosRetencao']
        maxCreditosRetencaoOriginal = dadosCondensadosOriginal['maxCreditosRetencao']
        custoLayoutOriginal = dadosCondensadosOriginal['custoLayout']

        gradeDisciplinaCreditosRetencaoFinal = zip(gradeDisciplinaCreditosRetencaoOriginal,
                                                   gradeDisciplinaCreditosRetencao)

        tituloRelatorio = 'Análise da grade curricular do curso de ' + grade.curriculo.curso.nome + ' - ' + grade.curriculo.curso.instituicao.sigla
        # Rendered
        html_string = render_to_string('admin/grade/relatorioanalise.html', {'grade': grade,
                                                                             'maxCreditosRetencao': maxCreditosRetencao,
                                                                             'custoLayout': custoLayout,
                                                                             'custoLayoutOriginal': custoLayoutOriginal,
                                                                             'gradeDisciplinaCreditosRetencaoFinal': gradeDisciplinaCreditosRetencaoFinal,
                                                                             'maxCreditosRetencaoOriginal': maxCreditosRetencaoOriginal,
                                                                             'tituloRelatorio': tituloRelatorio})
        html = HTML(string=html_string, base_url=request.build_absolute_uri())

        # report_css = os.path.join(
        #     os.path.dirname(__file__), "static", "css", "app.css")
        print(html)
        result = html.write_pdf()

        # Creating http response
        response = HttpResponse(content_type='application/pdf;')
        response['Content-Disposition'] = 'inline; filename=grade_curricular.pdf'
        response['Content-Transfer-Encoding'] = 'binary'

        with tempfile.NamedTemporaryFile(delete=True) as output:
            output.write(result)
            output.flush()
            output = open(output.name, 'rb')
            response.write(output.read())

        return response

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_relatorio_analise_grades(request):
    if request.user.is_authenticated:
        melhoriaC = None;
        melhoriaIR = None;
        melhoriaRD = None;
        selecteditems = request.POST.getlist('checks[]')
        if not len(selecteditems) == 2:
            if request.user.groups.filter(name='gestor'):
                return HttpResponseRedirect(reverse('grade_index') + '?numeroGradesComparacaoIncorreto')
            else:
                return HttpResponseRedirect(
                    reverse('aluno_gradesbalanceadas_index') + '?numeroGradesComparacaoIncorreto')

        primeiraGrade = Grade.objects.filter(id=selecteditems[0]).first()
        segundaGrade = Grade.objects.filter(id=selecteditems[1]).first()

        if primeiraGrade.gradeAluno is False and primeiraGrade.gradeOriginal == None and primeiraGrade.id != segundaGrade.gradeOriginal.id \
                or segundaGrade.gradeAluno is False and segundaGrade.gradeOriginal == None and segundaGrade.id != primeiraGrade.gradeOriginal.id:
            return HttpResponseRedirect(reverse('grade_index') + '?gradeBalanceadaGradeCursoIncorreta')

        """Generate pdf."""
        # Model data
        dadosCondensadosPrimeira = pesquisar_dados_condensado(selecteditems[0])
        dadosCondensadosSegunda = pesquisar_dados_condensado(selecteditems[1])

        gradeDisciplinaCreditosRetencaoPrimeira = dadosCondensadosPrimeira['gradeDisciplinaCreditosRetencao']
        gradeDisciplinaCreditosRetencaoSegunda = dadosCondensadosSegunda['gradeDisciplinaCreditosRetencao']

        gradeDisciplinaCreditosRetencaoFinal = zip(gradeDisciplinaCreditosRetencaoPrimeira,
                                                   gradeDisciplinaCreditosRetencaoSegunda)

        gradeDisciplinasPrimeira = GradeDisciplina.objects.filter(grade_id=selecteditems[0]).order_by('periodo',
                                                                                                      'disciplina__nome')
        gradeDisciplinasSegunda = GradeDisciplina.objects.filter(grade_id=selecteditems[1]).order_by('periodo',
                                                                                                     'disciplina__nome')
        if primeiraGrade.solucao is False:
            gradeDisciplinasPrimeira = GradeDisciplina.objects.filter(grade_id=selecteditems[0]).order_by(
                'periodoGradeAtual',
                'disciplina__nome')
        if segundaGrade.solucao is False:
            gradeDisciplinasSegunda = GradeDisciplina.objects.filter(grade_id=selecteditems[1]).order_by(
                'periodoGradeAtual',
                'disciplina__nome')

        gradeDisciplinasFinal = zip(gradeDisciplinasPrimeira, gradeDisciplinasSegunda)

        if primeiraGrade.c < segundaGrade.c:
            melhoriaC = round(100 - (primeiraGrade.c / segundaGrade.c) * 100, 2)
        elif primeiraGrade.c > segundaGrade.c:
            melhoriaC = round(100 - (segundaGrade.c / primeiraGrade.c) * 100, 2)

        if primeiraGrade.ir < segundaGrade.ir:
            melhoriaIR = round(100 - (primeiraGrade.ir / segundaGrade.ir) * 100, 2)
        elif primeiraGrade.ir > segundaGrade.ir:
            melhoriaIR = round(100 - (segundaGrade.ir / primeiraGrade.ir) * 100,
                               2)
        if primeiraGrade.rd < segundaGrade.rd:
            melhoriaRD = round(100 - (primeiraGrade.rd / segundaGrade.rd) * 100, 2)
        elif primeiraGrade.rd > segundaGrade.rd:
            melhoriaRD = round(100 - (segundaGrade.rd / primeiraGrade.rd) * 100, 2)

        tituloRelatorio = 'Análise de grades curriculares'
        # Rendered
        html_string = render_to_string('admin/grade/relatorioanalisegradesdetalhado.html',
                                       {'primeiraGrade': primeiraGrade,
                                        'segundaGrade': segundaGrade,
                                        'gradeDisciplinaCreditosRetencaoFinal': gradeDisciplinaCreditosRetencaoFinal,
                                        'gradeDisciplinasFinal': gradeDisciplinasFinal,
                                        'melhoriaC': melhoriaC,
                                        'melhoriaIR': melhoriaIR,
                                        'melhoriaRD': melhoriaRD,
                                        'tituloRelatorio': tituloRelatorio})
        html = HTML(string=html_string, base_url=request.build_absolute_uri())

        # report_css = os.path.join(
        #     os.path.dirname(__file__), "static", "css", "app.css")
        print(html)
        result = html.write_pdf()

        # Creating http response
        response = HttpResponse(content_type='application/pdf;')
        response['Content-Disposition'] = 'inline; filename=grade_curricular.pdf'
        response['Content-Transfer-Encoding'] = 'binary'

        with tempfile.NamedTemporaryFile(delete=True) as output:
            output.write(result)
            output.flush()
            output = open(output.name, 'rb')
            response.write(output.read())

        return response

    else:
        return redirect('login')


def pesquisar_dados_condensado(grade_id):
    grade = Grade.objects.filter(id=grade_id).first()
    gradeIdRelacionamentos = grade_id
    if grade.gradeOriginal:
        gradeIdRelacionamentos = grade.gradeOriginal.id

    gradeDisciplinaCreditosRetencao = GradeDisciplina.objects.values('periodoGradeAtual').filter(
        grade_id=grade_id).annotate(quantidadeDisciplinas=Count('id'), totalCreditos=Sum('creditos'),
                                    acumuladoRetencao=Sum('retencao')).order_by('periodoGradeAtual')
    maxCreditosRetencao = GradeDisciplina.objects.values('periodoGradeAtual').filter(
        grade_id=grade_id).annotate(c=Sum('creditos'), r=Sum('retencao')).aggregate(Max('c'), Max('r'))
    relacionamentos = Relacionamento.objects.filter(
        gradeDisciplinaRelacionamentoAnterior__grade_id=gradeIdRelacionamentos)
    gradesDiciplinas = GradeDisciplina.objects.filter(grade_id=grade_id)
    custoLayout = 0
    for relacionamento in relacionamentos:
        for gradeDiciplinaAnterior in gradesDiciplinas:
            if relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.codigo == gradeDiciplinaAnterior.disciplina.codigo:
                for gradeDiciplinaPosterior in gradesDiciplinas:
                    if relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.codigo == gradeDiciplinaPosterior.disciplina.codigo:
                        if gradeDiciplinaAnterior.grade.solucao is False:
                            custoLayout = custoLayout + relacionamento.relacionamento * (
                                DISTANCIA_SEMESTRES[gradeDiciplinaAnterior.periodoGradeAtual - 1][
                                    gradeDiciplinaPosterior.periodoGradeAtual - 1])
                        else:
                            custoLayout = custoLayout + relacionamento.relacionamento * (
                                DISTANCIA_SEMESTRES[gradeDiciplinaAnterior.periodo - 1][
                                    gradeDiciplinaPosterior.periodo - 1])

    # TODO: retornar maiores numeros de creditos e retenção para ser usados no template
    return {'gradeDisciplinaCreditosRetencao': gradeDisciplinaCreditosRetencao,
            'maxCreditosRetencao': maxCreditosRetencao, 'custoLayout': custoLayout}


def pesquisar_dados_condensado_analise(grade_id):
    gradeDisciplinaCreditosRetencao = GradeDisciplina.objects.values('periodo').filter(
        grade_id=grade_id).annotate(quantidadeDisciplinas=Count('id'), totalCreditos=Sum('creditos'),
                                    acumuladoRetencao=Sum('retencao')).order_by('periodo')
    return {'gradeDisciplinaCreditosRetencao': gradeDisciplinaCreditosRetencao}


def disciplina_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        cursos = Curso.objects.filter(
            id__in=Subquery(UserCurso.objects.values('curso_id').filter(user_id=request.user.id).order_by('curso_id')))
        if request.method == 'POST' and request.POST['curso_id'] != '':
            disciplinasList = Disciplina.objects.filter(
                curso_id=request.POST['curso_id'])
            page = request.GET.get('page', 1)
            paginator = Paginator(disciplinasList, 100)

            try:
                disciplinas = paginator.page(page)
            except PageNotAnInteger:
                disciplinas = paginator.page(1)
            except EmptyPage:
                disciplinas = paginator.page(paginator.num_pages)

            curso = Curso.objects.filter(id=request.POST['curso_id']).first()
            context = {'cursoSelection': curso, 'cursos': cursos, 'disciplinas': disciplinas}

        else:
            cursoId = request.GET.get('curso_id')
            if cursoId:
                disciplinasList = Disciplina.objects.filter(
                    curso__id=cursoId)
                curso = Curso.objects.filter(id=cursoId).first()
            else:
                disciplinasList = Disciplina.objects.filter(curso__id__in=Subquery(cursos.values('id')))[:100]

            page = request.GET.get('page', 1)
            paginator = Paginator(disciplinasList, 100)

            try:
                disciplinas = paginator.page(page)
            except PageNotAnInteger:
                disciplinas = paginator.page(1)
            except EmptyPage:
                disciplinas = paginator.page(paginator.num_pages)

            if cursoId:
                context = {'cursoSelection': curso, 'cursos': cursos, 'disciplinas': disciplinas}
            else:
                context = {'cursos': cursos, 'disciplinas': disciplinas}

        if 'success' in request.GET:
            context = {**context, 'message': 'success'}

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'disciplinaJaCadastrada' in request.GET:
            context = {**context, 'message': 'disciplinaJaCadastrada'}

        if 'gradeAssociada' in request.GET:
            context = {**context, 'message': 'gradeAssociada'}

        template = loader.get_template('admin/disciplina/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def disciplina_create(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            disciplinas = Disciplina.objects.filter(curso_id=request.POST['curso_id'])

            for disciplina in disciplinas:
                if disciplina.nome == request.POST['nome'] or disciplina.codigo == request.POST['codigo']:
                    return HttpResponseRedirect(reverse('disciplina_index') + '?disciplinaJaCadastrada')

            curso = Curso.objects.filter(id=request.POST['curso_id']).first()
            disciplina = Disciplina(
                curso=curso,
                nome=request.POST['nome'],
                codigo=request.POST['codigo'],
            )
            try:
                disciplina.save()
            except:
                return
            return HttpResponseRedirect(reverse('disciplina_index') + '?success')

        cursos = Curso.objects.filter(
            id__in=Subquery(UserCurso.objects.values('curso_id').filter(user_id=request.user.id).order_by('curso_id')))

        context = {'cursos': cursos}
        template = loader.get_template('admin/disciplina/create.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def disciplina_view(request, disciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        disciplina = Disciplina.objects.filter(id=disciplina_id).first()
        context = {'disciplina': disciplina}
        template = loader.get_template('admin/disciplina/view.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def disciplina_edit(request, disciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        disciplina = Disciplina.objects.filter(id=disciplina_id).first()
        cursos = Curso.objects.filter(
            id__in=Subquery(UserCurso.objects.values('curso_id').filter(user_id=request.user.id).order_by('curso_id')))

        if request.method == 'POST':
            if disciplina.curso.id != request.POST['curso_id']:
                disciplinas = Disciplina.objects.filter(curso_id=request.POST['curso_id'])
                for disciplinaEditar in disciplinas:
                    if disciplina.id != disciplinaEditar.id and (
                            disciplinaEditar.nome == request.POST['nome'] or disciplinaEditar.codigo == request.POST[
                        'codigo']):
                        return HttpResponseRedirect(reverse('disciplina_index') + '?disciplinaJaCadastrada')

            curso = Curso.objects.filter(id=request.POST['curso_id']).first()
            disciplina.curso = curso
            disciplina.nome = request.POST['nome']
            disciplina.codigo = request.POST['codigo']

            disciplina.save()
            return HttpResponseRedirect(reverse('disciplina_index') + '?success')

        context = {'disciplina': disciplina, 'cursos': cursos}
        template = loader.get_template('admin/disciplina/edit.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def disciplina_delete(request, disciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            gradeDisciplina = GradeDisciplina.objects.filter(disciplina_id=disciplina_id).first()
            if gradeDisciplina != None:
                return HttpResponseRedirect(reverse('disciplina_index') + '?gradeAssociada')

            Disciplina.objects.filter(id=disciplina_id).delete()
            return HttpResponseRedirect(reverse('disciplina_index') + '?successDelete')

        disciplina = Disciplina.objects.filter(id=disciplina_id).first()
        context = {'disciplina': disciplina}
        template = loader.get_template('admin/disciplina/delete.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def gradedisciplina_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        grades = Grade.objects.filter(gradeOriginal__isnull=True, curriculo__curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id)))
        if request.method == 'POST' and request.POST['grade_id'] != '':
            gradesDisciplinasList = GradeDisciplina.objects.filter(
                grade__id=request.POST['grade_id'])

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesDisciplinasList, 100)

            try:
                gradesDisciplinas = paginator.page(page)
            except PageNotAnInteger:
                gradesDisciplinas = paginator.page(1)
            except EmptyPage:
                gradesDisciplinas = paginator.page(paginator.num_pages)

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            context = {'gradeSelection': grade, 'grades': grades, 'gradesDisciplinas': gradesDisciplinas}

        else:
            gradeId = request.GET.get('grade_id')
            if gradeId:
                gradesDisciplinasList = GradeDisciplina.objects.filter(
                    grade__id=gradeId)
                grade = Grade.objects.filter(id=gradeId).first()
            else:
                gradesDisciplinasList = GradeDisciplina.objects.filter(grade__id__in=Subquery(grades.values('id')))

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesDisciplinasList, 100)

            try:
                gradesDisciplinas = paginator.page(page)
            except PageNotAnInteger:
                gradesDisciplinas = paginator.page(1)
            except EmptyPage:
                gradesDisciplinas = paginator.page(paginator.num_pages)

            if gradeId:
                context = {'gradeSelection': grade, 'grades': grades, 'gradesDisciplinas': gradesDisciplinas}
            else:
                context = {'grades': grades, 'gradesDisciplinas': gradesDisciplinas}

        if 'successEdit' in request.GET:
            context = {**context, 'message': 'successEdit'}

        elif 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        template = loader.get_template('admin/gradedisciplina/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def gradedisciplina_create(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            gradeDisciplinas = GradeDisciplina.objects.filter(grade_id=request.POST['grade_id'])
            for gradeDisciplina in gradeDisciplinas:
                if gradeDisciplina.disciplina.id == int(request.POST['disciplina_id']):
                    return HttpResponseRedirect(reverse('gradedisciplina_create', args=[
                        request.POST['grade_id']]) + '?disciplinaJaVinculadaAGrade')

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            disciplina = Disciplina.objects.filter(id=request.POST['disciplina_id']).first()

            if request.POST['cicloBasico'] == 'S' and grade.curriculo.quantidadePeriodosCicloBasico > 0 \
                    and int(request.POST['periodo']) > grade.curriculo.quantidadePeriodosCicloBasico:
                return HttpResponseRedirect(
                    reverse('gradedisciplina_create', args=[request.POST['grade_id']]) + '?periodoSuperiorCicloBasico')

            cicloBasico = False
            periodoFixo = False

            if request.POST['cicloBasico'] == 'S':
                cicloBasico = True

            if request.POST['periodoFixo'] == 'S':
                if bool(request.POST['periodo']) == False:
                    return HttpResponseRedirect(
                        reverse('gradedisciplina_create',
                                args=[request.POST['grade_id']]) + '?periodoFixoInformarPeriodo')
                periodoFixo = True

            if bool(request.POST['periodo']) == True and request.POST['periodoFixo'] == 'N':
                return HttpResponseRedirect(
                    reverse('gradedisciplina_create',
                            args=[request.POST['grade_id']]) + '?periodoInformadoPeriodoFixoNaoInformado')

            # campo não obrigatório, então precisa desse tratamento, pois na base de dados é int
            periodo = None
            if bool(request.POST['periodo']) == True and int(request.POST['periodo']) < 1:
                return HttpResponseRedirect(
                    reverse('gradedisciplina_create',
                            args=[request.POST['grade_id']]) + '?disciplinaAnteriorPrimeiroPeriodo')
            elif bool(request.POST['periodo']) == True and int(
                    request.POST['periodo']) > grade.curriculo.quantidadePeriodos:
                return HttpResponseRedirect(
                    reverse('gradedisciplina_create', args=[request.POST['grade_id']]) + '?disciplinaAposUltimoPeriodo')
            elif bool(request.POST['periodo']) == True:
                periodo = int(request.POST['periodo'])

            gradeDisciplina = GradeDisciplina(
                grade=grade,
                disciplina=disciplina,
                periodoGradeAtual=request.POST['periodoGradeAtual'],
                creditos=request.POST['creditos'],
                retencao=request.POST['retencao'],
                cicloBasico=cicloBasico,
                periodoFixo=periodoFixo,
                periodo=periodo
            )
            try:
                gradeDisciplina.save()
                grade_consolidar(grade.id)
                return HttpResponseRedirect(reverse('gradedisciplina_create', args=[grade.id]) + '?successCreate')
            except Exception as e:
                return print(e)

        if grade_id:
            grade = Grade.objects.filter(id=grade_id, gradeAluno=False, solucao=False,
                                         curriculo__curso__id__in=Subquery(
                                             UserCurso.objects.values('curso_id').filter(
                                                 user__id=request.user.id))).first()
        # disciplinas = Disciplina.objects.filter(curso__id__in=Subquery(
        #     UserCurso.objects.values('curso_id').filter(user__id=request.user.id)), curso__id=grade.curriculo.curso.id)

        disciplinas = Disciplina.objects.filter(curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id)),
            curso__id=grade.curriculo.curso.id).exclude(id__in=GradeDisciplina.objects.values('disciplina_id')
                                                        .filter(grade_id=grade_id).order_by('id'))

        context = {'grade': grade, 'disciplinas': disciplinas}

        if 'successCreate' in request.GET:
            context = {**context, 'message': 'successCreate'}

        if 'disciplinaJaVinculadaAGrade' in request.GET:
            context = {**context, 'message': 'disciplinaJaVinculadaAGrade'}

        if 'successConsolidar' in request.GET:
            context = {**context, 'message': 'successConsolidar'}

        if 'periodoSuperiorCicloBasico' in request.GET:
            context = {**context, 'message': 'periodoSuperiorCicloBasico'}

        if 'periodoFixoInformarPeriodo' in request.GET:
            context = {**context, 'message': 'periodoFixoInformarPeriodo'}

        if 'periodoInformadoPeriodoFixoNaoInformado' in request.GET:
            context = {**context, 'message': 'periodoInformadoPeriodoFixoNaoInformado'}

        if 'disciplinaAnteriorPrimeiroPeriodo' in request.GET:
            context = {**context, 'message': 'disciplinaAnteriorPrimeiroPeriodo'}

        if 'disciplinaAposUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'disciplinaAposUltimoPeriodo'}

        template = loader.get_template('admin/gradedisciplina/create.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def gradedisciplina_view(request, gradedisciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        gradeDisciplina = GradeDisciplina.objects.select_related('grade', 'disciplina').filter(
            id=gradedisciplina_id).first()
        context = {'gradeDisciplina': gradeDisciplina}
        template = loader.get_template('admin/gradedisciplina/view.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def gradedisciplina_edit(request, gradedisciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        gradeDisciplina = GradeDisciplina.objects.select_related('grade', 'disciplina').filter(
            id=gradedisciplina_id).first()
        grade = Grade.objects.filter(id=gradeDisciplina.grade.id).first()
        disciplinas = Disciplina.objects.filter(curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id)), curso__id=grade.curriculo.curso.id)

        if request.method == 'POST':

            cicloBasico = False
            periodoFixo = False
            periodo = None

            gradeDisciplinas = GradeDisciplina.objects.filter(grade_id=request.POST['grade_id'])
            for gradeDisciplinaEditar in gradeDisciplinas:
                if gradeDisciplina.disciplina.id != gradeDisciplinaEditar.disciplina.id and \
                        (gradeDisciplinaEditar.disciplina.id == int(request.POST['disciplina_id'])):
                    return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                        gradedisciplina_id]) + '?disciplinaJaVinculadaAGrade')

            if bool(request.POST['periodo']) == True and request.POST['periodoFixo'] == 'N':
                return HttpResponseRedirect(
                    reverse('gradedisciplina_edit',
                            args=[gradedisciplina_id]) + '?periodoInformadoPeriodoFixoNaoInformado')

            if request.POST['periodoFixo'] == 'S':
                if request.POST['cicloBasico'] == 'S' and grade.curriculo.quantidadePeriodosCicloBasico > 0 \
                        and bool(request.POST['periodo']) == True and int(
                    request.POST['periodo']) > grade.curriculo.quantidadePeriodosCicloBasico:
                    return HttpResponseRedirect(
                        reverse('gradedisciplina_edit', args=[gradedisciplina_id]) + '?periodoSuperiorCicloBasico')

                if bool(request.POST['periodo']) == False:
                    return HttpResponseRedirect(
                        reverse('gradedisciplina_edit',
                                args=[gradedisciplina_id]) + '?periodoFixoInformarPeriodo')

                if bool(request.POST['periodo']) == True and int(request.POST['periodo']) < 1:
                    return HttpResponseRedirect(
                        reverse('gradedisciplina_edit',
                                args=[gradedisciplina_id]) + '?disciplinaAnteriorPrimeiroPeriodo')
                elif bool(request.POST['periodo']) == True and int(
                        request.POST['periodo']) > grade.curriculo.quantidadePeriodos:
                    return HttpResponseRedirect(
                        reverse('gradedisciplina_edit', args=[gradedisciplina_id]) + '?disciplinaAposUltimoPeriodo')
                elif bool(request.POST['periodo']) == True:
                    periodo = int(request.POST['periodo'])

                requisitos = Requisito.objects.filter(gradeDisciplina_id=gradedisciplina_id)

                if requisitos.exists() and periodo == 1:
                    return HttpResponseRedirect(
                        reverse('gradedisciplina_edit',
                                args=[gradedisciplina_id]) + '?dependentePeriodoAnteriorRequisitos')

                for requisito in requisitos:
                    # verifica se a disciplina a ser cursada será cadastrada em período igual ou anterior a seu pré-requisito já inserido em disciplinas a cursar
                    if gradeDisciplina.periodoFixo:
                        if periodo <= requisito.gradeDisciplinaRequisito.periodo:
                            return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                                gradedisciplina_id]) + '?disciplinaACursarPeriodoAnteriorOuIgualRequisito&disciplinaPosterior='
                                                        + gradeDisciplina.disciplina.nome
                                                        + '&disciplinaAnterior='
                                                        + requisito.gradeDisciplinaRequisito.disciplina.nome
                                                        + '&periodoPosterior=' + str(periodo)
                                                        + '&periodoRequisito=' + str(
                                requisito.gradeDisciplinaRequisito.periodo))
                        elif (
                                periodo - requisito.gradeDisciplinaRequisito.periodo) > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                            return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                                gradedisciplina_id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior&disciplinaPosterior='
                                                        + gradeDisciplina.disciplina.nome
                                                        + '&disciplinaAnterior='
                                                        + requisito.gradeDisciplinaRequisito.disciplina.nome
                                                        + '&periodoPosterior=' + str(periodo)
                                                        + '&periodoRequisito=' + str(
                                requisito.gradeDisciplinaRequisito.periodo))

                requisitos = Requisito.objects.filter(
                    gradeDisciplinaRequisito_id=gradedisciplina_id).all()

                if requisitos.exists() and periodo == grade.curriculo.quantidadePeriodos:
                    return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                        gradedisciplina_id]) + '?tentativaCadastrarRequisitoUltimoPeriodo')

                # caso uma disciplina dependente tenha sido definida para antes do requisito a ser cadastrado, deve-se retirá-la e adicioná-la em período posterior
                for requisito in requisitos:
                    if gradeDisciplina.periodoFixo:
                        if periodo >= requisito.gradeDisciplina.periodo:
                            return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                                gradedisciplina_id]) + '?requisitoACursarPeriodoSuperiorOuIgualDependente&disciplinaAnterior=' + gradeDisciplina.disciplina.nome
                                                        + '&disciplinaPosterior=' + requisito.gradeDisciplina.disciplina.nome
                                                        + '&periodoAnterior=' + str(periodo)
                                                        + '&periodoPosterior=' + str(
                                requisito.gradeDisciplinaRequisito.periodo))
                        elif (
                                requisito.gradeDisciplina.periodo - periodo) > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                            return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                                gradedisciplina_id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior&disciplinaAnterior=' + gradeDisciplina.disciplina.nome
                                                        + '&disciplinaPosterior=' + requisito.gradeDisciplina.disciplina.nome
                                                        + '&periodoAnterior=' + str(periodo)
                                                        + '&periodoPosterior=' + str(requisito.gradeDisciplina.periodo))

                relacionamentos = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoPosterior_id=gradedisciplina_id,
                    relacionamento__gte=PONTUACAOINICIALRELACAO)

                for relacionamento in relacionamentos:
                    if periodo < relacionamento.gradeDisciplinaRelacionamentoAnterior.periodo:
                        return HttpResponseRedirect(
                            reverse('gradedisciplina_edit',
                                    args=[gradedisciplina_id]) + '?dependentePeriodoAnteriorRelacao')

                for relacionamento in relacionamentos:
                    if periodo < relacionamento.gradeDisciplinaRelacionamentoAnterior.periodo and relacionamento.relacionamento >= PONTUACAOINICIALRELACAO:
                        return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                            gradedisciplina_id]) + '?disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior&disciplinaAnterior='
                                                    + relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.nome + '&disciplinaPosterior='
                                                    + gradeDisciplina.disciplina.nome
                                                    + '&periodoAnterior=' + str(periodo)
                                                    + '&periodoPosterior=' + str(
                            relacionamento.gradeDisciplinaRelacionamentoAnterior.periodo))

                relacionamentos = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoAnterior_id=gradedisciplina_id,
                    relacionamento__gte=PONTUACAOINICIALRELACAO).all()

                if relacionamentos.exists() and periodo == grade.curriculo.quantidadePeriodos:
                    return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                        gradedisciplina_id]) + '?tentativaCadastrarRelacionamentoUltimoPeriodo')

                for relacionamento in relacionamentos:
                    if periodo > relacionamento.gradeDisciplinaRelacionamentoPosterior.periodo:
                        return HttpResponseRedirect(reverse('gradedisciplina_edit', args=[
                            gradedisciplina_id]) + '?disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior&disciplinaPosterior='
                                                    + relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.nome + '&disciplinaAnterior='
                                                    + gradeDisciplina.disciplina.nome
                                                    + '&periodoAnterior=' + str(periodo)
                                                    + '&periodoPosterior=' + str(
                            relacionamento.gradeDisciplinaRelacionamentoPosterior))

                periodoFixo = True

            if request.POST['cicloBasico'] == 'S':
                cicloBasico = True

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            disciplina = Disciplina.objects.filter(id=request.POST['disciplina_id']).first()
            gradeDisciplina.grade = grade
            gradeDisciplina.disciplina = disciplina
            gradeDisciplina.periodo = periodo
            gradeDisciplina.creditos = request.POST['creditos']
            gradeDisciplina.retencao = request.POST['retencao']
            gradeDisciplina.cicloBasico = cicloBasico
            gradeDisciplina.periodoFixo = periodoFixo

            try:
                gradeDisciplina.save()
                grade_consolidar(request.POST['grade_id'])
            except Exception as e:
                return print(e)
            return HttpResponseRedirect(reverse('gradedisciplina_index') + '?successEdit')

        context = {'gradeDisciplina': gradeDisciplina, 'grade': grade, 'disciplinas': disciplinas}

        if 'disciplinaJaVinculadaAGrade' in request.GET:
            context = {**context, 'message': 'disciplinaJaVinculadaAGrade'}

        if 'periodoSuperiorCicloBasico' in request.GET:
            context = {**context, 'message': 'periodoSuperiorCicloBasico'}

        if 'dependentePeriodoAnteriorRequisitos' in request.GET:
            context = {**context, 'message': 'dependentePeriodoAnteriorRequisitos'}

        if 'periodoInformadoPeriodoFixoNaoInformado' in request.GET:
            context = {**context, 'message': 'periodoInformadoPeriodoFixoNaoInformado'}

        if 'periodoFixoInformarPeriodo' in request.GET:
            context = {**context, 'message': 'periodoFixoInformarPeriodo'}

        if 'disciplinaAnteriorPrimeiroPeriodo' in request.GET:
            context = {**context, 'message': 'disciplinaAnteriorPrimeiroPeriodo'}

        if 'disciplinaAposUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'disciplinaAposUltimoPeriodo'}

        if 'tentativaCadastrarRequisitoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'tentativaCadastrarRequisitoUltimoPeriodo'}

        if 'tentativaCadastrarRelacionamentoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'tentativaCadastrarRelacionamentoUltimoPeriodo'}

        if 'disciplinaACursarPeriodoAnteriorOuIgualRequisito' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoAnteriorOuIgualRequisito',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoPosterior': request.GET.get('periodoPosterior', ''),
                       'periodoRequisito': request.GET.get('periodoRequisito', '')}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoPosterior': request.GET.get('periodoPosterior', ''),
                       'periodoRequisito': request.GET.get('periodoRequisito', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO}

        if 'requisitoACursarPeriodoSuperiorOuIgualDependente' in request.GET:
            context = {**context, 'message': 'requisitoACursarPeriodoSuperiorOuIgualDependente',
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'periodoAnterior': request.GET.get('periodoAnterior', ''),
                       'periodoPosterior': request.GET.get('periodoPosterior', '')}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior',
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'periodoAnterior': request.GET.get('periodoAnterior', ''),
                       'periodoPosterior': request.GET.get('periodoPosterior', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO}

        if 'disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoAnterior': request.GET.get('periodoAnterior', ''),
                       'periodoPosterior': request.GET.get('periodoPosterior', '')}

        if 'disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoAnterior': request.GET.get('periodoAnterior', ''),
                       'periodoPosterior': request.GET.get('periodoPosterior', ''), }

        template = loader.get_template('admin/gradedisciplina/edit.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def gradedisciplina_delete(request, gradedisciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            gradeDisciplina = GradeDisciplina.objects.filter(id=gradedisciplina_id).first()
            GradeDisciplina.objects.filter(id=gradedisciplina_id).delete()
            grade_consolidar(gradeDisciplina.grade.id)
            return HttpResponseRedirect(reverse('gradedisciplina_index') + '?successDelete')

        gradeDisciplina = GradeDisciplina.objects.filter(id=gradedisciplina_id).first()
        context = {'gradeDisciplina': gradeDisciplina}
        template = loader.get_template('admin/gradedisciplina/delete.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def grade_consolidar(grade_id):
    dadosCondensados = pesquisar_dados_condensado(grade_id)
    maxCreditosRetencao = dadosCondensados['maxCreditosRetencao']
    grade = Grade.objects.filter(id=grade_id).first()
    grade.c = maxCreditosRetencao['c__max']
    grade.ir = maxCreditosRetencao['r__max']
    grade.rd = dadosCondensados['custoLayout']

    try:
        grade.save()
    except Exception as e:
        return print(e)


def relacionamento_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        # retorna apenas soluções originais para o selection
        # os relacionamentos de uma solução obrigatoriamente são os mesmos de sua solução original
        grades = Grade.objects.filter(gradeOriginal__isnull=True, curriculo__curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id)))

        if request.method == 'POST' and request.POST['grade_id'] != '':
            relacionamentosList = Relacionamento.objects.filter(
                gradeDisciplinaRelacionamentoAnterior__grade__id=request.POST['grade_id'])
            page = request.GET.get('page', 1)
            paginator = Paginator(relacionamentosList, 100)

            try:
                relacionamentos = paginator.page(page)
            except PageNotAnInteger:
                relacionamentos = paginator.page(1)
            except EmptyPage:
                relacionamentos = paginator.page(paginator.num_pages)

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            context = {'gradeSelection': grade, 'grades': grades, 'relacionamentos': relacionamentos}

        else:
            gradeId = request.GET.get('grade_id')
            if gradeId:
                relacionamentosList = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoAnterior__grade__id=gradeId)
                grade = Grade.objects.filter(id=gradeId).first()
            else:
                relacionamentosList = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoAnterior__grade__id__in=Subquery(grades.values('id'))).order_by(
                    'gradeDisciplinaRelacionamentoAnterior__nome',
                    'gradeDisciplinaRelacionamentoPosterior__nome')
            page = request.GET.get('page', 1)
            paginator = Paginator(relacionamentosList, 100)

            try:
                relacionamentos = paginator.page(page)
            except PageNotAnInteger:
                relacionamentos = paginator.page(1)
            except EmptyPage:
                relacionamentos = paginator.page(paginator.num_pages)

            if gradeId:
                context = {'gradeSelection': grade, 'grades': grades, 'relacionamentos': relacionamentos}
            else:
                context = {'grades': grades, 'relacionamentos': relacionamentos}

        if 'successEdit' in request.GET:
            context = {**context, 'message': 'successEdit'}

        elif 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        elif 'relacionamentoAssociadoRequisito' in request.GET:
            context = {**context, 'message': 'relacionamentoAssociadoRequisito'}

        template = loader.get_template('admin/relacionamento/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def relacionamento_create(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            gradeDisciplinaRelacionamentoAnterior = GradeDisciplina.objects.filter(
                id=request.POST['gradeDisciplinaRelacionamentoAnterior_id']).first()
            gradeDisciplinaRelacionamentoPosterior = GradeDisciplina.objects.filter(
                id=request.POST['gradeDisciplinaRelacionamentoPosterior_id']).first()

            if gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id:
                return HttpResponseRedirect(reverse('relacionamento_create', args=[
                    request.POST['grade_id']]) + '?relacionamentoMesmaDisciplina')

            # é possível retornar todos os relacionamentos da grade a partir do relacionamento anterior
            relacionamentos = Relacionamento.objects.filter(
                gradeDisciplinaRelacionamentoAnterior__grade__id=request.POST['grade_id'])

            for relacionamento in relacionamentos:
                if (
                        relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoAnterior.disciplina.id
                        and relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id) \
                        or (
                        relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id
                        and relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.id == gradeDisciplinaRelacionamentoAnterior.disciplina.id):
                    return HttpResponseRedirect(reverse('relacionamento_create', args=[
                        request.POST['grade_id']]) + '?relacionamentoExistenteEntreDisciplinas')

            if gradeDisciplinaRelacionamentoAnterior.periodoFixo and gradeDisciplinaRelacionamentoAnterior.periodo == gradeDisciplinaRelacionamentoAnterior.grade.curriculo.quantidadePeriodos \
                    and int(request.POST['relacionamento']) >= PONTUACAOINICIALRELACAO:
                return HttpResponseRedirect(
                    reverse('relacionamento_create', args=[grade.id]) + '?anteriorUltimoPeriodo')

            if gradeDisciplinaRelacionamentoAnterior.periodoFixo and gradeDisciplinaRelacionamentoPosterior.periodoFixo and gradeDisciplinaRelacionamentoAnterior.periodo > gradeDisciplinaRelacionamentoPosterior.periodo and int(
                    request.POST['relacionamento']) >= PONTUACAOINICIALRELACAO:
                return HttpResponseRedirect(
                    reverse('relacionamento_create', args=[grade.id]) + '?periodoAnteriorSuperiorPeriodoPosterior')

            relacionamento = Relacionamento(
                gradeDisciplinaRelacionamentoAnterior=gradeDisciplinaRelacionamentoAnterior,
                gradeDisciplinaRelacionamentoPosterior=gradeDisciplinaRelacionamentoPosterior,
                relacionamento=request.POST['relacionamento'],
                # distanciaMinima=request.POST['distanciaMinima'],
                # distanciaMaxima=request.POST['distanciaMaxima'],
            )
            try:
                relacionamento.save()
                grade_consolidar(request.POST['grade_id'])
            except Exception as e:
                return print(e)
            return HttpResponseRedirect(reverse('relacionamento_create', args=[grade.id]) + '?successCreate')

        grade = Grade.objects.filter(id=grade_id).first()
        gradesDisciplinas = GradeDisciplina.objects.filter(grade_id=grade.id)

        context = {'gradesDisciplinas': gradesDisciplinas, 'grade': grade}

        if 'successCreate' in request.GET:
            context = {**context, 'message': 'successCreate'}

        if 'relacionamentoMesmaDisciplina' in request.GET:
            context = {**context, 'message': 'relacionamentoMesmaDisciplina'}

        if 'relacionamentoExistenteEntreDisciplinas' in request.GET:
            context = {**context, 'message': 'relacionamentoExistenteEntreDisciplinas'}

        if 'anteriorUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'anteriorUltimoPeriodo'}

        if 'periodoAnteriorSuperiorPeriodoPosterior' in request.GET:
            context = {**context, 'message': 'periodoAnteriorSuperiorPeriodoPosterior'}

        template = loader.get_template('admin/relacionamento/create.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def relacionamento_view(request, relacionamento_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        relacionamento = Relacionamento.objects.filter(id=relacionamento_id).first()
        context = {'relacionamento': relacionamento}
        template = loader.get_template('admin/relacionamento/view.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def relacionamento_edit(request, relacionamento_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        relacionamento = Relacionamento.objects.filter(
            id=relacionamento_id).first()
        grade = Grade.objects.filter(id=relacionamento.gradeDisciplinaRelacionamentoAnterior.grade.id).first()
        # retorna apenas gradeDisciplina da grade do relacionamento em edição
        gradesDisciplinas = GradeDisciplina.objects.filter(
            grade__id=relacionamento.gradeDisciplinaRelacionamentoAnterior.grade.id)
        if request.method == 'POST':
            gradeDisciplinaRelacionamentoAnterior = GradeDisciplina.objects.filter(
                id=request.POST['gradeDisciplinaRelacionamentoAnterior_id']).first()
            gradeDisciplinaRelacionamentoPosterior = GradeDisciplina.objects.filter(
                id=request.POST['gradeDisciplinaRelacionamentoPosterior_id']).first()

            if gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id:
                return HttpResponseRedirect(reverse('relacionamento_edit', args=[
                    relacionamento_id]) + '?relacionamentoMesmaDisciplina')

            # é possível retornar todos os relacionamentos da grade a partir do relacionamento anterior
            relacionamentos = Relacionamento.objects.filter(
                gradeDisciplinaRelacionamentoAnterior__grade__id=request.POST['grade_id'])
            for relacionamentoEditar in relacionamentos:

                if relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.id != relacionamentoEditar.gradeDisciplinaRelacionamentoAnterior.disciplina.id \
                        or relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.id != relacionamentoEditar.gradeDisciplinaRelacionamentoPosterior.disciplina.id:

                    if (
                            relacionamentoEditar.gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoAnterior.disciplina.id
                            and relacionamentoEditar.gradeDisciplinaRelacionamentoPosterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id) \
                            or (
                            relacionamentoEditar.gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id
                            and relacionamentoEditar.gradeDisciplinaRelacionamentoPosterior.disciplina.id == gradeDisciplinaRelacionamentoAnterior.disciplina.id):
                        return HttpResponseRedirect(reverse('relacionamento_edit', args=[
                            relacionamento_id]) + '?relacionamentoExistenteEntreDisciplinas')

            if gradeDisciplinaRelacionamentoAnterior.periodoFixo and gradeDisciplinaRelacionamentoAnterior.periodo == gradeDisciplinaRelacionamentoAnterior.grade.curriculo.quantidadePeriodos \
                    and int(request.POST['relacionamento']) >= PONTUACAOINICIALRELACAO:
                return HttpResponseRedirect(
                    reverse('relacionamento_edit', args=[relacionamento_id]) + '?anteriorUltimoPeriodo')

            if gradeDisciplinaRelacionamentoAnterior.periodoFixo and gradeDisciplinaRelacionamentoPosterior.periodoFixo and gradeDisciplinaRelacionamentoAnterior.periodo > gradeDisciplinaRelacionamentoPosterior.periodo and int(
                    request.POST['relacionamento']) >= PONTUACAOINICIALRELACAO:
                return HttpResponseRedirect(
                    reverse('relacionamento_edit',
                            args=[relacionamento_id]) + '?periodoAnteriorSuperiorPeriodoPosterior')

            relacionamento.gradeDisciplinaRelacionamentoAnterior = gradeDisciplinaRelacionamentoAnterior
            relacionamento.gradeDisciplinaRelacionamentoPosterior = gradeDisciplinaRelacionamentoPosterior
            relacionamento.relacionamento = request.POST['relacionamento']
            # relacionamento.distanciaMinima = request.POST['distanciaMinima']
            # relacionamento.distanciaMaxima = request.POST['distanciaMaxima']
            try:
                relacionamento.save()
                grade_consolidar(request.POST['grade_id'])
            except Exception as e:
                return print(e)
            return HttpResponseRedirect(reverse('relacionamento_index') + '?successEdit')

        context = {'relacionamento': relacionamento, 'gradesDisciplinas': gradesDisciplinas, 'grade': grade}

        if 'successEdit' in request.GET:
            context = {**context, 'message': 'successEdit'}

        if 'relacionamentoMesmaDisciplina' in request.GET:
            context = {**context, 'message': 'relacionamentoMesmaDisciplina'}

        if 'relacionamentoExistenteEntreDisciplinas' in request.GET:
            context = {**context, 'message': 'relacionamentoExistenteEntreDisciplinas'}

        if 'anteriorUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'anteriorUltimoPeriodo'}

        if 'periodoAnteriorSuperiorPeriodoPosterior' in request.GET:
            context = {**context, 'message': 'periodoAnteriorSuperiorPeriodoPosterior'}

        template = loader.get_template('admin/relacionamento/edit.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def relacionamento_delete(request, relacionamento_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            relacionamentoDelete = Relacionamento.objects.filter(id=relacionamento_id).first()
            requisitoAssociadoRelacionamento = Requisito.objects.filter(
                gradeDisciplina__id=relacionamentoDelete.gradeDisciplinaRelacionamentoPosterior.id,
                gradeDisciplinaRequisito__id=relacionamentoDelete.gradeDisciplinaRelacionamentoAnterior.id).first()
            if requisitoAssociadoRelacionamento != None:
                return HttpResponseRedirect(reverse('relacionamento_index') + '?relacionamentoAssociadoRequisito')

            # for relacionamento in relacionamentos:
            #     if (
            #             relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoAnterior.disciplina.id
            #             and relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id) \
            #             or (
            #             relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.id == gradeDisciplinaRelacionamentoPosterior.disciplina.id
            #             and relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.id == gradeDisciplinaRelacionamentoAnterior.disciplina.id):
            #         return HttpResponseRedirect(reverse('relacionamento_create', args=[
            #             request.POST['grade_id']]) + '?relacionamentoExistenteEntreDisciplinas')

            Relacionamento.objects.filter(id=relacionamento_id).delete()
            grade_consolidar(relacionamentoDelete.gradeDisciplinaRelacionamentoPosterior.grade.id)
            return HttpResponseRedirect(reverse('relacionamento_index') + '?successDelete')

        relacionamento = Relacionamento.objects.filter(id=relacionamento_id).first()
        context = {'relacionamento': relacionamento}
        template = loader.get_template('admin/relacionamento/delete.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def requisito_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        # retorna apenas soluções originais para o selection
        # os pre-requisitos de uma solução obrigatoriamente são os mesmos de sua solução original
        grades = Grade.objects.filter(gradeOriginal__isnull=True, curriculo__curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id)))

        if request.method == 'POST' and request.POST['grade_id'] != '':
            gradesDisciplinasList = GradeDisciplina.objects.filter(
                grade_id=request.POST['grade_id'])
            page = request.GET.get('page', 1)
            paginator = Paginator(gradesDisciplinasList, 100)

            try:
                gradesDisciplinas = paginator.page(page)
            except PageNotAnInteger:
                gradesDisciplinas = paginator.page(1)
            except EmptyPage:
                gradesDisciplinas = paginator.page(paginator.num_pages)

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            context = {'gradeSelection': grade, 'grades': grades, 'gradesDisciplinas': gradesDisciplinas}

        else:
            gradeId = request.GET.get('grade_id')
            if gradeId:
                gradesDisciplinasList = GradeDisciplina.objects.filter(
                    grade_id=gradeId)
                grade = Grade.objects.filter(id=gradeId).first()
            else:
                gradesDisciplinasList = GradeDisciplina.objects.filter(grade__id__in=Subquery(grades.values('id')))[
                                        :100]

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesDisciplinasList, 100)

            try:
                gradesDisciplinas = paginator.page(page)
            except PageNotAnInteger:
                gradesDisciplinas = paginator.page(1)
            except EmptyPage:
                gradesDisciplinas = paginator.page(paginator.num_pages)

            if gradeId:
                context = {'gradeSelection': grade, 'grades': grades, 'gradesDisciplinas': gradesDisciplinas}
            else:
                context = {'grades': grades, 'gradesDisciplinas': gradesDisciplinas}

        if 'successEdit' in request.GET:
            context = {**context, 'message': 'successEdit'}

        elif 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        template = loader.get_template('admin/requisito/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def requisito_create(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':
            gradeDisciplina = GradeDisciplina.objects.filter(
                id=request.POST['gradeDisciplina_id']).first()
            idGradesDisciplinasPrerequisitos = request.POST.getlist("prerequisitos[]")
            for idGradeDisciplinaPreRequisito in idGradesDisciplinasPrerequisitos:
                gradeDisciplinaPreRequisito = GradeDisciplina.objects.filter(id=idGradeDisciplinaPreRequisito).first()

                if gradeDisciplina.id == gradeDisciplinaPreRequisito.id:
                    return HttpResponseRedirect(
                        reverse('requisito_create', args=[gradeDisciplina.grade.id]) + '?disciplinasIguais')

                if gradeDisciplinaPreRequisito.periodoFixo and gradeDisciplinaPreRequisito.periodo == gradeDisciplinaPreRequisito.grade.curriculo.quantidadePeriodos:
                    return HttpResponseRedirect(
                        reverse('requisito_create', args=[gradeDisciplina.grade.id]) + '?requisitoUltimoPeriodo')

                if gradeDisciplina.periodoFixo and gradeDisciplina.periodo == 1:
                    return HttpResponseRedirect(
                        reverse('requisito_create', args=[gradeDisciplina.grade.id]) + '?dependentePrimeiroPeriodo')

                if gradeDisciplina.periodoFixo and gradeDisciplinaPreRequisito.periodoFixo and gradeDisciplina.periodo <= gradeDisciplinaPreRequisito.periodo:
                    return HttpResponseRedirect(
                        reverse('requisito_create',
                                args=[gradeDisciplina.grade.id]) + '?dependenteAnteriorPeriodoAnteriorOuIgualRequisito')

                if gradeDisciplina.periodoFixo and gradeDisciplina.periodo - gradeDisciplinaPreRequisito.periodo > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                    return HttpResponseRedirect(reverse('requisito_create', args=[
                        gradeDisciplina.grade.id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior&disciplinaPosterior='
                                                + gradeDisciplina.disciplina.nome
                                                + '&disciplinaAnterior='
                                                + gradeDisciplinaPreRequisito.disciplina.nome
                                                + '&periodoPosterior=' + str(gradeDisciplina.periodo)
                                                + '&periodoRequisito=' + str(gradeDisciplinaPreRequisito.periodo))

                requisitoVerificar1 = Requisito.objects.filter(gradeDisciplina_id=gradeDisciplina.id,
                                                               gradeDisciplinaRequisito_id=gradeDisciplinaPreRequisito.id).first()
                requisitoVerificar2 = Requisito.objects.filter(gradeDisciplinaRequisito_id=gradeDisciplina.id,
                                                               gradeDisciplina_id=gradeDisciplinaPreRequisito.id).first()

                if requisitoVerificar1 != None or requisitoVerificar2 != None:
                    return HttpResponseRedirect(
                        reverse('requisito_create', args=[gradeDisciplina.grade.id]) + '?requisitoExistente')

                relacionamentoOrdemInversaPrerequisito = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoPosterior_id=gradeDisciplinaPreRequisito.id,
                    gradeDisciplinaRelacionamentoAnterior_id=gradeDisciplina.id).first()

                if relacionamentoOrdemInversaPrerequisito != None:
                    return HttpResponseRedirect(
                        reverse('requisito_create',
                                args=[gradeDisciplina.grade.id]) + '?relacionamentoOrdemInversaExistente')

                requisito = Requisito(
                    gradeDisciplina=gradeDisciplina,
                    gradeDisciplinaRequisito=gradeDisciplinaPreRequisito,
                )

                relacionamento = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoPosterior_id=gradeDisciplina.id,
                    gradeDisciplinaRelacionamentoAnterior_id=gradeDisciplinaPreRequisito.id).first()
                # caso já exista um relacionamento cadastrado anteriormente, o nível deste relacionamento é atualizado para 9,
                # independente se estava com outro valor, pois a especificação do sistema diz que relações de pré-requisito
                # são de nível 9.
                if relacionamento != None:
                    relacionamento.relacionamento = 9

                else:
                    # pre-requisitos tem relação nível máximo. Portanto, o relacionamento já é definido quando o requisito é persistido
                    relacionamento = Relacionamento(
                        gradeDisciplinaRelacionamentoPosterior=gradeDisciplina,
                        gradeDisciplinaRelacionamentoAnterior=gradeDisciplinaPreRequisito,
                        relacionamento=9,
                    )

                try:
                    relacionamento.save()
                    requisito.save()
                    grade_consolidar(gradeDisciplina.grade.id)
                except Exception as e:
                    return print(e)
            return HttpResponseRedirect(reverse('requisito_create', args=[gradeDisciplina.grade.id]) + '?successCreate')

        gradesDisciplinas = GradeDisciplina.objects.filter(grade_id=grade_id)
        grade = Grade.objects.filter(id=grade_id).first()
        context = {'gradesDisciplinas': gradesDisciplinas, 'grade': grade}

        if 'successCreate' in request.GET:
            context = {**context, 'message': 'successCreate'}

        if 'disciplinasIguais' in request.GET:
            context = {**context, 'message': 'disciplinasIguais'}

        if 'requisitoExistente' in request.GET:
            context = {**context, 'message': 'requisitoExistente'}

        if 'relacionamentoOrdemInversaExistente' in request.GET:
            context = {**context, 'message': 'relacionamentoOrdemInversaExistente'}

        if 'requisitoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'requisitoUltimoPeriodo'}

        if 'dependentePrimeiroPeriodo' in request.GET:
            context = {**context, 'message': 'dependentePrimeiroPeriodo'}

        if 'dependenteAnteriorPeriodoAnteriorOuIgualRequisito' in request.GET:
            context = {**context, 'message': 'dependenteAnteriorPeriodoAnteriorOuIgualRequisito'}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO,
                       'periodoPosterior': request.GET.get('periodoPosterior', ''),
                       'periodoRequisito': request.GET.get('periodoRequisito', '')}

        template = loader.get_template('admin/requisito/create.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def requisito_view(request, gradeDisciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
            gradeDisciplina = GradeDisciplina.objects.filter(id=gradeDisciplina_id).first()
            requisitos = Requisito.objects.filter(gradeDisciplina__id=gradeDisciplina_id)
            context = {'gradeDisciplina': gradeDisciplina, 'requisitos': requisitos}
            template = loader.get_template('admin/requisito/view.html')
            return HttpResponse(template.render(context, request))
        elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
            return render(request, 'aluno/home/index.html', {})
        else:
            return redirect('login')


def requisito_edit(request, gradeDisciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        gradeDisciplina = GradeDisciplina.objects.filter(id=gradeDisciplina_id).first()
        grade = Grade.objects.filter(id=gradeDisciplina.grade.id).first()
        gradesDisciplinasPrerequisitos = GradeDisciplina.objects.filter(
            id__in=Subquery(gradeDisciplina.prerequisitos.values('gradeDisciplinaRequisito_id')))
        gradesDisciplinas = GradeDisciplina.objects.filter(grade__id=gradeDisciplina.grade.id)

        if request.method == 'POST':
            idGradesDisciplinasPrerequisitos = request.POST.getlist("prerequisitos[]")

            for idGradeDisciplinaPreRequisito in idGradesDisciplinasPrerequisitos:
                gradeDisciplinaPreRequisito = GradeDisciplina.objects.filter(id=idGradeDisciplinaPreRequisito).first()

                if gradeDisciplina.id == gradeDisciplinaPreRequisito.id:
                    return HttpResponseRedirect(
                        reverse('requisito_edit', args=[gradeDisciplina_id]) + '?disciplinasIguais')

                if gradeDisciplinaPreRequisito.periodoFixo and gradeDisciplinaPreRequisito.periodo == gradeDisciplinaPreRequisito.grade.curriculo.quantidadePeriodos:
                    return HttpResponseRedirect(
                        reverse('requisito_edit', args=[gradeDisciplina_id]) + '?requisitoUltimoPeriodo')

                if gradeDisciplina.periodoFixo and gradeDisciplinaPreRequisito.periodoFixo and gradeDisciplina.periodo <= gradeDisciplinaPreRequisito.periodo:
                    return HttpResponseRedirect(
                        reverse('requisito_edit',
                                args=[gradeDisciplina_id]) + '?dependenteAnteriorPeriodoAnteriorOuIgualRequisito')

                if gradeDisciplina.periodoFixo and gradeDisciplinaPreRequisito.periodoFixo and gradeDisciplina.periodo - gradeDisciplinaPreRequisito.periodo > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                    return HttpResponseRedirect(reverse('requisito_edit', args=[
                        gradeDisciplina_id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior&disciplinaPosterior='
                                                + gradeDisciplina.disciplina.nome
                                                + '&disciplinaAnterior='
                                                + gradeDisciplinaPreRequisito.disciplina.nome
                                                + '&periodoPosterior=' + str(gradeDisciplina.periodo)
                                                + '&periodoRequisito=' + str(gradeDisciplinaPreRequisito.periodo))

                requisitoVerificar = Requisito.objects.filter(gradeDisciplinaRequisito_id=gradeDisciplina.id,
                                                              gradeDisciplina_id=gradeDisciplinaPreRequisito.id).first()
                if requisitoVerificar != None:
                    return HttpResponseRedirect(
                        reverse('requisito_edit', args=[gradeDisciplina_id]) + '?requisitoExistente')

                relacionamentoOrdemInversaPrerequisito = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoPosterior_id=gradeDisciplinaPreRequisito.id,
                    gradeDisciplinaRelacionamentoAnterior_id=gradeDisciplina.id).first()

                if relacionamentoOrdemInversaPrerequisito != None:
                    return HttpResponseRedirect(
                        reverse('requisito_edit',
                                args=[gradeDisciplina_id]) + '?relacionamentoOrdemInversaExistente')

                # retorna todos os requisitos associados à gradeDisciplina
                requisitosDelete = Requisito.objects.filter(gradeDisciplina_id=gradeDisciplina_id)
                # apaga os relacionamentos associados aos requisitos
                for requisitoDelete in requisitosDelete:
                    Relacionamento.objects.filter(gradeDisciplinaRelacionamentoPosterior__id=gradeDisciplina_id,
                                                  gradeDisciplinaRelacionamentoAnterior__id=requisitoDelete.gradeDisciplinaRequisito.id).delete()
                Requisito.objects.filter(gradeDisciplina__id=gradeDisciplina_id).delete()

                requisito = Requisito(
                    gradeDisciplina=gradeDisciplina,
                    gradeDisciplinaRequisito=gradeDisciplinaPreRequisito,
                )

                relacionamento = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoPosterior_id=gradeDisciplina.id,
                    gradeDisciplinaRelacionamentoAnterior_id=gradeDisciplinaPreRequisito.id).first()
                # caso já exista um relacionamento cadastrado anteriormente, o nível deste relacionamento é atualizado para 9,
                # independente se estava com outro valor, pois a especificação do sistema diz que relações de pré-requisito
                # são de nível 9.
                if relacionamento != None:
                    relacionamento.relacionamento = 9

                else:
                    # pre-requisitos tem relação nível máximo. Portanto, o relacionamento já é definido quando o requisito é persistido
                    relacionamento = Relacionamento(
                        gradeDisciplinaRelacionamentoPosterior=gradeDisciplina,
                        gradeDisciplinaRelacionamentoAnterior=gradeDisciplinaPreRequisito,
                        relacionamento=9,
                    )

                try:
                    relacionamento.save()
                    requisito.save()
                    grade_consolidar(gradeDisciplina.grade.id)
                except Exception as e:
                    return print(e)

            return HttpResponseRedirect(reverse('requisito_index') + '?successEdit')

        context = {'gradeDisciplina': gradeDisciplina, 'gradesDisciplinas': gradesDisciplinas,
                   'gradesDisciplinasPrerequisitos': gradesDisciplinasPrerequisitos, 'grade': grade}

        if 'disciplinasIguais' in request.GET:
            context = {**context, 'message': 'disciplinasIguais'}

        if 'requisitoExistente' in request.GET:
            context = {**context, 'message': 'requisitoExistente'}

        if 'relacionamentoOrdemInversaExistente' in request.GET:
            context = {**context, 'message': 'relacionamentoOrdemInversaExistente'}

        if 'requisitoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'requisitoUltimoPeriodo'}

        if 'dependentePrimeiroPeriodo' in request.GET:
            context = {**context, 'message': 'dependentePrimeiroPeriodo'}

        if 'dependenteAnteriorPeriodoAnteriorOuIgualRequisito' in request.GET:
            context = {**context, 'message': 'dependenteAnteriorPeriodoAnteriorOuIgualRequisito'}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO,
                       'periodoPosterior': request.GET.get('periodoPosterior', ''),
                       'periodoRequisito': request.GET.get('periodoRequisito', '')}

        template = loader.get_template('admin/requisito/edit.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def requisito_delete(request, gradeDisciplina_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        if request.method == 'POST':

            # retorna todos os requisitos associados à gradeDisciplina
            requisitosDelete = Requisito.objects.filter(gradeDisciplina_id=gradeDisciplina_id)

            # apaga os relacionamentos associados aos requisitos
            for requisitoDelete in requisitosDelete:
                Relacionamento.objects.filter(gradeDisciplinaRelacionamentoPosterior__id=gradeDisciplina_id,
                                              gradeDisciplinaRelacionamentoAnterior__id=requisitoDelete.gradeDisciplinaRequisito.id).delete()

            # apaga todos os pré-requisitos da disciplina
            Requisito.objects.filter(gradeDisciplina_id=gradeDisciplina_id).delete()
            grade_consolidar(requisitoDelete.gradeDisciplina.grade.id)
            return HttpResponseRedirect(reverse('requisito_index') + '?successDelete')

        gradeDisciplina = GradeDisciplina.objects.filter(id=gradeDisciplina_id).first()
        context = {'gradeDisciplina': gradeDisciplina}
        template = loader.get_template('admin/requisito/delete.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def comum_usercurso_create(request):
    if request.user.is_authenticated:
        if request.method == 'POST':
            if request.user.groups.filter(name='aluno'):
                userCursoEstudante = UserCurso.objects.filter(user_id=request.user.id).first()
                if userCursoEstudante != None:
                    return HttpResponseRedirect(reverse('comum_usercurso_create') + '?estudanteJaVinculadoAAlgumCurso')
            userCurso = UserCurso.objects.filter(user_id=request.user.id, curso_id=request.POST['curso_id']).first()
            if userCurso != None:
                return HttpResponseRedirect(reverse('comum_usercurso_create') + '?usuarioAssociadoCurso')
            curso = Curso.objects.filter(
                id=request.POST['curso_id']).first()

            userCurso = UserCurso(
                user=request.user,
                curso=curso,
            )
            try:
                userCurso.save()
            except Exception as e:
                return print(e)
            return HttpResponseRedirect(reverse('comum_usercurso_create') + '?successCreate')

        cursos = Curso.objects.all()

        context = {'cursos': cursos, 'user': request.user}
        if 'successCreate' in request.GET:
            context = {**context, 'message': 'success'}
        if 'usuarioAssociadoCurso' in request.GET:
            context = {**context, 'message': 'usuarioAssociadoCurso'}
        if 'estudanteJaVinculadoAAlgumCurso' in request.GET:
            context = {**context, 'message': 'estudanteJaVinculadoAAlgumCurso'}

        template = loader.get_template('comum/usercurso/create.html')
        return HttpResponse(template.render(context, request))

    return redirect('login')


def comum_usercurso_index(request):
    if request.user.is_authenticated:

        userCursosList = UserCurso.objects.filter(user_id=request.user.id).order_by('curso__nome')
        page = request.GET.get('page', 1)
        paginator = Paginator(userCursosList, 100)

        try:
            userCursos = paginator.page(page)
        except PageNotAnInteger:
            userCursos = paginator.page(1)
        except EmptyPage:
            userCursos = paginator.page(paginator.num_pages)

        context = {'userCursos': userCursos, 'user': request.user}
        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        template = loader.get_template('comum/usercurso/index.html')
        return HttpResponse(template.render(context, request))

    return redirect('login')


def comum_usercurso_view(request, curso_id):
    if request.user.is_authenticated:
        curso = Curso.objects.filter(id=curso_id).first()
        context = {'curso': curso}

        template = loader.get_template('comum/usercurso/cursoview.html')
        return HttpResponse(template.render(context, request))
    else:
        return redirect('login')


def comum_usercurso_delete(request, usercurso_id=None):
    if request.user.is_authenticated:
        alunoDelete = False
        if request.method == 'POST':
            if request.user.groups.filter(name='aluno'):
                # apaga as grades, inclusive as balanceadas, do usuário e a lista de disciplinas a cursar
                # em curricular_disciplinascursar(cascade)
                Grade.objects.filter(user_id=request.user.id, solucao=True).delete()
                Grade.objects.filter(user_id=request.user.id).delete()
            UserCurso.objects.filter(id=usercurso_id).delete()
            return HttpResponseRedirect(reverse('comum_usercurso_index') + '?successDelete')
        userCurso = UserCurso.objects.filter(id=usercurso_id).first()
        if request.user.groups.filter(name='aluno'):
            alunoDelete = True
        context = {'userCurso': userCurso, 'alunoDelete': alunoDelete}
        template = loader.get_template('comum/usercurso/delete.html')
        return HttpResponse(template.render(context, request))
    return redirect('login')


@shared_task(name="grade_balance", serializer='json')
def grade_balance(criterioCreditos, criterioRetencao, criterioDistancia, restricaoCicloBasico, restricaoPeriodoFixo,
                  restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos, grade_id, user_id):

        # parametros
        gradesDisciplinas = GradeDisciplina.objects.filter(grade__id=grade_id)
        grade = Grade.objects.filter(id=grade_id).first()

        # distanciaDisciplinasPrerequisito = request.POST['distanciaDisciplinasPrerequisito']
        # pontuacaoInicialRelacao = request.POST['pontuacaoInicialRelacao']

        codigosDisciplinasTraducao = {}
        prerequisitos = {}
        i = 0
        for gradeDisciplina in gradesDisciplinas:
            codigosDisciplinasTraducao[i] = []
            codigosDisciplinasTraducao[i].append(gradeDisciplina.disciplina.codigo)
            codigosDisciplinasTraducao[i].append(gradeDisciplina.disciplina.nome)
            codigosDisciplinasTraducao[i].append(gradeDisciplina.id)
            codigosDisciplinasTraducao[i].append(gradeDisciplina.creditos)
            codigosDisciplinasTraducao[i].append(gradeDisciplina.retencao)
            codigosDisciplinasTraducao[i].append(gradeDisciplina.cicloBasico)
            codigosDisciplinasTraducao[i].append(gradeDisciplina.periodoFixo)
            if gradeDisciplina.periodoFixo is False:
                codigosDisciplinasTraducao[i].append(
                    0)  # usuário informa uma quantidade a partir de 1, mas o sistema trabalha com contagem a partir de zero
            else:
                codigosDisciplinasTraducao[i].append(
                    gradeDisciplina.periodo - 1)  # usuário informa uma quantidade a partir de 1, mas o sistema trabalha com contagem a partir de zero

            codigosDisciplinasTraducao[i].append(gradeDisciplina.disciplina.id)
            codigosDisciplinasTraducao[i].append(gradeDisciplina.periodoGradeAtual)
            i = i + 1

        for codigoDisciplinaTraducao in codigosDisciplinasTraducao:
            # retorna os requisitos da GradeDisciplina associada ao elemento do dicionário
            requisitos = Requisito.objects.filter(
                gradeDisciplina__id=codigosDisciplinasTraducao[codigoDisciplinaTraducao][2])
            if requisitos:
                prerequisitos[codigoDisciplinaTraducao] = []
                for requisito in requisitos:
                    for codigoDisciplinaTraducaoRequisito in codigosDisciplinasTraducao:
                        # verifica no dicionário se o id da sua GradeDisciplina é igual ao id da GradeDisciplinaRequisito
                        if codigosDisciplinasTraducao[codigoDisciplinaTraducaoRequisito][
                            2] == requisito.gradeDisciplinaRequisito.id:
                            # adiciona a chave do dicionário ao array que representa os requisitos de outro elemento do dicionário
                            prerequisitos[codigoDisciplinaTraducao].append(codigoDisciplinaTraducaoRequisito)

        relacaoDisciplinas = {}

        for codigoDisciplinaTraducaoAnterior in codigosDisciplinasTraducao:
            for codigoDisciplinaTraducaoPosterior in codigosDisciplinasTraducao:
                relacionamento = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__id=
                                                               codigosDisciplinasTraducao[
                                                                   codigoDisciplinaTraducaoAnterior][2],
                                                               gradeDisciplinaRelacionamentoPosterior__id=
                                                               codigosDisciplinasTraducao[
                                                                   codigoDisciplinaTraducaoPosterior][2]).first()
                if (relacionamento):
                    relacaoDisciplinas[
                        codigoDisciplinaTraducaoAnterior, codigoDisciplinaTraducaoPosterior] = relacionamento.relacionamento

        # relacaoDisciplinas = []
        #
        # for codigoDisciplinaTraducaoAnterior in codigosDisciplinasTraducao:
        #     relacaoDisciplinas.append([])
        #     for codigoDisciplinaTraducaoPosterior in codigosDisciplinasTraducao:
        #         relacionamento = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__id=
        #                                                        codigosDisciplinasTraducao[
        #                                                            codigoDisciplinaTraducaoAnterior][2],
        #                                                        gradeDisciplinaRelacionamentoPosterior__id=
        #                                                        codigosDisciplinasTraducao[
        #                                                            codigoDisciplinaTraducaoPosterior][2]).first()
        #         if (relacionamento):
        #             relacaoDisciplinas[codigoDisciplinaTraducaoAnterior].append(relacionamento.relacionamento)
        #         else:
        #             relacaoDisciplinas[codigoDisciplinaTraducaoAnterior].append(0)

        quantidadePeriodos = grade.curriculo.quantidadePeriodos;
        # considerando que a quantidade mínima de disciplinas é 2 e não existir disciplinas com menos de 2 créditos
        cargaMinimaPorPeriodo = grade.curriculo.cargaMinimaPorPeriodo;
        # regulamento da graduação diz que a carga máxima são 36 créditos
        cargaMaximaPorPeriodo = grade.curriculo.cargaMaximaPorPeriodo;
        quantidadeMinimaDisciplinasPorPeriodo = grade.curriculo.quantidadeMinimaDisciplinasPorPeriodo;
        quantidadeMaximaDisciplinasPorPeriodo = grade.curriculo.quantidadeMaximaDisciplinasPorPeriodo;

        ####################################################### PARÂMETROS #####################################################

        disciplinasNivelamento = []
        for codigoDisciplinaTraducao in codigosDisciplinasTraducao:
            if codigosDisciplinasTraducao[codigoDisciplinaTraducao][5]:
                disciplinasNivelamento.append(codigoDisciplinaTraducao)

        # números que indicam os 'graus' crescentes de relações entre as disciplinas

        # PONTUACAORELACAOPREREQUISITO = 9;  # apenas para pré-requisitos
        # PONTUACAOINICIALRELACAO = pontuacaoInicialRelacao;

        # Lower e upper bounds referentes aos critérios
        minCarga = 0
        maxCarga = 0
        minRetencao = 0
        maxRetencao = 0
        minRelacao = 0
        maxRelacao = 0

        # parâmetros que controlam as distâncias entre disciplinas de acordo com o grau de relação entre estas
        # DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO = 0;
        # DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO = distanciaDisciplinasPrerequisito;
        # diferencaMaximaPeriodosRelacaoMaiorNivel4 = 8;

        # codigos dos períodos
        periodos = range(quantidadePeriodos);

        # distância entre os semestres (referência do artigo (Uysal, 2014))
        # utilização do maior array encontrado até então (Engenharia de Sistemas (UFMG))

        ################################################## FUNÇÃO OBJETIVO #####################################################

        normalizaBalanceia = 2
        # pesos para os termos da função objetivo

        a = range(11)
        pesos = []
        combinacoes = 6

        for nb in range(normalizaBalanceia):

            if nb == 0:
                for combinacao in range(combinacoes):
                    if combinacao == 0 or combinacao == 1:
                        pesoCarga = 1
                        pesoRetencao = 0
                        pesoRelacao = 0
                    elif combinacao == 2 or combinacao == 3:
                        pesoCarga = 0
                        pesoRetencao = 1
                        pesoRelacao = 0
                    else:  # combinacao == 4 or combinacao == 5:
                        pesoCarga = 0
                        pesoRetencao = 0
                        pesoRelacao = 1

                    try:

                        menorMaiorValor = None
                        menorMaiorValor = balancearGrade(codigosDisciplinasTraducao, periodos, cargaMinimaPorPeriodo,
                                                         cargaMaximaPorPeriodo, relacaoDisciplinas,
                                                         DISTANCIA_SEMESTRES, pesoCarga, minCarga, maxCarga,
                                                         pesoRetencao,
                                                         minRetencao,
                                                         maxRetencao, pesoRelacao,
                                                         maxRelacao, minRelacao, disciplinasNivelamento, grade,
                                                         prerequisitos,
                                                         quantidadePeriodos, quantidadeMinimaDisciplinasPorPeriodo,
                                                         quantidadeMaximaDisciplinasPorPeriodo, PONTUACAOINICIALRELACAO,
                                                         DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO,
                                                         PONTUACAORELACAOPREREQUISITO,
                                                         criterioDistancia,
                                                         restricaoCicloBasico, restricaoPeriodoFixo,
                                                         restricaoCargaMaxima, restricaoQuantidadeMaxima,
                                                         restricaoPreRequisitos,
                                                         DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO, nb,
                                                         combinacao)

                        if menorMaiorValor == 'semSolucaoViavel':
                            grade.problemaUltimoBalanceamento = True
                            grade.emBalanceamento = False
                            grade.save()
                            return 'FAIL'

                    except gurobipy.GurobiError as e:
                        print('Error code ' + str(e.errno) + ": " + str(e))

                    except AttributeError:
                        print('Encountered an attribute error')

                    if combinacao == 0:
                        minCarga = menorMaiorValor
                    elif combinacao == 1:
                        maxCarga = menorMaiorValor
                    elif combinacao == 2:
                        minRetencao = menorMaiorValor
                    elif combinacao == 3:
                        maxRetencao = menorMaiorValor
                    elif combinacao == 4:
                        minRelacao = menorMaiorValor
                    else:
                        maxRelacao = menorMaiorValor

            else:
                resultados = list()
                resultadosPareto = list()
                module_dir = os.path.dirname(__file__)  # get current directory
                combinacoes = 0

                if criterioCreditos == 'N':
                    pesoCarga = 0

                if criterioRetencao == 'N':
                    pesoRetencao = 0

                if criterioDistancia == 'N':
                    pesoRelacao = 0

                if criterioCreditos == 'N' and criterioRetencao == 'N':
                    for k in a:
                        if (pesoCarga + pesoRetencao + k == (len(a) - 1)):
                            pesos.append([])
                            pesos[combinacoes].append(pesoCarga / (len(a) - 1))
                            pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
                            pesos[combinacoes].append(k / (len(a) - 1))
                            combinacoes += 1

                elif criterioCreditos == 'N' and criterioDistancia == 'N':
                    for j in a:
                        if (pesoCarga + j + pesoRelacao == (len(a) - 1)):
                            pesos.append([])
                            pesos[combinacoes].append(pesoCarga / (len(a) - 1))
                            pesos[combinacoes].append(j / (len(a) - 1))
                            pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
                            combinacoes += 1

                elif criterioCreditos == 'N':
                    for j in a:
                        for k in a:
                            if (pesoCarga + j + k == (len(a) - 1)):
                                pesos.append([])
                                pesos[combinacoes].append(pesoCarga / (len(a) - 1))
                                pesos[combinacoes].append(j / (len(a) - 1))
                                pesos[combinacoes].append(k / (len(a) - 1))
                                combinacoes += 1

                elif criterioRetencao == 'N' and criterioDistancia == 'N':
                    for i in a:
                        if (i + pesoRetencao + pesoRelacao == (len(a) - 1)):
                            pesos.append([])
                            pesos[combinacoes].append(i / (len(a) - 1))
                            pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
                            pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
                            combinacoes += 1

                elif criterioRetencao == 'N':
                    for i in a:
                        for k in a:
                            if (i + pesoRetencao + k == (len(a) - 1)):
                                pesos.append([])
                                pesos[combinacoes].append(i / (len(a) - 1))
                                pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
                                pesos[combinacoes].append(k / (len(a) - 1))
                                combinacoes += 1

                elif criterioDistancia == 'N':
                    for i in a:
                        for j in a:
                            if (i + j + pesoRelacao == (len(a) - 1)):
                                pesos.append([])
                                pesos[combinacoes].append(i / (len(a) - 1))
                                pesos[combinacoes].append(j / (len(a) - 1))
                                pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
                                combinacoes += 1

                else:
                    for i in a:
                        for j in a:
                            for k in a:
                                if (i + j + k == (len(a) - 1)):
                                    pesos.append([])
                                    pesos[combinacoes].append(i / (len(a) - 1))
                                    pesos[combinacoes].append(j / (len(a) - 1))
                                    pesos[combinacoes].append(k / (len(a) - 1))
                                    combinacoes += 1

                for combinacao in range(combinacoes):
                    pesoCarga = pesos[combinacao][0]
                    pesoRetencao = pesos[combinacao][1]
                    pesoRelacao = pesos[combinacao][2]

                    try:
                        dados = balancearGrade(codigosDisciplinasTraducao, periodos, cargaMinimaPorPeriodo,
                                               cargaMaximaPorPeriodo, relacaoDisciplinas,
                                               DISTANCIA_SEMESTRES, pesoCarga, minCarga, maxCarga, pesoRetencao,
                                               minRetencao,
                                               maxRetencao, pesoRelacao,
                                               maxRelacao, minRelacao, disciplinasNivelamento, grade, prerequisitos,
                                               quantidadePeriodos, quantidadeMinimaDisciplinasPorPeriodo,
                                               quantidadeMaximaDisciplinasPorPeriodo, PONTUACAOINICIALRELACAO,
                                               DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO,
                                               PONTUACAORELACAOPREREQUISITO,
                                               criterioDistancia,
                                               restricaoCicloBasico, restricaoPeriodoFixo,
                                               restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos,
                                               DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO, nb, combinacao)
                    except gurobipy.GurobiError as e:
                        print('Error code ' + str(e.errno) + ": " + str(e))

                    except AttributeError:
                        print('Encountered an attribute error')

                    X = dados['X']
                    C = dados['C']
                    IR = dados['IR']
                    RD = dados['RD']

                    try:

                        gradeSolucao = criarGradeSolucao(C, IR, RD, pesoCarga, pesoRetencao, pesoRelacao, combinacao,
                                                         grade,
                                                         user_id)
                        criarGradeDisciplinaSolucao(gradeSolucao, codigosDisciplinasTraducao, periodos, X)
                        # criarPrerequisitosGradeDisciplinaSolucao(grade_id, gradeSolucao.id)
                        # criarRelacionamentosGradeDisciplinaSolucao(grade_id, gradeSolucao.id)

                    except Exception as e:
                        return print(e)

                #     # impressão dos resultados
                #     print("\n")
                #     print("Solução: " + str(combinacao))
                #     print("\n")
                #     resultados.append("Solução: " + str(combinacao))
                #     resultados.append("\n")
                #     resultados.append("\n")
                #     imprimirPesos(resultados, pesoCarga, pesoRetencao, pesoRelacao)
                #     print("\n")
                #     imprimirValoresVariaveis(resultados, C, IR, RD)
                #     print("\n")
                #     imprimirSomatorioCargasPorPeriodo(periodos, codigosDisciplinasTraducao, resultados, X)
                #     print("\n")
                #     imprimirSomatorioIndicesRetencao(periodos, codigosDisciplinasTraducao, resultados, X)
                #     print("\n")
                #     imprimirGrade(periodos, codigosDisciplinasTraducao,
                #                   resultados, X)
                #     imprimirValoresParaFronteiraPareto(resultadosPareto, pesoCarga, pesoRetencao, pesoRelacao, C,
                #                                        IR,
                #                                        RD)
                #
                #     print('Valor função objetivo: %g' % modelo.objVal)
                #     resultados.append('Valor função objetivo: %g' % modelo.objVal)
                #
                #     module_dir = os.path.dirname(__file__)  # get current directory
                #     data_e_hora_em_texto = str(datetime.now())
                #     data_e_hora_em_texto = data_e_hora_em_texto.replace(":", "_")
                #     data_e_hora_em_texto = data_e_hora_em_texto.replace(" ", "_")
                #     arquivo = open(module_dir + "/resultados/iteracao_" + data_e_hora_em_texto + ".txt", "a",
                #                    encoding='utf-8')
                #     arquivo.writelines(resultados)
                #     resultados.clear()
                #     arquivo.close()
                #
                # data_e_hora_em_texto_pareto = str(datetime.now())
                # data_e_hora_em_texto_pareto = data_e_hora_em_texto_pareto.replace(":", "_")
                # data_e_hora_em_texto_pareto = data_e_hora_em_texto_pareto.replace(" ", "_")
                # arquivo_pareto = open(
                #     module_dir + "/resultados/dadosPareto_" + data_e_hora_em_texto_pareto + ".txt",
                #     "a",
                #     encoding='utf-8')
                # arquivo_pareto.writelines(resultadosPareto)
                # arquivo_pareto.close()

        gradesBalanceadasSemPareto = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id)

        gradesExclusao = {}
        # naoExcluir = {}
        contagemSemParetoExclusao = 0
        # contagemNaoExcluir = 0
        for gradeSemParetoA in gradesBalanceadasSemPareto:
            for gradeSemParetoB in gradesBalanceadasSemPareto:
                if (
                        gradeSemParetoA.c <= gradeSemParetoB.c and gradeSemParetoA.ir <= gradeSemParetoB.ir and gradeSemParetoA.rd < gradeSemParetoB.rd) or \
                        (
                                gradeSemParetoA.c <= gradeSemParetoB.c and gradeSemParetoA.rd <= gradeSemParetoB.rd and gradeSemParetoA.ir < gradeSemParetoB.ir) or \
                        (
                                gradeSemParetoA.ir <= gradeSemParetoB.ir and gradeSemParetoA.rd <= gradeSemParetoB.rd and gradeSemParetoA.c < gradeSemParetoB.c):

                    if not gradeSemParetoB.id in gradesExclusao.values():
                        gradesExclusao[contagemSemParetoExclusao] = gradeSemParetoB.id
                        contagemSemParetoExclusao = contagemSemParetoExclusao + 1

                # print('EXCLUIDORA '+gradeSemParetoA.nome)
                # print('EXCLUIDA ' + gradeSemParetoB.nome)
                # if not gradeSemParetoB.id in gradesExclusao.values():
                #     gradesExclusao[i] = gradeSemParetoB.id
                #     i = i + 1

        for idx in range(len(gradesExclusao)):
            gradeForaDeParetoExcluir = Grade.objects.filter(id=gradesExclusao[idx]).first()
            gradeForaDeParetoExcluir.delete()

        gradesBalanceadasExcluir = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id)

        gradesIguaisExclusao = {}
        naoExcluir = {}
        contagemGradesIguaisExclusao = 0
        contagemNaoExcluir = 0
        for gradeBalanceadaExcluirA in gradesBalanceadasExcluir:
            for gradeBalanceadaExcluirB in gradesBalanceadasExcluir:
                if (
                        gradeBalanceadaExcluirA.c == gradeBalanceadaExcluirB.c and gradeBalanceadaExcluirA.ir == gradeBalanceadaExcluirB.ir
                        and gradeBalanceadaExcluirA.rd == gradeBalanceadaExcluirB.rd and
                        gradeBalanceadaExcluirA.id != gradeBalanceadaExcluirB.id):
                    if not gradeBalanceadaExcluirB.id in naoExcluir.values():
                        if not gradeBalanceadaExcluirB.id in gradesIguaisExclusao.values():
                            gradesIguaisExclusao[contagemGradesIguaisExclusao] = gradeBalanceadaExcluirB.id
                            contagemGradesIguaisExclusao = contagemGradesIguaisExclusao + 1
                    if not gradeBalanceadaExcluirA.id in naoExcluir.values() and not gradeBalanceadaExcluirA.id in gradesIguaisExclusao.values():
                        naoExcluir[contagemNaoExcluir] = gradeBalanceadaExcluirA.id
                        contagemNaoExcluir = contagemNaoExcluir + 1

        # print(gradesIguaisExclusao)
        # print(naoExcluir)
        for idx in range(len(gradesIguaisExclusao)):
            gradeIgualExcluir = Grade.objects.filter(id=gradesIguaisExclusao[idx]).first()
            try:
                gradeIgualExcluir.delete()
            except Exception as e:
                return print(e)
            # if gradexc != None:
            #     print('EXCLUIR ' + gradexc.nome)

        # for idx in range(len(naoExcluir)):
        #     gradexc = Grade.objects.filter(id=naoExcluir[idx]).first()
        #     if gradexc != None:
        #         print ('NAO EXCLUIR '+ gradexc.nome)
        gradesPareto = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id).order_by('id').all()
        solucao = 1
        for gradePareto in gradesPareto:
            gradePareto.nome = grade.nome + ' - ' + 'Balanceamento_' + str(solucao)
            try:
                gradePareto.save()
            except Exception as e:
                return print(e)
            solucao = solucao + 1

        grade.balanceada = True
        grade.problemaUltimoBalanceamento = False
        grade.emBalanceamento = False
        try:
            grade.save()
        except Exception as e:
            return print(e)
        response = {
            'OK': 'OK'
        }
        return JsonResponse(response, status=200)


def balancearGrade(codigosDisciplinasTraducao, periodos, cargaMinimaPorPeriodo, cargaMaximaPorPeriodo,
                   relacaoDisciplinas,
                   DISTANCIA_SEMESTRES, pesoCarga, minCarga, maxCarga, pesoRetencao, minRetencao, maxRetencao,
                   pesoRelacao,
                   maxRelacao, minRelacao, disciplinasNivelamento, grade, prerequisitos, quantidadePeriodos,
                   quantidadeMinimaDisciplinasPorPeriodo,
                   quantidadeMaximaDisciplinasPorPeriodo, PONTUACAOINICIALRELACAO,
                   DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO,
                   PONTUACAORELACAOPREREQUISITO, criterioDistancia,
                   restricaoCicloBasico, restricaoPeriodoFixo,
                   restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos,
                   DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO, normalizaBalanceia, combinacao=None,
                   periodoCronologico=0):

    # cria um novo modelo
    modelo = gurobipy.Model('curricular')
    # gradeInterromper = Grade.objects.filter(id=grade.id).first()
    # if gradeInterromper.balanceamentoInterrompido is True:
    #     modelo.terminate()

    # WLSACCESSID = getattr(settings, "WLSACCESSID", None)
    # WLSSECRET = getattr(settings, "WLSSECRET", None)
    # LICENSEID = getattr(settings, "LICENSEID", None)
    # print (WLSACCESSID)
    # modelo.setParam('WLSAccessID', WLSACCESSID)
    # modelo.setParam('WLSSecret', WLSSECRET)  # turns off solver chatter
    # modelo.setParam('LicenseID', LICENSEID)  # turns off solver chatter
    # X é uma lista que, para cada disciplina, tem-se uma outra lista com valores que indicam se a disciplina está em um determinado período, resultando em uma matriz
    X = []
    for i in codigosDisciplinasTraducao:
        X.append([])
        for j in periodos:
            X[i].append(
                modelo.addVar(lb=0, ub=1, vtype=GRB.BINARY, name="x" + str(i) + str(j)))
    # C, IR e RD são variáveis que compõem a função objetivo
    C = modelo.addVar(lb=cargaMinimaPorPeriodo, vtype=GRB.INTEGER,
                      obj=1,
                      name="maxCarga")
    IR = modelo.addVar(lb=0, vtype=GRB.CONTINUOUS, obj=1, name="indiceRetencao")
    # RD é o somátório do grau de relação entre pares de disciplinas, multiplicado pela distância entre estas
    # adiciona período cronológico para pegar extamente as distâncias a partir do período atual do aluno
    RD = gurobipy.quicksum(
        relacaoDisciplinas[chave1, chave2] * DISTANCIA_SEMESTRES[jj + periodoCronologico][j + periodoCronologico] *
        X[chave2][j] *
        X[chave1][jj] for jj in periodos for j in periodos for chave1, chave2 in relacaoDisciplinas)

    if normalizaBalanceia == 0:
        if combinacao == 0 or combinacao == 1:
            if combinacao == 0:
                modelo.setObjective(pesoCarga * C + pesoRetencao * IR + pesoRelacao * RD,
                                    GRB.MINIMIZE)
            else:
                modelo.setObjective(
                    gurobipy.quicksum(
                        X[i][j] * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao for j
                        in periodos),
                    GRB.MAXIMIZE)
        elif combinacao == 2 or combinacao == 3:
            if combinacao == 2:
                modelo.setObjective(pesoCarga * C + pesoRetencao * IR + pesoRelacao * RD,
                                    GRB.MINIMIZE)
            else:
                modelo.setObjective(
                    gurobipy.quicksum(
                        X[i][j] * codigosDisciplinasTraducao[i][4] for i in codigosDisciplinasTraducao for j
                        in periodos),
                    GRB.MAXIMIZE)
        elif combinacao == 4 or combinacao == 5:
            if combinacao == 4:
                modelo.setObjective(pesoCarga * C + pesoRetencao * IR + pesoRelacao * RD,
                                    GRB.MINIMIZE)
            else:
                modelo.setObjective(pesoCarga * C + pesoRetencao * IR + pesoRelacao * RD,
                                    GRB.MAXIMIZE)

    else:
        if maxCarga == minCarga:
            normalizeC = 0
        else:
            normalizeC = (C - minCarga) / (maxCarga - minCarga)

        if maxRetencao == minRetencao:
            normalizeIR = 0
        else:
            normalizeIR = (IR - minRetencao) / (
                    maxRetencao - minRetencao)

        if maxRelacao == minRelacao:
            normalizeRD = 0
        else:
            normalizeRD = (RD - minRelacao) / (
                    maxRelacao - minRelacao)

        modelo.setObjective(
            pesoCarga * normalizeC + pesoRetencao * normalizeIR + pesoRelacao * normalizeRD, GRB.MINIMIZE)

    ################################################## RESTRIÇÕES ##########################################################

    # a restrição de nivelamento(ciclo básico só será aplicada caso a grade não seja de aluno)
    if restricaoCicloBasico == 'S' and grade.gradeAluno is False:
        for i in disciplinasNivelamento:
            modelo.addConstr(
                (gurobipy.quicksum(X[i][j] * j for j in periodos)),
                GRB.LESS_EQUAL, grade.curriculo.quantidadePeriodosCicloBasico - 1,
                name="DisciplinaNivelamento" + str(i));

    # algumas disciplinas podem ser fixadas em um período específico
    if restricaoPeriodoFixo == 'S':
        for i in codigosDisciplinasTraducao:
            if codigosDisciplinasTraducao[i][6]:
                modelo.addConstr(X[i][codigosDisciplinasTraducao[i][7]], GRB.EQUAL, 1,
                                 name="disciplinasPeriodoFixo" + str(i))

    # Complementa restrição de pre-requisitos, adicionando restrição que impede que uma disciplina que possua pre-requisito
    # localize-se no primeiro período
    if restricaoPreRequisitos == 'S':
        for i in prerequisitos:
            modelo.addConstr(X[i][0], GRB.EQUAL, 0,
                             name="PrerequisitoPeriodo1ZERO" + str(i))

        # Adiciona restrições quanto aos pré-requisitos(pre-requisito de uma disciplina deve estar em um período anterior ao
        # desta)
        for i in codigosDisciplinasTraducao:
            if i in prerequisitos:
                for pr in prerequisitos[i]:
                    for j in range(1, quantidadePeriodos):
                        # for j in range(0, quantidadePeriodos):# garantiria que a regra de pre-requisitos, mas é necessário
                        # uma regra explícita
                        modelo.addConstr((gurobipy.quicksum(X[pr][ppr] for ppr in range(j)) - X[i][j]),
                                         GRB.GREATER_EQUAL, 0,
                                         name="PrerequisitoSumDe" + str(i) + "=" + str(pr) + str(j))

    # Adiciona restrição de quantidade de períodos em que uma disciplina poderá estar(em apenas um período)
    for i in codigosDisciplinasTraducao:
        modelo.addConstr(gurobipy.quicksum(X[i][j] for j in periodos), GRB.EQUAL, 1,
                         name="QuantidadeDisciplinasPeriodo[%d]" % i)

    for j in periodos:
        # Adiciona restrição de carga mínima de um período
        # Sempre será aplicada. De momento, não faz sentido um período com créditos ZERO
        # A carga mínima definida no currículo deve ser, ao menos, a carga menor entre todas as disciplinas
        modelo.addConstr(gurobipy.quicksum(
            X[i][j] * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao),
            GRB.GREATER_EQUAL,
            cargaMinimaPorPeriodo,
            name="CargaMinima[%d]" % j)

        if restricaoCargaMaxima == 'S':
            # Adiciona restrição de carga máxima de um período(restrição pedagógica)
            modelo.addConstr(gurobipy.quicksum(
                X[i][j] * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao),
                GRB.LESS_EQUAL,
                cargaMaximaPorPeriodo,
                name="CargaMaxima[%d]" % j)

        # Adiciona restrição de carga máxima de um período (a carga máxima de um período deve ser sempre menor ou igual
        # ao valor máximo atual na definição dos valores de C)
        modelo.addConstr(gurobipy.quicksum(
            X[i][j] * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao),
            GRB.LESS_EQUAL,
            C,
            name="CargaMaxima[%d]" % j)

        # Adiciona restrição de quantidade mínima de disciplinas em um período
        # Sempre será aplicada. De momento, não faz sentido um período com nenhuma disciplina.
        modelo.addConstr(gurobipy.quicksum(X[i][j] for i in codigosDisciplinasTraducao),
                         GRB.GREATER_EQUAL,
                         quantidadeMinimaDisciplinasPorPeriodo,
                         name="QuantidadeDisciplinasMinima[%d]" % j)

        if restricaoQuantidadeMaxima == 'S':
            # Adiciona restrição de quantidade máxima de disciplinas em um período
            modelo.addConstr(gurobipy.quicksum(X[i][j] for i in codigosDisciplinasTraducao),
                             GRB.LESS_EQUAL,
                             quantidadeMaximaDisciplinasPorPeriodo,
                             name="QuantidadeDisciplinasMaxima[%d]" % j)

        # Adiciona restrição de soma de índice de retenção máximo a um período (o índice de retenção de um período deve
        # ser sempre menor ou igual ao valor máximo atual na definição dos valores de IR)
        modelo.addConstr(gurobipy.quicksum(
            X[i][j] * codigosDisciplinasTraducao[i][4] for i in codigosDisciplinasTraducao),
            GRB.LESS_EQUAL, IR,
            name="IndiceRetencao[%d]" % j)

        # Adiciona restrições quanto ao posicionamento das disciplinas baseado nas relações
        if criterioDistancia == 'S':
            for chave1, chave2 in relacaoDisciplinas:
                if (relacaoDisciplinas[chave1, chave2] >= PONTUACAOINICIALRELACAO):
                    # Adiciona restrição de posicionamento anterior de disciplina (com grau de relação igual a nível 3) à outra.
                    # Se o grau de relação for maior ou igual a 3, ii tem que estar no mesmo período ou posterior a i
                    modelo.addConstr(
                        (gurobipy.quicksum(X[chave2][jj] * jj for jj in periodos)) - (
                            gurobipy.quicksum(X[chave1][j] * j for j in periodos)),
                        GRB.GREATER_EQUAL, DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO);

                    # Adiciona restrição de distância entre disciplinas que possui grau 9 de relação (apenas pré-requisitos)
                    if (relacaoDisciplinas[chave1, chave2] == PONTUACAORELACAOPREREQUISITO):
                        modelo.addConstr(
                            (gurobipy.quicksum(X[chave2][jj] * jj for jj in periodos)) - (
                                gurobipy.quicksum(X[chave1][j] * j for j in periodos)),
                            GRB.LESS_EQUAL, DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO);

    # Referência para tratar variável nao linear https://support.gurobi.com/hc/en-us/community/posts/360061829412-Why-Objective-must-be-liearn-for-multi-objective-model-in-Gurobi-
    # Neste caso, a variável seria quadrática
    # modelo.addConstr(quicksum(relacaoRelacaoDisciplinas[ii][i]*DISTANCIA_SEMESTRES[jj][j]*X[i][j]*X[ii][jj] for ii in disciplinas for i in disciplinas for jj in periodos for j in periodos) == RD);

    ############################################### EXECUÇÃO DA FUNÇÃO OBJETIVO ############################################

    # modelo.setParam('TimeLimit', 100)
    # Realiza o balanceamento
    modelo.optimize(pararOtimizacao)

    if normalizaBalanceia == 0:
        if modelo.Status != GRB.OPTIMAL:
            return 'semSolucaoViavel'
        if combinacao == 0:
            menorMaiorValor = C.X
        elif combinacao == 1:
            menorMaiorValor = C.X
        elif combinacao == 2:
            menorMaiorValor = IR.X
        elif combinacao == 3:
            menorMaiorValor = IR.X
        elif combinacao == 4:
            menorMaiorValor = RD.getValue()
        else:
            menorMaiorValor = RD.getValue()
        return menorMaiorValor
    else:
        return {'modelo': modelo, 'X': X, 'C': C, 'IR': IR, 'RD': RD}




# tentativa de parar o balanceamento
# def stop_balance(model, where):
#     if where == GRB.Callback.MIPNODE:
#         model.terminate()


def criarGradeSolucao(C, IR, RD, pesoCarga, pesoRetencao, pesoRelacao, combinacao, gradeOriginal, user_id):
    grade = Grade(
        gradeOriginal=gradeOriginal,
        curriculo=gradeOriginal.curriculo,
        nome=gradeOriginal.nome + ' - Balanceamento_' + str(combinacao + 1),
        pc=pesoCarga,
        pir=pesoRetencao,
        prd=pesoRelacao,
        c=round(C.X, 2),
        ir=round(IR.X, 2),
        rd=round(RD.getValue(), 2),
        solucao=True,
        periodosRestantes=gradeOriginal.periodosRestantes,
        periodoCronologico=gradeOriginal.periodoCronologico,
        gradeAluno=gradeOriginal.gradeAluno,
        user_id=user_id
    )
    try:
        grade.save()

    except Exception as e:
        return print(e)

    return grade


def criarGradeDisciplinaSolucao(gradeSolucao, codigosDisciplinasTraducao, periodos, X, periodoCronologico=0):
    for j in periodos:
        for i in codigosDisciplinasTraducao:
            if (round(X[i][j].x) == 1):
                disciplina = Disciplina.objects.filter(id=codigosDisciplinasTraducao[i][8]).first()

                gradeDisciplina = GradeDisciplina(
                    grade=gradeSolucao,
                    disciplina=disciplina,
                    periodoGradeAtual=j + periodoCronologico + 1,  # balanceamento ocorre a partir do período 0
                    creditos=codigosDisciplinasTraducao[i][3],
                    retencao=codigosDisciplinasTraducao[i][4],
                    cicloBasico=codigosDisciplinasTraducao[i][5],
                    periodoFixo=codigosDisciplinasTraducao[i][6],
                    periodo=j + periodoCronologico + 1
                )
                try:
                    gradeDisciplina.save()
                except Exception as e:
                    return print(e)


def criarPrerequisitosGradeDisciplinaSolucao(grade_id, gradeSolucao_id):
    gradesDisciplinas = GradeDisciplina.objects.filter(grade_id=grade_id)
    for gradeDisciplina in gradesDisciplinas:
        for prerequisito in gradeDisciplina.prerequisitos:
            gradeDisciplinaSolucao = GradeDisciplina.objects.filter(grade_id=gradeSolucao_id,
                                                                    disciplina_id=prerequisito.gradeDisciplina.disciplina.id).first()
            gradeDisciplinaRequisitoSolucao = GradeDisciplina.objects.filter(grade_id=gradeSolucao_id,
                                                                             disciplina_id=prerequisito.gradeDisciplinaRequisito.disciplina.id).first()
            requisitoSolucao = Requisito(
                gradeDisciplina=gradeDisciplinaSolucao,
                gradeDisciplinaRequisito=gradeDisciplinaRequisitoSolucao
            )
            try:
                requisitoSolucao.save()
            except Exception as e:
                return print(e)


def criarRelacionamentosGradeDisciplinaSolucao(grade_id, gradeSolucao_id):
    relacionamentos = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__grade_id=grade_id)
    for relacionamento in relacionamentos:
        gradeDisciplinaRelacionamentoAnteriorSolucao = GradeDisciplina.objects.filter(grade_id=gradeSolucao_id,
                                                                                      disciplina_id=relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.id).first()
        gradeDisciplinaRelacionamentoPosteriorSolucao = GradeDisciplina.objects.filter(grade_id=gradeSolucao_id,
                                                                                       disciplina_id=relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.id).first()
        relacionamento = Relacionamento(
            gradeDisciplinaRelacionamentoAnterior=gradeDisciplinaRelacionamentoAnteriorSolucao,
            gradeDisciplinaRelacionamentoPosterior=gradeDisciplinaRelacionamentoPosteriorSolucao,
            relacionamento=relacionamento.relacionamento
        )
        try:
            relacionamento.save()
        except Exception as e:
            return print(e)


# def iniciarProcesso(grade_id):
#      try:
#         grade = Grade.objects.filter(id=grade_id).first()
#         grade.emBalanceamento = True
#         grade.save()
#      except Exception as e:
#         return print(e)

def grade_balance_first(request, grade_id):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):

        global PARAROTIMIZACAO
        PARAROTIMIZACAO = 'NAO'

        grade = Grade.objects.filter(id=grade_id).first()
        if grade.emBalanceamento is True:
            return HttpResponseRedirect(reverse('grade_view', args=[grade_id]) + '?gradeEmBalanceamento')

        criterioCreditos = request.POST['criterioGreditos']
        criterioRetencao = request.POST['criterioRetencao']
        criterioDistancia = request.POST['criterioDistancia']

        restricaoCicloBasico = request.POST['restricaoCicloBasico']
        restricaoPeriodoFixo = request.POST['restricaoPeriodoFixo']
        restricaoCargaMaxima = request.POST['restricaoCargaMaxima']
        restricaoQuantidadeMaxima = request.POST['restricaoQuantidadeMaxima']
        restricaoPreRequisitos = request.POST['restricaoPreRequisitos']

        grade_balance.delay(criterioCreditos, criterioRetencao, criterioDistancia, restricaoCicloBasico, restricaoPeriodoFixo,
                  restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos, grade_id, request.user.id)

        try:
            grade.emBalanceamento = True
            grade.save()
        except Exception as e:
            return print(e)

        return HttpResponseRedirect(reverse('grade_view', args=[grade_id]) + '?balanceando')

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')

@shared_task(name="aluno_grade_balance")
def aluno_grade_balance(criterioCreditos, criterioRetencao, criterioDistancia, restricaoCicloBasico, restricaoPeriodoFixo,
                  restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos, grade_id, user_id):

        gradesDisciplinasCursar = GradeDisciplinaCursar.objects.filter(grade__id=grade_id)
        grade = Grade.objects.filter(id=grade_id).first()

        codigosDisciplinasTraducao = {}
        prerequisitos = {}
        i = 0
        for gradeDisciplinaCursar in gradesDisciplinasCursar:
            codigosDisciplinasTraducao[i] = []
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.gradeDisciplina.disciplina.codigo)
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.gradeDisciplina.disciplina.nome)
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.gradeDisciplina.id)
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.gradeDisciplina.creditos)
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.gradeDisciplina.retencao)
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.gradeDisciplina.cicloBasico)
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.periodoFixo)
            if gradeDisciplinaCursar.periodoFixo is False:
                codigosDisciplinasTraducao[i].append(
                    0)  # usuário informa uma quantidade a partir de 1, mas o sistema trabalha com contagem a partir de zero
            else:
                codigosDisciplinasTraducao[i].append(
                    gradeDisciplinaCursar.periodo - 1)
            codigosDisciplinasTraducao[i].append(gradeDisciplinaCursar.gradeDisciplina.disciplina.id)
            i = i + 1

        for codigoDisciplinaTraducao in codigosDisciplinasTraducao:
            # retorna os requisitos da GradeDisciplina associada ao elemento do dicionário
            requisitos = Requisito.objects.filter(
                gradeDisciplina__id=codigosDisciplinasTraducao[codigoDisciplinaTraducao][2],
                gradeDisciplinaRequisito__id__in=[gradeDisciplinaCursar.gradeDisciplina.id
                                                  for gradeDisciplinaCursar in gradesDisciplinasCursar])
            if requisitos:
                prerequisitos[codigoDisciplinaTraducao] = []
                for requisito in requisitos:
                    for codigoDisciplinaTraducaoRequisito in codigosDisciplinasTraducao:
                        # verifica no dicionário se o id da sua GradeDisciplina é igual ao id da GradeDisciplinaRequisito
                        if codigosDisciplinasTraducao[codigoDisciplinaTraducaoRequisito][
                            2] == requisito.gradeDisciplinaRequisito.id:
                            # adiciona a chave do dicionário ao array que representa os requisitos de outro elemento do dicionário
                            prerequisitos[codigoDisciplinaTraducao].append(codigoDisciplinaTraducaoRequisito)

        relacaoDisciplinas = {}

        for codigoDisciplinaTraducaoAnterior in codigosDisciplinasTraducao:
            for codigoDisciplinaTraducaoPosterior in codigosDisciplinasTraducao:
                relacionamento = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__id=
                                                               codigosDisciplinasTraducao[
                                                                   codigoDisciplinaTraducaoAnterior][2],
                                                               gradeDisciplinaRelacionamentoPosterior__id=
                                                               codigosDisciplinasTraducao[
                                                                   codigoDisciplinaTraducaoPosterior][2]).first()
                if (relacionamento):
                    relacaoDisciplinas[
                        codigoDisciplinaTraducaoAnterior, codigoDisciplinaTraducaoPosterior] = relacionamento.relacionamento

        quantidadePeriodos = grade.periodosRestantes
        periodoCronologico = grade.periodoCronologico - 1

        # considerando que a quantidade mínima de disciplinas é 2 e não existir disciplinas com menos de 2 créditos
        cargaMinimaPorPeriodo = grade.curriculo.cargaMinimaPorPeriodo;
        # regulamento da graduação diz que a carga máxima são 36 créditos
        cargaMaximaPorPeriodo = grade.curriculo.cargaMaximaPorPeriodo;
        quantidadeMinimaDisciplinasPorPeriodo = grade.curriculo.quantidadeMinimaDisciplinasPorPeriodo;
        quantidadeMaximaDisciplinasPorPeriodo = grade.curriculo.quantidadeMaximaDisciplinasPorPeriodo;

        ####################################################### PARÂMETROS #####################################################

        disciplinasNivelamento = []
        for codigoDisciplinaTraducao in codigosDisciplinasTraducao:
            if codigosDisciplinasTraducao[codigoDisciplinaTraducao][5]:
                disciplinasNivelamento.append(codigoDisciplinaTraducao)

        # Lower e upper bounds referentes aos critérios
        minCarga = 0
        maxCarga = 0
        minRetencao = 0
        maxRetencao = 0
        minRelacao = 0
        maxRelacao = 0

        # codigos dos períodos
        periodos = range(quantidadePeriodos);

        # distância entre os semestres (referência do artigo (Uysal, 2014))
        # utilização do maior array encontrado até então (Engenharia de Sistemas (UFMG))

        ################################################## FUNÇÃO OBJETIVO #####################################################

        normalizaBalanceia = 2

        a = range(11)
        pesos = []
        combinacoes = 6

        for nb in range(normalizaBalanceia):

            if nb == 0:
                for combinacao in range(combinacoes):
                    if combinacao == 0 or combinacao == 1:
                        pesoCarga = 1
                        pesoRetencao = 0
                        pesoRelacao = 0
                    elif combinacao == 2 or combinacao == 3:
                        pesoCarga = 0
                        pesoRetencao = 1
                        pesoRelacao = 0
                    else:  # combinacao == 4 or combinacao == 5:
                        pesoCarga = 0
                        pesoRetencao = 0
                        pesoRelacao = 1
                    try:
                        menorMaiorValor = None
                        menorMaiorValor = balancearGrade(codigosDisciplinasTraducao, periodos, cargaMinimaPorPeriodo,
                                                         cargaMaximaPorPeriodo, relacaoDisciplinas,
                                                         DISTANCIA_SEMESTRES, pesoCarga, minCarga, maxCarga,
                                                         pesoRetencao,
                                                         minRetencao,
                                                         maxRetencao, pesoRelacao,
                                                         maxRelacao, minRelacao, disciplinasNivelamento, grade,
                                                         prerequisitos,
                                                         quantidadePeriodos, quantidadeMinimaDisciplinasPorPeriodo,
                                                         quantidadeMaximaDisciplinasPorPeriodo, PONTUACAOINICIALRELACAO,
                                                         DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO,
                                                         PONTUACAORELACAOPREREQUISITO,
                                                         criterioDistancia,
                                                         restricaoCicloBasico, restricaoPeriodoFixo,
                                                         restricaoCargaMaxima,
                                                         restricaoQuantidadeMaxima, restricaoPreRequisitos,
                                                         DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO, nb,
                                                         combinacao,

                                                         periodoCronologico)

                        if menorMaiorValor == 'semSolucaoViavel':
                            grade.problemaUltimoBalanceamento = True
                            grade.emBalanceamento = False
                            grade.save()
                            return 'FAIL'

                    except gurobipy.GurobiError as e:
                        print('Error code ' + str(e.errno) + ": " + str(e))

                    except AttributeError:
                        print('Encountered an attribute error')

                    if combinacao == 0:
                        minCarga = menorMaiorValor
                    elif combinacao == 1:
                        maxCarga = menorMaiorValor
                    elif combinacao == 2:
                        minRetencao = menorMaiorValor
                    elif combinacao == 3:
                        maxRetencao = menorMaiorValor
                    elif combinacao == 4:
                        minRelacao = menorMaiorValor
                    else:
                        maxRelacao = menorMaiorValor

            else:
                resultados = list()
                resultadosPareto = list()
                module_dir = os.path.dirname(__file__)  # get current directory
                combinacoes = 0

                if criterioCreditos == 'N':
                    pesoCarga = 0

                if criterioRetencao == 'N':
                    pesoRetencao = 0

                if criterioDistancia == 'N':
                    pesoRelacao = 0

                if criterioCreditos == 'N' and criterioRetencao == 'N':
                    for k in a:
                        if (pesoCarga + pesoRetencao + k == (len(a) - 1)):
                            pesos.append([])
                            pesos[combinacoes].append(pesoCarga / (len(a) - 1))
                            pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
                            pesos[combinacoes].append(k / (len(a) - 1))
                            combinacoes += 1

                elif criterioCreditos == 'N' and criterioDistancia == 'N':
                    for j in a:
                        if (pesoCarga + j + pesoRelacao == (len(a) - 1)):
                            pesos.append([])
                            pesos[combinacoes].append(pesoCarga / (len(a) - 1))
                            pesos[combinacoes].append(j / (len(a) - 1))
                            pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
                            combinacoes += 1

                elif criterioCreditos == 'N':
                    for j in a:
                        for k in a:
                            if (pesoCarga + j + k == (len(a) - 1)):
                                pesos.append([])
                                pesos[combinacoes].append(pesoCarga / (len(a) - 1))
                                pesos[combinacoes].append(j / (len(a) - 1))
                                pesos[combinacoes].append(k / (len(a) - 1))
                                combinacoes += 1

                elif criterioRetencao == 'N' and criterioDistancia == 'N':
                    for i in a:
                        if (i + pesoRetencao + pesoRelacao == (len(a) - 1)):
                            pesos.append([])
                            pesos[combinacoes].append(i / (len(a) - 1))
                            pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
                            pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
                            combinacoes += 1

                elif criterioRetencao == 'N':
                    for i in a:
                        for k in a:
                            if (i + pesoRetencao + k == (len(a) - 1)):
                                pesos.append([])
                                pesos[combinacoes].append(i / (len(a) - 1))
                                pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
                                pesos[combinacoes].append(k / (len(a) - 1))
                                combinacoes += 1

                elif criterioDistancia == 'N':
                    for i in a:
                        for j in a:
                            if (i + j + pesoRelacao == (len(a) - 1)):
                                pesos.append([])
                                pesos[combinacoes].append(i / (len(a) - 1))
                                pesos[combinacoes].append(j / (len(a) - 1))
                                pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
                                combinacoes += 1

                else:
                    for i in a:
                        for j in a:
                            for k in a:
                                if (i + j + k == (len(a) - 1)):
                                    pesos.append([])
                                    pesos[combinacoes].append(i / (len(a) - 1))
                                    pesos[combinacoes].append(j / (len(a) - 1))
                                    pesos[combinacoes].append(k / (len(a) - 1))
                                    combinacoes += 1

                for combinacao in range(combinacoes):
                    pesoCarga = pesos[combinacao][0]
                    pesoRetencao = pesos[combinacao][1]
                    pesoRelacao = pesos[combinacao][2]

                    try:
                        dados = balancearGrade(codigosDisciplinasTraducao, periodos, cargaMinimaPorPeriodo,
                                               cargaMaximaPorPeriodo, relacaoDisciplinas,
                                               DISTANCIA_SEMESTRES, pesoCarga, minCarga, maxCarga, pesoRetencao,
                                               minRetencao,
                                               maxRetencao, pesoRelacao,
                                               maxRelacao, minRelacao, disciplinasNivelamento, grade, prerequisitos,
                                               quantidadePeriodos, quantidadeMinimaDisciplinasPorPeriodo,
                                               quantidadeMaximaDisciplinasPorPeriodo, PONTUACAOINICIALRELACAO,
                                               DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO,
                                               PONTUACAORELACAOPREREQUISITO,
                                               criterioDistancia,
                                               restricaoCicloBasico, restricaoPeriodoFixo,
                                               restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos,
                                               DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO, nb, combinacao,
                                               periodoCronologico)
                    except gurobipy.GurobiError as e:
                        print('Error code ' + str(e.errno) + ": " + str(e))

                    except AttributeError:
                        print('Encountered an attribute error')

                    X = dados['X']
                    C = dados['C']
                    IR = dados['IR']
                    RD = dados['RD']

                    try:
                        gradeSolucao = criarGradeSolucao(C, IR, RD, pesoCarga, pesoRetencao, pesoRelacao, combinacao,
                                                         grade,
                                                         user_id)
                        criarGradeDisciplinaSolucao(gradeSolucao, codigosDisciplinasTraducao, periodos, X,
                                                    periodoCronologico)
                        # criarPrerequisitosGradeDisciplinaSolucao(grade_id, gradeSolucao.id)
                        # criarRelacionamentosGradeDisciplinaSolucao(grade_id, gradeSolucao.id)

                    except Exception as e:
                        return print(e)

                    # impressão dos resultados
                #     print("\n")
                #     print("Balanceamento: " + str(combinacao + 1))
                #     print("\n")
                #     resultados.append("Balanceamento: " + str(combinacao + 1))
                #     resultados.append("\n")
                #     resultados.append("\n")
                #     imprimirPesos(resultados, pesoCarga, pesoRetencao, pesoRelacao)
                #     print("\n")
                #     imprimirValoresVariaveis(resultados, C, IR, RD)
                #     print("\n")
                #     imprimirSomatorioCargasPorPeriodo(periodos, codigosDisciplinasTraducao, resultados, X,
                #                                       periodoCronologico)
                #     print("\n")
                #     imprimirSomatorioIndicesRetencao(periodos, codigosDisciplinasTraducao, resultados, X,
                #                                      periodoCronologico)
                #     print("\n")
                #     imprimirGrade(periodos, codigosDisciplinasTraducao,
                #                   resultados, X, periodoCronologico)
                #     imprimirValoresParaFronteiraPareto(resultadosPareto, pesoCarga, pesoRetencao, pesoRelacao, C,
                #                                        IR,
                #                                        RD)
                #
                #     print('Valor função objetivo: %g' % modelo.objVal)
                #     resultados.append('Valor função objetivo: %g' % modelo.objVal)
                #
                #     module_dir = os.path.dirname(__file__)  # get current directory
                #     data_e_hora_em_texto = str(datetime.now())
                #     data_e_hora_em_texto = data_e_hora_em_texto.replace(":", "_")
                #     data_e_hora_em_texto = data_e_hora_em_texto.replace(" ", "_")
                #     arquivo = open(module_dir + "/resultados/iteracao_" + data_e_hora_em_texto + ".txt", "a",
                #                    encoding='utf-8')
                #     arquivo.writelines(resultados)
                #     resultados.clear()
                #     arquivo.close()
                #
                # data_e_hora_em_texto_pareto = str(datetime.now())
                # data_e_hora_em_texto_pareto = data_e_hora_em_texto_pareto.replace(":", "_")
                # data_e_hora_em_texto_pareto = data_e_hora_em_texto_pareto.replace(" ", "_")
                # arquivo_pareto = open(
                #     module_dir + "/resultados/dadosPareto_" + data_e_hora_em_texto_pareto + ".txt",
                #     "a",
                #     encoding='utf-8')
                # arquivo_pareto.writelines(resultadosPareto)
                # arquivo_pareto.close()

        gradesBalanceadasSemPareto = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id)

        gradesExclusao = {}
        # naoExcluir = {}
        contagemSemParetoExclusao = 0
        # contagemNaoExcluir = 0
        for gradeSemParetoA in gradesBalanceadasSemPareto:
            for gradeSemParetoB in gradesBalanceadasSemPareto:
                if (
                        gradeSemParetoA.c <= gradeSemParetoB.c and gradeSemParetoA.ir <= gradeSemParetoB.ir and gradeSemParetoA.rd < gradeSemParetoB.rd) or \
                        (
                                gradeSemParetoA.c <= gradeSemParetoB.c and gradeSemParetoA.rd <= gradeSemParetoB.rd and gradeSemParetoA.ir < gradeSemParetoB.ir) or \
                        (
                                gradeSemParetoA.ir <= gradeSemParetoB.ir and gradeSemParetoA.rd <= gradeSemParetoB.rd and gradeSemParetoA.c < gradeSemParetoB.c):

                    if not gradeSemParetoB.id in gradesExclusao.values():
                        gradesExclusao[contagemSemParetoExclusao] = gradeSemParetoB.id
                        contagemSemParetoExclusao = contagemSemParetoExclusao + 1

                # print('EXCLUIDORA '+gradeSemParetoA.nome)
                # print('EXCLUIDA ' + gradeSemParetoB.nome)
                # if not gradeSemParetoB.id in gradesExclusao.values():
                #     gradesExclusao[i] = gradeSemParetoB.id
                #     i = i + 1

        for idx in range(len(gradesExclusao)):
            gradeForaDeParetoExcluir = Grade.objects.filter(id=gradesExclusao[idx]).first()
            gradeForaDeParetoExcluir.delete()

        gradesBalanceadasExcluir = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id)

        gradesIguaisExclusao = {}
        naoExcluir = {}
        contagemGradesIguaisExclusao = 0
        contagemNaoExcluir = 0
        for gradeBalanceadaExcluirA in gradesBalanceadasExcluir:
            for gradeBalanceadaExcluirB in gradesBalanceadasExcluir:
                if (
                        gradeBalanceadaExcluirA.c == gradeBalanceadaExcluirB.c and gradeBalanceadaExcluirA.ir == gradeBalanceadaExcluirB.ir
                        and gradeBalanceadaExcluirA.rd == gradeBalanceadaExcluirB.rd and
                        gradeBalanceadaExcluirA.id != gradeBalanceadaExcluirB.id):
                    if not gradeBalanceadaExcluirB.id in naoExcluir.values():
                        if not gradeBalanceadaExcluirB.id in gradesIguaisExclusao.values():
                            gradesIguaisExclusao[contagemGradesIguaisExclusao] = gradeBalanceadaExcluirB.id
                            contagemGradesIguaisExclusao = contagemGradesIguaisExclusao + 1
                    if not gradeBalanceadaExcluirA.id in naoExcluir.values() and not gradeBalanceadaExcluirA.id in gradesIguaisExclusao.values():
                        naoExcluir[contagemNaoExcluir] = gradeBalanceadaExcluirA.id
                        contagemNaoExcluir = contagemNaoExcluir + 1

        for idx in range(len(gradesIguaisExclusao)):
            gradeIgualExcluir = Grade.objects.filter(id=gradesIguaisExclusao[idx]).first()

            try:
                gradeIgualExcluir.delete()
            except Exception as e:
                return print(e)
            # if gradexc != None:
            #     print('EXCLUIR ' + gradexc.nome)

        # for idx in range(len(naoExcluir)):
        #     gradexc = Grade.objects.filter(id=naoExcluir[idx]).first()
        #     if gradexc != None:
        #         print ('NAO EXCLUIR '+ gradexc.nome)
        gradesPareto = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id).order_by('id').all()
        solucao = 1
        for gradePareto in gradesPareto:
            gradePareto.nome = grade.nome + ' - ' + 'Balanceamento_' + str(solucao)
            try:
                gradePareto.save()
            except Exception as e:
                return print(e)
            solucao = solucao + 1

        grade.balanceada = True
        grade.problemaUltimoBalanceamento = False
        grade.emBalanceamento = False
        try:
            grade.save()
        except Exception as e:
            return print(e)

        # response = {
        #     'OK': 'OK'
        # }
        # return JsonResponse(response, status=200)
        # return HttpResponseRedirect(reverse('aluno_gradesbalanceadas_index') + '?successBalance')
        return 'OK'

def aluno_grade_balance_first(request, grade_id):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):

        global PARAROTIMIZACAO
        PARAROTIMIZACAO = 'NAO'

        grade = Grade.objects.filter(id=grade_id).first()
        if grade.emBalanceamento is True:
            return HttpResponseRedirect(reverse('aluno_grade_view', args=[grade_id]) + '?gradeEmBalanceamento')

        criterioCreditos = request.POST['criterioGreditos']
        criterioRetencao = request.POST['criterioRetencao']
        criterioDistancia = request.POST['criterioDistancia']

        restricaoCicloBasico = request.POST['restricaoCicloBasico']
        restricaoPeriodoFixo = request.POST['restricaoPeriodoFixo']
        restricaoCargaMaxima = request.POST['restricaoCargaMaxima']
        restricaoQuantidadeMaxima = request.POST['restricaoQuantidadeMaxima']
        restricaoPreRequisitos = request.POST['restricaoPreRequisitos']

        aluno_grade_balance.delay(criterioCreditos, criterioRetencao, criterioDistancia, restricaoCicloBasico, restricaoPeriodoFixo,
                  restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos, grade_id, request.user.id)

        try:
            grade.emBalanceamento = True
            grade.save()
        except Exception as e:
            return print(e)

        return HttpResponseRedirect(reverse('aluno_gradesbalanceadas_index', args=[grade_id]))

    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


# @shared_task(name="grade_balance")
# def grade_balance(criterioCreditos, criterioRetencao, criterioDistancia, restricaoCicloBasico, restricaoPeriodoFixo,
#                   restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos, grade_id, user_id):
# 
#         # parametros
#         gradesDisciplinas = GradeDisciplina.objects.filter(grade__id=grade_id)
#         grade = Grade.objects.filter(id=grade_id).first()
# 
#         # distanciaDisciplinasPrerequisito = request.POST['distanciaDisciplinasPrerequisito']
#         # pontuacaoInicialRelacao = request.POST['pontuacaoInicialRelacao']
# 
#         if grade.emBalanceamento is True:
#             return HttpResponseRedirect(reverse('grade_view', args=[grade_id]) + '?gradeEmBalanceamento')
# 
#         grade.emBalanceamento = True
#         grade.save()
# 
#         codigosDisciplinasTraducao = {}
#         prerequisitos = {}
#         i = 0
#         for gradeDisciplina in gradesDisciplinas:
#             codigosDisciplinasTraducao[i] = []
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.disciplina.codigo)
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.disciplina.nome)
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.id)
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.creditos)
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.retencao)
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.cicloBasico)
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.periodoFixo)
#             if gradeDisciplina.periodoFixo is False:
#                 codigosDisciplinasTraducao[i].append(
#                     0)  # usuário informa uma quantidade a partir de 1, mas o sistema trabalha com contagem a partir de zero
#             else:
#                 codigosDisciplinasTraducao[i].append(
#                     gradeDisciplina.periodo - 1)  # usuário informa uma quantidade a partir de 1, mas o sistema trabalha com contagem a partir de zero
# 
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.disciplina.id)
#             codigosDisciplinasTraducao[i].append(gradeDisciplina.periodoGradeAtual)
#             i = i + 1
# 
#         for codigoDisciplinaTraducao in codigosDisciplinasTraducao:
#             # retorna os requisitos da GradeDisciplina associada ao elemento do dicionário
#             requisitos = Requisito.objects.filter(
#                 gradeDisciplina__id=codigosDisciplinasTraducao[codigoDisciplinaTraducao][2])
#             if requisitos:
#                 prerequisitos[codigoDisciplinaTraducao] = []
#                 for requisito in requisitos:
#                     for codigoDisciplinaTraducaoRequisito in codigosDisciplinasTraducao:
#                         # verifica no dicionário se o id da sua GradeDisciplina é igual ao id da GradeDisciplinaRequisito
#                         if codigosDisciplinasTraducao[codigoDisciplinaTraducaoRequisito][
#                             2] == requisito.gradeDisciplinaRequisito.id:
#                             # adiciona a chave do dicionário ao array que representa os requisitos de outro elemento do dicionário
#                             prerequisitos[codigoDisciplinaTraducao].append(codigoDisciplinaTraducaoRequisito)
# 
#         relacaoDisciplinas = {}
# 
#         for codigoDisciplinaTraducaoAnterior in codigosDisciplinasTraducao:
#             for codigoDisciplinaTraducaoPosterior in codigosDisciplinasTraducao:
#                 relacionamento = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__id=
#                                                                codigosDisciplinasTraducao[
#                                                                    codigoDisciplinaTraducaoAnterior][2],
#                                                                gradeDisciplinaRelacionamentoPosterior__id=
#                                                                codigosDisciplinasTraducao[
#                                                                    codigoDisciplinaTraducaoPosterior][2]).first()
#                 if (relacionamento):
#                     relacaoDisciplinas[
#                         codigoDisciplinaTraducaoAnterior, codigoDisciplinaTraducaoPosterior] = relacionamento.relacionamento
# 
#         # relacaoDisciplinas = []
#         #
#         # for codigoDisciplinaTraducaoAnterior in codigosDisciplinasTraducao:
#         #     relacaoDisciplinas.append([])
#         #     for codigoDisciplinaTraducaoPosterior in codigosDisciplinasTraducao:
#         #         relacionamento = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__id=
#         #                                                        codigosDisciplinasTraducao[
#         #                                                            codigoDisciplinaTraducaoAnterior][2],
#         #                                                        gradeDisciplinaRelacionamentoPosterior__id=
#         #                                                        codigosDisciplinasTraducao[
#         #                                                            codigoDisciplinaTraducaoPosterior][2]).first()
#         #         if (relacionamento):
#         #             relacaoDisciplinas[codigoDisciplinaTraducaoAnterior].append(relacionamento.relacionamento)
#         #         else:
#         #             relacaoDisciplinas[codigoDisciplinaTraducaoAnterior].append(0)
# 
#         quantidadePeriodos = grade.curriculo.quantidadePeriodos;
#         # considerando que a quantidade mínima de disciplinas é 2 e não existir disciplinas com menos de 2 créditos
#         cargaMinimaPorPeriodo = grade.curriculo.cargaMinimaPorPeriodo;
#         # regulamento da graduação diz que a carga máxima são 36 créditos
#         cargaMaximaPorPeriodo = grade.curriculo.cargaMaximaPorPeriodo;
#         quantidadeMinimaDisciplinasPorPeriodo = grade.curriculo.quantidadeMinimaDisciplinasPorPeriodo;
#         quantidadeMaximaDisciplinasPorPeriodo = grade.curriculo.quantidadeMaximaDisciplinasPorPeriodo;
# 
#         ####################################################### PARÂMETROS #####################################################
# 
#         disciplinasNivelamento = []
#         for codigoDisciplinaTraducao in codigosDisciplinasTraducao:
#             if codigosDisciplinasTraducao[codigoDisciplinaTraducao][5]:
#                 disciplinasNivelamento.append(codigoDisciplinaTraducao)
# 
#         # números que indicam os 'graus' crescentes de relações entre as disciplinas
# 
#         # PONTUACAORELACAOPREREQUISITO = 9;  # apenas para pré-requisitos
#         # PONTUACAOINICIALRELACAO = pontuacaoInicialRelacao;
# 
#         # Lower e upper bounds referentes aos critérios
#         minCarga = 0
#         maxCarga = 0
#         minRetencao = 0
#         maxRetencao = 0
#         minRelacao = 0
#         maxRelacao = 0
# 
#         # parâmetros que controlam as distâncias entre disciplinas de acordo com o grau de relação entre estas
#         # DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO = 0;
#         # DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO = distanciaDisciplinasPrerequisito;
#         # diferencaMaximaPeriodosRelacaoMaiorNivel4 = 8;
# 
#         # codigos dos períodos
#         periodos = range(quantidadePeriodos);
# 
#         # distância entre os semestres (referência do artigo (Uysal, 2014))
#         # utilização do maior array encontrado até então (Engenharia de Sistemas (UFMG))
# 
#         ################################################## FUNÇÃO OBJETIVO #####################################################
# 
#         normalizaBalanceia = 2
#         # pesos para os termos da função objetivo
# 
#         a = range(11)
#         pesos = []
#         combinacoes = 6
# 
#         for nb in range(normalizaBalanceia):
# 
#             if nb == 0:
#                 for combinacao in range(combinacoes):
#                     if combinacao == 0 or combinacao == 1:
#                         pesoCarga = 1
#                         pesoRetencao = 0
#                         pesoRelacao = 0
#                     elif combinacao == 2 or combinacao == 3:
#                         pesoCarga = 0
#                         pesoRetencao = 1
#                         pesoRelacao = 0
#                     else:  # combinacao == 4 or combinacao == 5:
#                         pesoCarga = 0
#                         pesoRetencao = 0
#                         pesoRelacao = 1
# 
#                     try:
#                         menorMaiorValor = balancearGrade(codigosDisciplinasTraducao, periodos, cargaMinimaPorPeriodo,
#                                                          cargaMaximaPorPeriodo, relacaoDisciplinas,
#                                                          DISTANCIA_SEMESTRES, pesoCarga, minCarga, maxCarga,
#                                                          pesoRetencao,
#                                                          minRetencao,
#                                                          maxRetencao, pesoRelacao,
#                                                          maxRelacao, minRelacao, disciplinasNivelamento, grade,
#                                                          prerequisitos,
#                                                          quantidadePeriodos, quantidadeMinimaDisciplinasPorPeriodo,
#                                                          quantidadeMaximaDisciplinasPorPeriodo, PONTUACAOINICIALRELACAO,
#                                                          DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO,
#                                                          PONTUACAORELACAOPREREQUISITO,
#                                                          criterioDistancia,
#                                                          restricaoCicloBasico, restricaoPeriodoFixo,
#                                                          restricaoCargaMaxima, restricaoQuantidadeMaxima,
#                                                          restricaoPreRequisitos,
#                                                          DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO, nb,
#                                                          combinacao)
# 
#                     except gurobipy.GurobiError as e:
#                         print('Error code ' + str(e.errno) + ": " + str(e))
# 
#                     except AttributeError:
#                         print('Encountered an attribute error')
# 
#                     if combinacao == 0:
#                         minCarga = menorMaiorValor
#                     elif combinacao == 1:
#                         maxCarga = menorMaiorValor
#                     elif combinacao == 2:
#                         minRetencao = menorMaiorValor
#                     elif combinacao == 3:
#                         maxRetencao = menorMaiorValor
#                     elif combinacao == 4:
#                         minRelacao = menorMaiorValor
#                     else:
#                         maxRelacao = menorMaiorValor
# 
#             else:
#                 resultados = list()
#                 resultadosPareto = list()
#                 module_dir = os.path.dirname(__file__)  # get current directory
#                 combinacoes = 0
# 
#                 if criterioCreditos == 'N':
#                     pesoCarga = 0
# 
#                 if criterioRetencao == 'N':
#                     pesoRetencao = 0
# 
#                 if criterioDistancia == 'N':
#                     pesoRelacao = 0
# 
#                 if criterioCreditos == 'N' and criterioRetencao == 'N':
#                     for k in a:
#                         if (pesoCarga + pesoRetencao + k == (len(a) - 1)):
#                             pesos.append([])
#                             pesos[combinacoes].append(pesoCarga / (len(a) - 1))
#                             pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
#                             pesos[combinacoes].append(k / (len(a) - 1))
#                             combinacoes += 1
# 
#                 elif criterioCreditos == 'N' and criterioDistancia == 'N':
#                     for j in a:
#                         if (pesoCarga + j + pesoRelacao == (len(a) - 1)):
#                             pesos.append([])
#                             pesos[combinacoes].append(pesoCarga / (len(a) - 1))
#                             pesos[combinacoes].append(j / (len(a) - 1))
#                             pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
#                             combinacoes += 1
# 
#                 elif criterioCreditos == 'N':
#                     for j in a:
#                         for k in a:
#                             if (pesoCarga + j + k == (len(a) - 1)):
#                                 pesos.append([])
#                                 pesos[combinacoes].append(pesoCarga / (len(a) - 1))
#                                 pesos[combinacoes].append(j / (len(a) - 1))
#                                 pesos[combinacoes].append(k / (len(a) - 1))
#                                 combinacoes += 1
# 
#                 elif criterioRetencao == 'N' and criterioDistancia == 'N':
#                     for i in a:
#                         if (i + pesoRetencao + pesoRelacao == (len(a) - 1)):
#                             pesos.append([])
#                             pesos[combinacoes].append(i / (len(a) - 1))
#                             pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
#                             pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
#                             combinacoes += 1
# 
#                 elif criterioRetencao == 'N':
#                     for i in a:
#                         for k in a:
#                             if (i + pesoRetencao + k == (len(a) - 1)):
#                                 pesos.append([])
#                                 pesos[combinacoes].append(i / (len(a) - 1))
#                                 pesos[combinacoes].append(pesoRetencao / (len(a) - 1))
#                                 pesos[combinacoes].append(k / (len(a) - 1))
#                                 combinacoes += 1
# 
#                 elif criterioDistancia == 'N':
#                     for i in a:
#                         for j in a:
#                             if (i + j + pesoRelacao == (len(a) - 1)):
#                                 pesos.append([])
#                                 pesos[combinacoes].append(i / (len(a) - 1))
#                                 pesos[combinacoes].append(j / (len(a) - 1))
#                                 pesos[combinacoes].append(pesoRelacao / (len(a) - 1))
#                                 combinacoes += 1
# 
#                 else:
#                     for i in a:
#                         for j in a:
#                             for k in a:
#                                 if (i + j + k == (len(a) - 1)):
#                                     pesos.append([])
#                                     pesos[combinacoes].append(i / (len(a) - 1))
#                                     pesos[combinacoes].append(j / (len(a) - 1))
#                                     pesos[combinacoes].append(k / (len(a) - 1))
#                                     combinacoes += 1
# 
#                 print(combinacoes)
#                 for combinacao in range(combinacoes):
#                     pesoCarga = pesos[combinacao][0]
#                     pesoRetencao = pesos[combinacao][1]
#                     pesoRelacao = pesos[combinacao][2]
# 
#                     try:
#                         dados = balancearGrade(codigosDisciplinasTraducao, periodos, cargaMinimaPorPeriodo,
#                                                cargaMaximaPorPeriodo, relacaoDisciplinas,
#                                                DISTANCIA_SEMESTRES, pesoCarga, minCarga, maxCarga, pesoRetencao,
#                                                minRetencao,
#                                                maxRetencao, pesoRelacao,
#                                                maxRelacao, minRelacao, disciplinasNivelamento, grade, prerequisitos,
#                                                quantidadePeriodos, quantidadeMinimaDisciplinasPorPeriodo,
#                                                quantidadeMaximaDisciplinasPorPeriodo, PONTUACAOINICIALRELACAO,
#                                                DIFERENCAMINIMAPERIODOSPONTUACAOINICIALRELACAO,
#                                                PONTUACAORELACAOPREREQUISITO,
#                                                criterioDistancia,
#                                                restricaoCicloBasico, restricaoPeriodoFixo,
#                                                restricaoCargaMaxima, restricaoQuantidadeMaxima, restricaoPreRequisitos,
#                                                DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO, nb, combinacao)
#                     except gurobipy.GurobiError as e:
#                         print('Error code ' + str(e.errno) + ": " + str(e))
# 
#                     except AttributeError:
#                         print('Encountered an attribute error')
# 
#                     X = dados['X']
#                     C = dados['C']
#                     IR = dados['IR']
#                     RD = dados['RD']
# 
#                     try:
# 
#                         gradeSolucao = criarGradeSolucao(C, IR, RD, pesoCarga, pesoRetencao, pesoRelacao, combinacao,
#                                                          grade,
#                                                          user_id)
#                         criarGradeDisciplinaSolucao(gradeSolucao, codigosDisciplinasTraducao, periodos, X)
#                         # criarPrerequisitosGradeDisciplinaSolucao(grade_id, gradeSolucao.id)
#                         # criarRelacionamentosGradeDisciplinaSolucao(grade_id, gradeSolucao.id)
# 
#                     except Exception as e:
#                         return print(e)
# 
#                 #     # impressão dos resultados
#                 #     print("\n")
#                 #     print("Solução: " + str(combinacao))
#                 #     print("\n")
#                 #     resultados.append("Solução: " + str(combinacao))
#                 #     resultados.append("\n")
#                 #     resultados.append("\n")
#                 #     imprimirPesos(resultados, pesoCarga, pesoRetencao, pesoRelacao)
#                 #     print("\n")
#                 #     imprimirValoresVariaveis(resultados, C, IR, RD)
#                 #     print("\n")
#                 #     imprimirSomatorioCargasPorPeriodo(periodos, codigosDisciplinasTraducao, resultados, X)
#                 #     print("\n")
#                 #     imprimirSomatorioIndicesRetencao(periodos, codigosDisciplinasTraducao, resultados, X)
#                 #     print("\n")
#                 #     imprimirGrade(periodos, codigosDisciplinasTraducao,
#                 #                   resultados, X)
#                 #     imprimirValoresParaFronteiraPareto(resultadosPareto, pesoCarga, pesoRetencao, pesoRelacao, C,
#                 #                                        IR,
#                 #                                        RD)
#                 #
#                 #     print('Valor função objetivo: %g' % modelo.objVal)
#                 #     resultados.append('Valor função objetivo: %g' % modelo.objVal)
#                 #
#                 #     module_dir = os.path.dirname(__file__)  # get current directory
#                 #     data_e_hora_em_texto = str(datetime.now())
#                 #     data_e_hora_em_texto = data_e_hora_em_texto.replace(":", "_")
#                 #     data_e_hora_em_texto = data_e_hora_em_texto.replace(" ", "_")
#                 #     arquivo = open(module_dir + "/resultados/iteracao_" + data_e_hora_em_texto + ".txt", "a",
#                 #                    encoding='utf-8')
#                 #     arquivo.writelines(resultados)
#                 #     resultados.clear()
#                 #     arquivo.close()
#                 #
#                 # data_e_hora_em_texto_pareto = str(datetime.now())
#                 # data_e_hora_em_texto_pareto = data_e_hora_em_texto_pareto.replace(":", "_")
#                 # data_e_hora_em_texto_pareto = data_e_hora_em_texto_pareto.replace(" ", "_")
#                 # arquivo_pareto = open(
#                 #     module_dir + "/resultados/dadosPareto_" + data_e_hora_em_texto_pareto + ".txt",
#                 #     "a",
#                 #     encoding='utf-8')
#                 # arquivo_pareto.writelines(resultadosPareto)
#                 # arquivo_pareto.close()
# 
#         gradesBalanceadasSemPareto = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id)
# 
#         gradesExclusao = {}
#         # naoExcluir = {}
#         contagemSemParetoExclusao = 0
#         # contagemNaoExcluir = 0
#         for gradeSemParetoA in gradesBalanceadasSemPareto:
#             for gradeSemParetoB in gradesBalanceadasSemPareto:
#                 if (
#                         gradeSemParetoA.c <= gradeSemParetoB.c and gradeSemParetoA.ir <= gradeSemParetoB.ir and gradeSemParetoA.rd < gradeSemParetoB.rd) or \
#                         (
#                                 gradeSemParetoA.c <= gradeSemParetoB.c and gradeSemParetoA.rd <= gradeSemParetoB.rd and gradeSemParetoA.ir < gradeSemParetoB.ir) or \
#                         (
#                                 gradeSemParetoA.ir <= gradeSemParetoB.ir and gradeSemParetoA.rd <= gradeSemParetoB.rd and gradeSemParetoA.c < gradeSemParetoB.c):
# 
#                     if not gradeSemParetoB.id in gradesExclusao.values():
#                         gradesExclusao[contagemSemParetoExclusao] = gradeSemParetoB.id
#                         contagemSemParetoExclusao = contagemSemParetoExclusao + 1
# 
#                 # print('EXCLUIDORA '+gradeSemParetoA.nome)
#                 # print('EXCLUIDA ' + gradeSemParetoB.nome)
#                 # if not gradeSemParetoB.id in gradesExclusao.values():
#                 #     gradesExclusao[i] = gradeSemParetoB.id
#                 #     i = i + 1
# 
#         for idx in range(len(gradesExclusao)):
#             gradeForaDeParetoExcluir = Grade.objects.filter(id=gradesExclusao[idx]).first()
#             gradeForaDeParetoExcluir.delete()
# 
#         gradesBalanceadasExcluir = Grade.objects.filter(solucao=True, gradeOriginal_id=grade.id)
# 
#         gradesIguaisExclusao = {}
#         naoExcluir = {}
#         contagemGradesIguaisExclusao = 0
#         contagemNaoExcluir = 0
#         for gradeBalanceadaExcluirA in gradesBalanceadasExcluir:
#             for gradeBalanceadaExcluirB in gradesBalanceadasExcluir:
#                 if (
#                         gradeBalanceadaExcluirA.c == gradeBalanceadaExcluirB.c and gradeBalanceadaExcluirA.ir == gradeBalanceadaExcluirB.ir
#                         and gradeBalanceadaExcluirA.rd == gradeBalanceadaExcluirB.rd and
#                         gradeBalanceadaExcluirA.id != gradeBalanceadaExcluirB.id):
#                     if not gradeBalanceadaExcluirB.id in naoExcluir.values():
#                         if not gradeBalanceadaExcluirB.id in gradesIguaisExclusao.values():
#                             gradesIguaisExclusao[contagemGradesIguaisExclusao] = gradeBalanceadaExcluirB.id
#                             contagemGradesIguaisExclusao = contagemGradesIguaisExclusao + 1
#                     if not gradeBalanceadaExcluirA.id in naoExcluir.values() and not gradeBalanceadaExcluirA.id in gradesIguaisExclusao.values():
#                         naoExcluir[contagemNaoExcluir] = gradeBalanceadaExcluirA.id
#                         contagemNaoExcluir = contagemNaoExcluir + 1
# 
#         print(gradesIguaisExclusao)
#         print(naoExcluir)
#         for idx in range(len(gradesIguaisExclusao)):
#             gradeIgualExcluir = Grade.objects.filter(id=gradesIguaisExclusao[idx]).first()
#             gradeIgualExcluir.delete()
#             # if gradexc != None:
#             #     print('EXCLUIR ' + gradexc.nome)
# 
#         # for idx in range(len(naoExcluir)):
#         #     gradexc = Grade.objects.filter(id=naoExcluir[idx]).first()
#         #     if gradexc != None:
#         #         print ('NAO EXCLUIR '+ gradexc.nome)
#         grade.balanceada = True
#         grade.emBalanceamento = False
#         try:
#             grade.save()
#         except Exception as e:
#             return print(e)
#         return HttpResponseRedirect(reverse('grade_view', args=[grade_id]) + '?successBalance')

def grade_atualiza_variavel_parar_otimizacao(request, grade_id):

    global PARAROTIMIZACAO
    PARAROTIMIZACAO = 'SIM'

    gradeBalanceamentoInterrompido = Grade.objects.filter(id=grade_id).first()

    try:
        gradeBalanceamentoInterrompido.balanceamentoInterrompido = True
        gradeBalanceamentoInterrompido.emBalanceamento = False
        gradeBalanceamentoInterrompido.save()

    except Exception as e:
        return print(e)

    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return HttpResponseRedirect(reverse('grade_view', args=[grade_id]) + '?stoppedBalance')
    else:
        return HttpResponseRedirect(reverse('aluno_grade_view', args=[grade_id]) + '?stoppedBalance')

def pararOtimizacao(model, where):
    if PARAROTIMIZACAO == 'SIM':
        model.terminate()


def grade_relatorio(request, grade_id):
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        """Generate pdf."""
        # Model data
        grade = Grade.objects.filter(id=grade_id).first()
        gradeDisciplinas = GradeDisciplina.objects.filter(grade_id=grade_id).order_by('periodoGradeAtual',
                                                                                      'disciplina__nome')
        tituloRelatorio = 'Grade curricular do curso de ' + grade.curriculo.curso.nome + ' - ' + grade.curriculo.curso.instituicao.sigla

        relacionamentos = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__grade__id=grade_id)
        gradesDiciplinas = GradeDisciplina.objects.filter(grade_id=grade_id)
        custoLayout = 0
        for relacionamento in relacionamentos:
            for gradeDiciplinaAnterior in gradesDiciplinas:
                if relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.codigo == gradeDiciplinaAnterior.disciplina.codigo:
                    for gradeDiciplinaPosterior in gradesDiciplinas:
                        if relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.codigo == gradeDiciplinaPosterior.disciplina.codigo:
                            custoLayout = custoLayout + relacionamento.relacionamento * (
                                DISTANCIA_SEMESTRES[gradeDiciplinaAnterior.periodoGradeAtual - 1][
                                    gradeDiciplinaPosterior.periodoGradeAtual - 1])

        # Rendered
        html_string = render_to_string('admin/grade/relatorio.html',
                                       {'gradeDisciplinas': gradeDisciplinas, 'grade': grade,
                                        'tituloRelatorio': tituloRelatorio, 'custoLayout': custoLayout})
        html = HTML(string=html_string, base_url=request.build_absolute_uri())

        # report_css = os.path.join(
        #     os.path.dirname(__file__), "static", "css", "app.css")
        print(html)
        result = html.write_pdf()

        # Creating http response
        response = HttpResponse(content_type='application/pdf;')
        response['Content-Disposition'] = 'inline; filename=grade_curricular.pdf'
        response['Content-Transfer-Encoding'] = 'binary'

        with tempfile.NamedTemporaryFile(delete=True) as output:
            output.write(result)
            output.flush()
            output = open(output.name, 'rb')
            response.write(output.read())

        return response

    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


# Método que imprime a grade resultante
def imprimirGrade(periodos, codigosDisciplinasTraducao, resultados, X, periodoCronologico):
    for j in periodos:
        carga = (sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao))
        indiceRetencao = (
            sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][4] for i in codigosDisciplinasTraducao))
        print("Período " + str(j + periodoCronologico + 1) + " - Carga: " + str(carga) + " - Retenção " + str(
            indiceRetencao));
        print("\n")
        for i in codigosDisciplinasTraducao:
            if (round(X[i][j].x) == 1):
                print(codigosDisciplinasTraducao[i][0] + ' - ' + codigosDisciplinasTraducao[i][1], end=' ')
                print(' - C: ' + str(codigosDisciplinasTraducao[i][3]) + ' - IR: ' + str(
                    codigosDisciplinasTraducao[i][4]))
        print("\n")

    for j in periodos:
        carga = (sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao))
        indiceRetencao = (
            sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][4] for i in codigosDisciplinasTraducao))
        resultados.append(
            "Período " + str(j + periodoCronologico + 1) + " - Carga: " + str(carga) + " - Retenção " + str(
                indiceRetencao));
        resultados.append("\n")
        for i in codigosDisciplinasTraducao:
            if (int(round(X[i][j].x)) == 1):
                resultados.append(
                    str(codigosDisciplinasTraducao[i][0]) + ' - ' + str(codigosDisciplinasTraducao[i][1]))
                resultados.append(' - C: ' + str(codigosDisciplinasTraducao[i][3]) + ' - IR: ' + str(
                    codigosDisciplinasTraducao[i][4]))
                resultados.append("\n")
        resultados.append("\n")
    resultados.append("\n")


# Método que imprime a soma das cargas de cada período
def imprimirSomatorioCargasPorPeriodo(periodos, codigosDisciplinasTraducao, resultados, X, periodoCronologico):
    print("CARGA PERÍODO")

    for j in periodos:
        carga = (sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao))
        print("Carga Período " + str(j + periodoCronologico + 1) + " = " + str(carga))

    resultados.append("CARGA PERÍODO")
    resultados.append('\n')
    for j in periodos:
        carga = (sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][3] for i in codigosDisciplinasTraducao))
        resultados.append("Carga Período " + str(j + periodoCronologico + 1) + " = " + str(carga))
        resultados.append('\n')
    resultados.append("\n")


# Método que imprime a soma dos índices de retenção de cada período
def imprimirSomatorioIndicesRetencao(periodos, codigosDisciplinasTraducao, resultados, X, periodoCronologico):
    print("ÍNDICES RETENÇÃO")

    for j in periodos:
        indiceRetencao = (sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][4] for i in codigosDisciplinasTraducao))
        print("Índice retenção Período " + str(j + periodoCronologico + 1) + " = " + str(indiceRetencao))

    resultados.append("ÍNDICES RETENÇÃO")
    resultados.append('\n')
    for j in periodos:
        indiceRetencao = (sum(round(X[i][j].x) * codigosDisciplinasTraducao[i][4] for i in codigosDisciplinasTraducao))
        resultados.append("Índice retenção Período " + str(j + periodoCronologico + 1) + " = " + str(indiceRetencao))
        resultados.append('\n')
    resultados.append("\n")


# Método que imprime os valores das variáveis constantes no resultado da função objetivo
def imprimirValoresVariaveis(resultados, C, IR, RD):
    print('VALORES RESULTANTES DAS VARIÁVEIS')
    print('Valor de C no resultado da função objetivo: %g' % C.X)
    print('Valor de IR no resultado da função objetivo: %g' % IR.X)
    print('Valor de RD no resultado da função objetivo: %g' % RD.getValue())

    resultados.append('VALORES RESULTANTES DAS VARIÁVEIS')
    resultados.append('\n')
    resultados.append('Valor de C no resultado da função objetivo: %g' % C.X)
    resultados.append('\n')
    resultados.append('Valor de IR no resultado da função objetivo: %g' % IR.X)
    resultados.append('\n')
    resultados.append('Valor de RD no resultado da função objetivo: %g' % RD.getValue())
    resultados.append('\n')
    resultados.append("\n")


# Método que imprime os valores das variáveis constantes no resultado da função objetivo
def imprimirPesos(resultados, pesoCarga, pesoRetencao, pesoRelacao):
    print("PESOS")
    print('Valor Peso Carga: %g' % pesoCarga)
    print('Valor Peso Retenção: %g' % pesoRetencao)
    print('Valor Peso Relação: %g' % pesoRelacao)

    resultados.append("PESOS")
    resultados.append("\n")
    resultados.append('Valor Peso Carga: %g' % pesoCarga)
    resultados.append("\n")
    resultados.append('Valor Peso Retenção: %g' % pesoRetencao)
    resultados.append("\n")
    resultados.append('Valor Peso Relação: %g' % pesoRelacao)
    resultados.append("\n")
    resultados.append("\n")


# Método que imprime os valores das variáveis constantes no resultado da função objetivo
def imprimirValoresParaFronteiraPareto(resultadosPareto, pesoCarga, pesoRetencao, pesoRelacao, C, IR, RD):
    print('Pareto: ' + str(round(C.X)) + ';' + str(round(IR.X)) + ';' + str(round(RD.getValue())) + ';' + str(
        pesoCarga) + ';' + str(pesoRetencao) + ';' + str(pesoRelacao))
    resultadosPareto.append(
        str(round(C.X)) + ';' + str(round(IR.X)) + ';' + str(round(RD.getValue())) + ';' + str(
            pesoCarga) + ';' + str(pesoRetencao) + ';' + str(pesoRelacao))
    resultadosPareto.append('\n')


def aluno_grade_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):

        curriculos = Curriculo.objects.filter(curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id).order_by('curso_id', 'id'))).order_by(
            'curso__nome')
        if request.method == 'POST':
            if request.POST['curriculo_id'] != '':
                gradesList = Grade.objects.filter(
                    curriculo_id=request.POST['curriculo_id'], gradeAluno=False, solucao=False).order_by('id')

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)

            if request.POST['curriculo_id'] != '':
                curriculo = Curriculo.objects.filter(id=request.POST['curriculo_id']).first()
                context = {'curriculoSelection': curriculo, 'curriculos': curriculos, 'grades': grades}
            else:
                context = {'curriculos': curriculos, 'grades': grades}

        else:
            curriculoId = request.GET.get('curriculo_id')
            if curriculoId:
                gradesList = Grade.objects.filter(
                    curriculo_id=curriculoId, gradeAluno=False, solucao=False).order_by('id')
                curriculo = Curriculo.objects.filter(id=curriculoId).first()
            else:
                gradesList = Grade.objects.filter(
                    gradeAluno=False, solucao=False, curriculo__id__in=Subquery(
                        curriculos.values('id')))

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)

            if curriculoId:
                context = {'curriculoSelection': curriculo, 'curriculos': curriculos, 'grades': grades}
            else:
                context = {'curriculos': curriculos, 'grades': grades}

        if 'success' in request.GET:
            context = {**context, 'message': 'success'}

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'balanceando' in request.GET:
            context = {**context, 'message': 'balanceando'}

        template = loader.get_template('aluno/grade/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_gradesbalanceadas_index(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        gradesOriginais = Grade.objects.filter(gradeAluno=True, solucao=False, user_id=request.user.id)
        if request.method == 'POST' and request.POST['grade_id'] != '':

            gradesList = Grade.objects.filter(
                gradeOriginal_id=request.POST['grade_id'],
                user_id=request.user.id, gradeAluno=True, solucao=True).order_by('id')[:100]

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)
            gradeOriginal = Grade.objects.filter(id=request.POST['grade_id']).first()
            context = {'gradeOriginalSelection': gradeOriginal, 'gradesOriginais': gradesOriginais, 'grades': grades}

        else:
            if grade_id:
                gradeId = grade_id
            else:
                gradeId = request.GET.get('grade_id')

            if grade_id:
                gradesList = Grade.objects.filter(
                    gradeOriginal_id=gradeId, user_id=request.user.id, gradeAluno=True, solucao=True).order_by('id')[
                             :100]
            else:
                gradesList = Grade.objects.filter(
                    user_id=request.user.id, gradeAluno=True, solucao=True).order_by('id')[:100]
            gradeOriginal = Grade.objects.filter(id=gradeId).first()

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)

            if gradeId:
                context = {'gradeOriginalSelection': gradeOriginal, 'gradesOriginais': gradesOriginais,
                           'grades': grades}
            else:
                context = {'gradesOriginais': gradesOriginais, 'grades': grades}

        emBalanceamento = False
        gradesOriginaisBalanceando = Grade.objects.filter(emBalanceamento=True, gradeAluno=True, solucao=False, user_id=request.user.id).all()
        if gradesOriginaisBalanceando.exists():
            emBalanceamento = True

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'successBalance' in request.GET:
            context = {**context, 'message': 'successBalance'}

        if emBalanceamento is True:
            context = {**context, 'message': 'balanceando'}

        if emBalanceamento is False:
            context = {**context, 'message': 'balanceandoConcluido'}

        if 'numeroGradesComparacaoIncorreto' in request.GET:
            context = {**context, 'message': 'numeroGradesComparacaoIncorreto'}

        template = loader.get_template('aluno/grade/gradesbalanceadas.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_gradealuno(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        gradesOriginais = Grade.objects.filter(gradeAluno=True, solucao=False, user_id=request.user.id)
        if request.method == 'POST' and request.POST['grade_id'] != '':

            gradesList = Grade.objects.filter(
                id=request.POST['grade_id'],
                user_id=request.user.id, gradeAluno=True, solucao=False).order_by('id')[:100]

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)
            gradeOriginal = Grade.objects.filter(id=request.POST['grade_id']).first()
            context = {'gradeOriginalSelection': gradeOriginal, 'gradesOriginais': gradesOriginais, 'grades': grades}

        else:
            if grade_id:
                gradeId = grade_id
            else:
                gradeId = request.GET.get('grade_id')

            if grade_id:
                gradesList = Grade.objects.filter(
                    id=gradeId, user_id=request.user.id, gradeAluno=True, solucao=False).order_by('id')[:100]
            else:
                gradesList = Grade.objects.filter(
                    user_id=request.user.id, gradeAluno=True, solucao=False).order_by('id')[:100]
            gradeOriginal = Grade.objects.filter(id=gradeId).first()

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesList, 100)

            try:
                grades = paginator.page(page)
            except PageNotAnInteger:
                grades = paginator.page(1)
            except EmptyPage:
                grades = paginator.page(paginator.num_pages)

            if gradeId:
                context = {'gradeOriginalSelection': gradeOriginal, 'gradesOriginais': gradesOriginais,
                           'grades': grades}
            else:
                context = {'gradesOriginais': gradesOriginais, 'grades': grades}

        if 'success' in request.GET:
            context = {**context, 'message': 'success'}

        if 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        if 'gradeBalanceadaAssociada' in request.GET:
            context = {**context, 'message': 'gradeBalanceadaAssociada'}

        template = loader.get_template('aluno/grade/gradealuno.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_create(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        if request.method == 'POST':

            gradeOriginal = Grade.objects.filter(id=request.POST['grade_id']).first()
            grades = Grade.objects.filter(gradeOriginal_id=gradeOriginal.id, gradeAluno=True)
            for grade in grades:
                if grade.nome == request.POST['nome']:
                    return HttpResponseRedirect(reverse('aluno_grade_create', args=[request.POST['grade_id']]) + '?gradeJaCadastrada')

            try:
                grade = Grade(
                    curriculo=gradeOriginal.curriculo,
                    gradeOriginal=gradeOriginal,
                    nome=request.POST['nome'],
                    periodosRestantes=request.POST['periodosRestantes'],
                    # anteriormente era informado o período cronológico. Por exemplo, se tivesse passado 2 períodos
                    # desde a entrada do aluno no curso até a data atual, o período cronológico dele seria 3, sendo este
                    # valor informado pelo usuário. Porteriormente, por questão de melhor entendimento por parte do usuário,
                    # foi disponibilizado que este informe quantos períodos se passaram desde sua entrada no curso.
                    # No caso descrito, o valor a ser informado seria 2. Para evitar alterações substanciais no código,
                    # o valor 1 é somado para que o balanceamento ocorra normalmente como antes.
                    periodoCronologico=int(request.POST['periodoCronologico']) + 1,
                    gradeAluno=True,
                    user=request.user
                )
                grade.save()
            except:
                return
            return HttpResponseRedirect(reverse('aluno_grade_gradealuno') + '?success')

        grade = Grade.objects.filter(id=grade_id).first()

        context = {'grade': grade}

        if 'gradeJaCadastrada' in request.GET:
            context = {**context, 'message': 'gradeJaCadastrada'}

        template = loader.get_template('aluno/grade/create.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_view(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        grade = Grade.objects.filter(id=grade_id).first()
        gradesDisciplinasCursar = GradeDisciplinaCursar.objects.filter(grade_id=grade_id).first()
        context = {'grade': grade, 'gradesDisciplinasCursar': gradesDisciplinasCursar}

        if grade.gradeAluno is True:
            if 'successBalance' in request.GET:
                context = {**context, 'message': 'successBalance'}

            if 'successDeleteSolucoes' in request.GET:
                context = {**context, 'message': 'successDeleteSolucoes'}

            if 'successDeleteDisciplinasCursar' in request.GET:
                context = {**context, 'message': 'successDeleteDisciplinasCursar'}

            if 'gradeEmBalanceamento' in request.GET:
                context = {**context, 'message': 'gradeEmBalanceamento'}

            if 'stoppedBalance' in request.GET:
                context = {**context, 'message': 'stoppedBalance'}

            if grade.emBalanceamento is True and grade.problemaUltimoBalanceamento is False:
                context = {**context, 'message': 'balanceando'}
            elif grade.problemaUltimoBalanceamento is True:
                context = {**context, 'message': 'problemaUltimoBalanceamento'}

            if grade.balanceada is True:
                context = {**context, 'message': 'balanceandoConcluido'}

        template = loader.get_template('aluno/grade/view.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_edit(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        grade = Grade.objects.filter(id=grade_id).first()
        gradesSelection = Grade.objects.filter(solucao=False)

        if request.method == 'POST':

            grades = Grade.objects.filter(gradeOriginal_id=request.POST['gradeOriginal_id'], gradeAluno=True)

            for gradeEditar in grades:
                if grade.id != gradeEditar.id and (
                        gradeEditar.nome == request.POST['nome']):
                    return HttpResponseRedirect(reverse('aluno_grade_edit', args=[grade.id]) + '?gradeJaCadastrada')

            gradeOriginal = Grade.objects.filter(id=request.POST['gradeOriginal_id']).first()
            grade.gradeOriginal = gradeOriginal
            grade.nome = request.POST['nome']
            grade.periodosRestantes = request.POST['periodosRestantes']
            grade.gradeAluno = True
            grade.periodoCronologico = int(request.POST['periodoCronologico']) + 1
            grade.user = request.user
            grade.save()
            return HttpResponseRedirect(reverse('aluno_grade_gradealuno') + '?success')

        context = {'grade': grade, 'gradesSelection': gradesSelection}

        if 'gradeJaCadastrada' in request.GET:
            context = {**context, 'message': 'gradeJaCadastrada'}

        template = loader.get_template('aluno/grade/edit.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_delete(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        if request.method == 'POST':

            gradeBalanceada = Grade.objects.filter(gradeOriginal_id=grade_id).first()
            if gradeBalanceada != None:
                return HttpResponseRedirect(reverse('aluno_grade_gradealuno') + '?gradeBalanceadaAssociada')

            gradeExcluir = Grade.objects.filter(id=grade_id).first()
            Grade.objects.filter(id=grade_id).delete()
            if gradeExcluir.solucao == False:
                return HttpResponseRedirect(reverse('aluno_grade_gradealuno') + '?successDelete')
            else:
                return HttpResponseRedirect(reverse('aluno_gradesbalanceadas_index') + '?successDelete')

        grade = Grade.objects.filter(id=grade_id).first()
        context = {'grade': grade}
        template = loader.get_template('aluno/grade/delete.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_gradedisciplina_index(request):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        grades = Grade.objects.filter(user__id=request.user.id, gradeOriginal__isnull=False, solucao=False, curriculo__curso__id__in=Subquery(
            UserCurso.objects.values('curso_id').filter(user__id=request.user.id)))
        if request.method == 'POST' and request.POST['grade_id'] != '':
            gradesDisciplinasCursarList = GradeDisciplinaCursar.objects.filter(
                grade__id=request.POST['grade_id'])

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesDisciplinasCursarList, 100)

            try:
                gradesDisciplinasCursar = paginator.page(page)
            except PageNotAnInteger:
                gradesDisciplinasCursar = paginator.page(1)
            except EmptyPage:
                gradesDisciplinasCursar = paginator.page(paginator.num_pages)

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            context = {'gradeSelection': grade, 'grades': grades, 'gradesDisciplinasCursar': gradesDisciplinasCursar}

        else:
            gradeId = request.GET.get('grade_id')
            if gradeId:
                gradesDisciplinasCursar = GradeDisciplinaCursar.objects.filter(
                    grade__id=gradeId)
                grade = Grade.objects.filter(id=gradeId).first()
            else:
                gradesDisciplinasCursar = GradeDisciplinaCursar.objects.filter(
                    grade__id__in=Subquery(grades.values('id')))

            page = request.GET.get('page', 1)
            paginator = Paginator(gradesDisciplinasCursar, 100)

            try:
                gradesDisciplinasCursar = paginator.page(page)
            except PageNotAnInteger:
                gradesDisciplinasCursar = paginator.page(1)
            except EmptyPage:
                gradesDisciplinasCursar = paginator.page(paginator.num_pages)

            if gradeId:
                context = {'gradeSelection': grade, 'grades': grades,
                           'gradesDisciplinasCursar': gradesDisciplinasCursar}
            else:
                context = {'grades': grades, 'gradesDisciplinasCursar': gradesDisciplinasCursar}

        if 'successEdit' in request.GET:
            context = {**context, 'message': 'successEdit'}

        elif 'successDelete' in request.GET:
            context = {**context, 'message': 'successDelete'}

        template = loader.get_template('aluno/gradedisciplina/index.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_gradedisciplina_create(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        grade = Grade.objects.filter(id=grade_id).first()
        if request.method == 'POST':

            gradesDisciplinasCursar = GradeDisciplinaCursar.objects.filter(grade_id=grade_id)
            gradeDisciplinaCursar = GradeDisciplinaCursar.objects.filter(grade_id=grade_id,
                                                                         gradeDisciplina_id=request.POST[
                                                                             'gradeDisciplinaOriginal_id']).first()

            if gradeDisciplinaCursar != None:
                return HttpResponseRedirect(
                    reverse('aluno_gradedisciplina_create', args=[grade_id]) + '?disciplinaACursarJaCadastrada')

            gradeDisciplinaOriginal = GradeDisciplina.objects.filter(
                id=request.POST['gradeDisciplinaOriginal_id']).first()

            periodoFixo = False
            periodo = None
            if bool(request.POST['periodo']) == True and request.POST['periodoFixo'] == 'N':
                return HttpResponseRedirect(
                    reverse('aluno_gradedisciplina_create',
                            args=[grade_id]) + '?periodoInformadoPeriodoFixoNaoInformado')

            if request.POST['periodoFixo'] == 'S':

                # verifica se retorna False
                if bool(request.POST['periodo']) == False:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_create', args=[grade_id]) + '?periodoFixoInformarPeriodo')

                periodoCadastro = request.POST['periodo']
                periodo = (
                                      int(periodoCadastro) - grade.periodoCronologico) + 1  # faz a equivalencia dos períodos(ex: passados 2 períodos, o periodo 7,

                if periodo < 1:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_create', args=[grade_id]) + '?disciplinaEmPeriodoQueJaOcorreu')

                if periodo > grade.periodosRestantes:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_create',
                                args=[grade_id]) + '?disciplinaEmPeriodoSuperiorDisponivel')

                requisitos = Requisito.objects.filter(gradeDisciplina_id=request.POST['gradeDisciplinaOriginal_id'])

                if requisitos.exists() and periodo == 1:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_create',
                                args=[grade_id]) + '?dependentePeriodoAnteriorRequisitos')

                for requisito in requisitos:
                    # verifica se a disciplina a ser cursada será cadastrada em período igual ou anterior a seu pré-requisito já inserido em disciplinas a cursar
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == requisito.gradeDisciplinaRequisito.id:
                            if gradeDisciplinaCursarVerificar.periodoFixo:
                                if periodo <= gradeDisciplinaCursarVerificar.periodo:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                                        grade_id]) + '?disciplinaACursarPeriodoAnteriorOuIgualRequisito&disciplinaPosterior='
                                                                + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaAnterior='
                                                                + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodoCadastro)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo))
                                elif (
                                        periodo - gradeDisciplinaCursarVerificar.periodo) > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                                        grade_id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior&disciplinaPosterior='
                                                                + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaAnterior='
                                                                + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                requisitos = Requisito.objects.filter(
                    gradeDisciplinaRequisito_id=request.POST['gradeDisciplinaOriginal_id']).all()

                if requisitos.exists() and periodo == grade.periodosRestantes:
                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                        grade_id]) + '?tentativaCadastrarRequisitoUltimoPeriodo')

                # caso uma disciplina dependente tenha sido definida para antes do requisito a ser cadastrado, deve-se retirá-la e adicioná-la em período posterior
                for requisito in requisitos:
                    # verifica se a disciplina a ser cursada será cadastrada em período igual ou anterior a seu pré-requisito já inserido em disciplinas a cursar
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == requisito.gradeDisciplina.id:
                            if gradeDisciplinaCursarVerificar.periodoFixo:
                                if periodo >= gradeDisciplinaCursarVerificar.periodo:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                                        grade_id]) + '?requisitoACursarPeriodoSuperiorOuIgualDependente&disciplinaAnterior=' + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaPosterior=' + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo))
                                elif (
                                        gradeDisciplinaCursarVerificar.periodo - periodo) > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                                        grade_id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior&disciplinaAnterior=' + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaPosterior=' + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                relacionamentos = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoPosterior_id=request.POST['gradeDisciplinaOriginal_id'])

                if relacionamentos.exists() and periodo == 1:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_create',
                                args=[grade_id]) + '?dependentePeriodoAnteriorRelacao')

                for relacionamento in relacionamentos:
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == relacionamento.gradeDisciplinaRelacionamentoAnterior.id:
                            if gradeDisciplinaCursarVerificar.periodoFixo and periodo < gradeDisciplinaCursarVerificar.periodo and relacionamento.relacionamento >= PONTUACAOINICIALRELACAO:
                                return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                                    grade_id]) + '?disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior&disciplinaAnterior='
                                                            + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome + '&disciplinaPosterior='
                                                            + gradeDisciplinaOriginal.disciplina.nome
                                                            + '&periodoCadastro=' + str(periodo)
                                                            + '&periodoVerificar=' + str(
                                    gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                relacionamentos = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoAnterior_id=request.POST['gradeDisciplinaOriginal_id']).all()

                if relacionamentos.exists() and periodo == grade.periodosRestantes:
                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                        grade_id]) + '?tentativaCadastrarRelacionamentoUltimoPeriodo')

                for relacionamento in relacionamentos:
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == relacionamento.gradeDisciplinaRelacionamentoPosterior.id and relacionamento.relacionamento >= PONTUACAOINICIALRELACAO:
                            if gradeDisciplinaCursarVerificar.periodoFixo and periodo > gradeDisciplinaCursarVerificar.periodo:
                                return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[
                                    grade_id]) + '?disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior&disciplinaPosterior='
                                                            + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome + '&disciplinaAnterior='
                                                            + gradeDisciplinaOriginal.disciplina.nome
                                                            + '&periodoCadastro=' + str(periodo)
                                                            + '&periodoVerificar=' + str(
                                    gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                    # if periodo <= requisito.gradeDisciplinaRequisito.periodo:
                    #     return HttpResponseRedirect(
                    #         reverse('aluno_gradedisciplina_create', args=[grade_id]) + '?disciplinaACursarPeriodoAnteriorOuIgualRequisito')
                periodoFixo = True

            gradeDisciplinaCursar = GradeDisciplinaCursar(
                grade=grade,
                gradeDisciplina=gradeDisciplinaOriginal,
                periodoFixo=periodoFixo,
                periodo=periodo,
            )
            try:
                gradeDisciplinaCursar.save()
            except Exception as e:
                return print(e)
            return HttpResponseRedirect(reverse('aluno_gradedisciplina_create', args=[grade_id]) + '?successCreate')

        # gradesDisciplinasOriginal = GradeDisciplina.objects.filter(grade_id=grade.gradeOriginal.id)
        #
        # UserCurso.objects.values('curso_id').filter(user__id=request.user.id).order_by('curso_id')
        gradesDisciplinasOriginal = GradeDisciplina.objects.filter(grade_id=grade.gradeOriginal.id).exclude(
            id__in=GradeDisciplinaCursar.objects.values('gradeDisciplina_id')
            .filter(grade_id=grade.id).order_by('gradeDisciplina_id'))
        context = {'grade': grade, 'gradesDisciplinasOriginal': gradesDisciplinasOriginal}

        if 'successCreate' in request.GET:
            context = {**context, 'message': 'success'}

        if 'periodoFixoInformarPeriodo' in request.GET:
            context = {**context, 'message': 'periodoFixoInformarPeriodo'}

        if 'disciplinaEmPeriodoQueJaOcorreu' in request.GET:
            context = {**context, 'message': 'disciplinaEmPeriodoQueJaOcorreu'}

        if 'periodoInformadoPeriodoFixoNaoInformado' in request.GET:
            context = {**context, 'message': 'periodoInformadoPeriodoFixoNaoInformado'}

        if 'dependentePeriodoAnteriorRequisitos' in request.GET:
            context = {**context, 'message': 'dependentePeriodoAnteriorRequisitos'}

        if 'dependentePeriodoAnteriorRelacao' in request.GET:
            context = {**context, 'message': 'dependentePeriodoAnteriorRelacao'}

        if 'disciplinaEmPeriodoSuperiorDisponivel' in request.GET:
            context = {**context, 'message': 'disciplinaEmPeriodoSuperiorDisponivel'}

        if 'tentativaCadastrarRequisitoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'tentativaCadastrarRequisitoUltimoPeriodo'}

        if 'disciplinaACursarJaCadastrada' in request.GET:
            context = {**context, 'message': 'disciplinaACursarJaCadastrada'}

        if 'disciplinaACursarPeriodoAnteriorOuIgualRequisito' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoAnteriorOuIgualRequisito',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoCadastro': request.GET.get('periodoCadastro', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', ''),
                       'periodoVerificar': request.GET.get('periodoVerificar', '')}

        if 'requisitoACursarPeriodoSuperiorOuIgualDependente' in request.GET:
            context = {**context, 'message': 'requisitoACursarPeriodoSuperiorOuIgualDependente',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        if 'tentativaCadastrarRequisitoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'tentativaCadastrarRequisitoUltimoPeriodo'}

        if 'tentativaCadastrarRelacionamentoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'tentativaCadastrarRelacionamentoUltimoPeriodo'}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO,
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO,
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        if 'disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior',
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', ''),
                       'periodoVerificar': request.GET.get('periodoVerificar', '')}

        if 'disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        template = loader.get_template('aluno/gradedisciplina/create.html')
        return HttpResponse(template.render(context, request))

    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_gradedisciplina_view(request, gradedisciplinacursar_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        gradeDisciplinaCursar = GradeDisciplinaCursar.objects.select_related('grade', 'gradeDisciplina').filter(
            id=gradedisciplinacursar_id).first()

        relacionamentosComoDisciplinaAnterior = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__id=gradeDisciplinaCursar.gradeDisciplina.id)
        relacionamentosComoDisciplinaPosterior = Relacionamento.objects.filter(
            gradeDisciplinaRelacionamentoPosterior__id=gradeDisciplinaCursar.gradeDisciplina.id)
        requisitos = Requisito.objects.filter(
            gradeDisciplina_id=gradeDisciplinaCursar.gradeDisciplina.id)
        dependentesRequisito = Requisito.objects.filter(
            gradeDisciplinaRequisito_id=gradeDisciplinaCursar.gradeDisciplina.id)
        context = {'gradeDisciplinaCursar': gradeDisciplinaCursar, 'relacionamentosComoDisciplinaAnterior':relacionamentosComoDisciplinaAnterior,
                   'requisitos':requisitos, 'relacionamentosComoDisciplinaPosterior':relacionamentosComoDisciplinaPosterior, 'dependentesRequisito':dependentesRequisito}
        template = loader.get_template('aluno/gradedisciplina/view.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_gradedisciplina_edit(request, gradedisciplinacursar_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):

        gradeDisciplinaCursar = GradeDisciplinaCursar.objects.select_related('grade', 'gradeDisciplina').filter(
            id=gradedisciplinacursar_id).first()
        grade = Grade.objects.filter(id=gradeDisciplinaCursar.grade.id).first()
        gradesDisciplinas = GradeDisciplina.objects.filter(grade__solucao=False,
                                                           grade__curriculo__curso__id__in=Subquery(
                                                               UserCurso.objects.values('curso_id').filter(
                                                                   user__id=request.user.id)),
                                                           grade__curriculo__curso__id=grade.curriculo.curso.id)
        if request.method == 'POST':

            gradesDisciplinasCursar = GradeDisciplinaCursar.objects.filter(grade_id=request.POST['grade_id'])

            gradeDisciplinaOriginal = GradeDisciplina.objects.filter(
                id=request.POST['gradeDisciplinaOriginal_id']).first()

            periodoFixo = False
            periodo = None
            if bool(request.POST['periodo']) == True and request.POST['periodoFixo'] == 'N':
                return HttpResponseRedirect(
                    reverse('aluno_gradedisciplina_edit',
                            args=[gradedisciplinacursar_id]) + '?periodoInformadoPeriodoFixoNaoInformado')

            if request.POST['periodoFixo'] == 'S':

                if bool(request.POST['periodo']) == False:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_edit',
                                args=[gradedisciplinacursar_id]) + '?periodoFixoInformarPeriodo')
                periodoCadastro = request.POST['periodo']
                periodo = (
                                      int(periodoCadastro) - grade.periodoCronologico) + 1  # faz a equivalencia dos períodos(ex: passados 2 períodos, o periodo 7,

                if periodo < 1:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_edit',
                                args=[gradedisciplinacursar_id]) + '?disciplinaEmPeriodoQueJaOcorreu')

                if periodo > grade.periodosRestantes:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_edit',
                                args=[gradedisciplinacursar_id]) + '?disciplinaEmPeriodoSuperiorDisponivel')

                requisitos = Requisito.objects.filter(gradeDisciplina_id=request.POST['gradeDisciplinaOriginal_id'])

                if requisitos.exists() and periodo == 1:
                    return HttpResponseRedirect(
                        reverse('aluno_gradedisciplina_edit',
                                args=[gradedisciplinacursar_id]) + '?dependentePeriodoAnteriorRequisitos')

                for requisito in requisitos:
                    # verifica se a disciplina a ser cursada será cadastrada em período igual ou anterior a seu pré-requisito já inserido em disciplinas a cursar
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == requisito.gradeDisciplinaRequisito.id:
                            if gradeDisciplinaCursarVerificar.periodoFixo:
                                if periodo <= gradeDisciplinaCursarVerificar.periodo:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                                        gradedisciplinacursar_id]) + '?disciplinaACursarPeriodoAnteriorOuIgualRequisito&disciplinaPosterior='
                                                                + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaAnterior='
                                                                + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodoCadastro)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo))
                                elif (
                                        periodo - gradeDisciplinaCursarVerificar.periodo) > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                                        gradedisciplinacursar_id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior&disciplinaPosterior='
                                                                + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaAnterior='
                                                                + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                requisitos = Requisito.objects.filter(
                    gradeDisciplinaRequisito_id=request.POST['gradeDisciplinaOriginal_id']).all()

                if requisitos.exists() and periodo == grade.periodosRestantes:
                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                        gradedisciplinacursar_id]) + '?tentativaCadastrarRequisitoUltimoPeriodo')

                # caso uma disciplina dependente tenha sido definida para antes do requisito a ser cadastrado, deve-se retirá-la e adicioná-la em período posterior
                for requisito in requisitos:
                    # verifica se a disciplina a ser cursada será cadastrada em período igual ou anterior a seu pré-requisito já inserido em disciplinas a cursar
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == requisito.gradeDisciplina.id:
                            if gradeDisciplinaCursarVerificar.periodoFixo:
                                if periodo >= gradeDisciplinaCursarVerificar.periodo:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                                        gradedisciplinacursar_id]) + '?requisitoACursarPeriodoSuperiorOuIgualDependente&disciplinaAnterior=' + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaPosterior=' + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo))
                                elif (
                                        gradeDisciplinaCursarVerificar.periodo - periodo) > DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                                        gradedisciplinacursar_id]) + '?diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior&disciplinaAnterior=' + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&disciplinaPosterior=' + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                relacionamentos = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoPosterior_id=request.POST['gradeDisciplinaOriginal_id'],
                    relacionamento__gte=PONTUACAOINICIALRELACAO)

                for relacionamento in relacionamentos:
                    if periodo < relacionamento.gradeDisciplinaRelacionamentoAnterior.periodoFixo and relacionamento.gradeDisciplinaRelacionamentoAnterior.periodo:
                        return HttpResponseRedirect(
                            reverse('aluno_gradedisciplina_edit',
                                    args=[gradedisciplinacursar_id]) + '?dependentePeriodoAnteriorRelacao')

                for relacionamento in relacionamentos:
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == relacionamento.gradeDisciplinaRelacionamentoAnterior.id:
                            if gradeDisciplinaCursarVerificar.periodoFixo:
                                if periodo < gradeDisciplinaCursarVerificar.periodo and relacionamento.relacionamento >= PONTUACAOINICIALRELACAO:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                                        gradedisciplinacursar_id]) + '?disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior&disciplinaAnterior='
                                                                + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome + '&disciplinaPosterior='
                                                                + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                relacionamentos = Relacionamento.objects.filter(
                    gradeDisciplinaRelacionamentoAnterior_id=request.POST['gradeDisciplinaOriginal_id']).all()

                if relacionamentos.exists() and periodo == grade.periodosRestantes:
                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                        gradedisciplinacursar_id]) + '?tentativaCadastrarRelacionamentoUltimoPeriodo')

                for relacionamento in relacionamentos:
                    for gradeDisciplinaCursarVerificar in gradesDisciplinasCursar:
                        if gradeDisciplinaCursarVerificar.gradeDisciplina.id == relacionamento.gradeDisciplinaRelacionamentoPosterior.id and relacionamento.relacionamento >= PONTUACAOINICIALRELACAO:
                            if gradeDisciplinaCursarVerificar.periodoFixo:
                                if periodo > gradeDisciplinaCursarVerificar.periodo:
                                    return HttpResponseRedirect(reverse('aluno_gradedisciplina_edit', args=[
                                        gradedisciplinacursar_id]) + '?disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior&disciplinaPosterior='
                                                                + gradeDisciplinaCursarVerificar.gradeDisciplina.disciplina.nome + '&disciplinaAnterior='
                                                                + gradeDisciplinaOriginal.disciplina.nome
                                                                + '&periodoCadastro=' + str(periodo)
                                                                + '&periodoVerificar=' + str(
                                        gradeDisciplinaCursarVerificar.periodo + grade.periodoCronologico - 1))

                periodoFixo = True

            grade = Grade.objects.filter(id=request.POST['grade_id']).first()
            gradeDisciplina = GradeDisciplina.objects.filter(id=request.POST['gradeDisciplinaOriginal_id']).first()
            gradeDisciplinaCursar.grade = grade
            gradeDisciplinaCursar.gradeDisciplina = gradeDisciplina
            gradeDisciplinaCursar.periodoFixo = periodoFixo
            gradeDisciplinaCursar.periodo = periodo

            try:
                gradeDisciplinaCursar.save()
            except Exception as e:
                return print(e)
            return HttpResponseRedirect(reverse('aluno_gradedisciplina_index') + '?successEdit')

        context = {'gradeDisciplinaCursar': gradeDisciplinaCursar, 'grade': grade,
                   'gradesDisciplinas': gradesDisciplinas}

        if 'successEdit' in request.GET:
            context = {**context, 'message': 'successEdit'}

        if 'periodoFixoInformarPeriodo' in request.GET:
            context = {**context, 'message': 'periodoFixoInformarPeriodo'}

        if 'disciplinaEmPeriodoQueJaOcorreu' in request.GET:
            context = {**context, 'message': 'disciplinaEmPeriodoQueJaOcorreu'}

        if 'periodoInformadoPeriodoFixoNaoInformado' in request.GET:
            context = {**context, 'message': 'periodoInformadoPeriodoFixoNaoInformado'}

        if 'disciplinaEmPeriodoSuperiorDisponivel' in request.GET:
            context = {**context, 'message': 'disciplinaEmPeriodoSuperiorDisponivel'}

        if 'disciplinaACursarJaCadastrada' in request.GET:
            context = {**context, 'message': 'disciplinaACursarJaCadastrada'}

        if 'disciplinaACursarPeriodoAnteriorOuIgualRequisito' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoAnteriorOuIgualRequisito',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoCadastro': request.GET.get('periodoCadastro', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', ''),
                       'periodoVerificar': request.GET.get('periodoVerificar', '')}

        if 'requisitoACursarPeriodoSuperiorOuIgualDependente' in request.GET:
            context = {**context, 'message': 'requisitoACursarPeriodoSuperiorOuIgualDependente',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        if 'tentativaCadastrarRequisitoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'tentativaCadastrarRequisitoUltimoPeriodo'}

        if 'tentativaCadastrarRelacionamentoUltimoPeriodo' in request.GET:
            context = {**context, 'message': 'tentativaCadastrarRelacionamentoUltimoPeriodo'}

        if 'dependentePeriodoAnteriorRequisitos' in request.GET:
            context = {**context, 'message': 'dependentePeriodoAnteriorRequisitos'}

        if 'dependentePeriodoAnteriorRelacao' in request.GET:
            context = {**context, 'message': 'dependentePeriodoAnteriorRelacao'}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoRequisitoAnterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO,
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        if 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior' in request.GET:
            context = {**context,
                       'message': 'diferencaMaximaEntreDependenteRequisitoSuperiorAoDefinidoDependentePosterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO': DIFERENCAMAXIMAPERIODOSPONTUACAORELACAOPREREQUISITO,
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        if 'disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoPosteriorDisciplinaRelacionamentoAnterior',
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', ''),
                       'periodoVerificar': request.GET.get('periodoVerificar', '')}

        if 'disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior' in request.GET:
            context = {**context, 'message': 'disciplinaACursarPeriodoAnteriorDisciplinaRelacionamentoPosterior',
                       'disciplinaPosterior': request.GET.get('disciplinaPosterior', ''),
                       'disciplinaAnterior': request.GET.get('disciplinaAnterior', ''),
                       'periodoCadastrado': request.GET.get('periodoCadastrado', '')}

        # if 'periodoSuperiorCicloBasico' in request.GET:
        #     context = {**context, 'message': 'periodoSuperiorCicloBasico'}

        template = loader.get_template('aluno/gradedisciplina/edit.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')


def aluno_gradedisciplina_delete(request, gradedisciplinacursar_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        if request.method == 'POST':
            GradeDisciplinaCursar.objects.filter(id=gradedisciplinacursar_id).delete()
            return HttpResponseRedirect(reverse('aluno_gradedisciplina_index') + '?successDelete')

        gradeDisciplinaCursar = GradeDisciplinaCursar.objects.filter(id=gradedisciplinacursar_id).first()
        context = {'gradeDisciplinaCursar': gradeDisciplinaCursar}
        template = loader.get_template('aluno/gradedisciplina/delete.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_relatorio_analise(request, grade_id):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        """Generate pdf."""
        # Model data
        grade = Grade.objects.filter(id=grade_id).first()
        if grade.gradeOriginal:
            dadosCondensados = aluno_pesquisar_dados_condensado(grade_id)

        periodosGradeBalanceada = GradeDisciplina.objects.order_by('periodoGradeAtual').values(
            'periodoGradeAtual').filter(
            grade_id=grade_id).distinct()
        periodos = []
        for periodoGradeBalanceada in periodosGradeBalanceada:
            periodos.append(periodoGradeBalanceada['periodoGradeAtual'])
        dadosCondensadosOriginal = aluno_pesquisar_dados_condensado(grade.gradeOriginal.gradeOriginal.id, periodos)

        gradeDisciplinaCreditosRetencao = dadosCondensados['gradeDisciplinaCreditosRetencao']
        maxCreditosRetencao = dadosCondensados['maxCreditosRetencao']
        custoLayout = dadosCondensados['custoLayout']

        gradeDisciplinaCreditosRetencaoOriginal = dadosCondensadosOriginal['gradeDisciplinaCreditosRetencao']
        maxCreditosRetencaoOriginal = dadosCondensadosOriginal['maxCreditosRetencao']
        custoLayoutOriginal = dadosCondensadosOriginal['custoLayout']

        gradeDisciplinaCreditosRetencaoFinal = zip(gradeDisciplinaCreditosRetencaoOriginal,
                                                   gradeDisciplinaCreditosRetencao)

        tituloRelatorio = 'Análise da grade curricular do curso de ' + grade.curriculo.curso.nome + ' - ' + grade.curriculo.curso.instituicao.sigla
        # Rendered
        html_string = render_to_string('aluno/grade/relatorioanalise.html', {'grade': grade,
                                                                             'gradeDisciplinaCreditosRetencao': gradeDisciplinaCreditosRetencao,
                                                                             'custoLayout': custoLayout,
                                                                             'gradeOriginal': grade.gradeOriginal,
                                                                             'gradeDisciplinaCreditosRetencaoOriginal': gradeDisciplinaCreditosRetencaoOriginal,
                                                                             'custoLayoutOriginal': custoLayoutOriginal,
                                                                             'gradeDisciplinaCreditosRetencaoFinal': gradeDisciplinaCreditosRetencaoFinal,
                                                                             'maxCreditosRetencao': maxCreditosRetencao,
                                                                             'maxCreditosRetencaoOriginal': maxCreditosRetencaoOriginal,
                                                                             'tituloRelatorio': tituloRelatorio})
        html = HTML(string=html_string, base_url=request.build_absolute_uri())

        # report_css = os.path.join(
        #     os.path.dirname(__file__), "static", "css", "app.css")
        print(html)
        result = html.write_pdf()

        # Creating http response
        response = HttpResponse(content_type='application/pdf;')
        response['Content-Disposition'] = 'inline; filename=grade_curricular.pdf'
        response['Content-Transfer-Encoding'] = 'binary'

        with tempfile.NamedTemporaryFile(delete=True) as output:
            output.write(result)
            output.flush()
            output = open(output.name, 'rb')
            response.write(output.read())

        return response

    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_pesquisar_dados_condensado(grade_id, periodos=None):
    grade = Grade.objects.filter(id=grade_id).first()
    if periodos:
        gradeDisciplinaCreditosRetencao = GradeDisciplina.objects.values('periodoGradeAtual').filter(
            grade_id=grade_id, periodoGradeAtual__in=periodos).annotate(quantidadeDisciplinas=Count('id'),
                                                                        totalCreditos=Sum('creditos'),
                                                                        acumuladoRetencao=Sum('retencao')).order_by(
            'periodoGradeAtual')
        maxCreditosRetencao = GradeDisciplina.objects.values('periodoGradeAtual').filter(
            grade_id=grade_id, periodoGradeAtual__in=periodos).annotate(c=Sum('creditos'), r=Sum('retencao')).aggregate(
            Max('c'),
            Max('r'))
    else:
        gradeDisciplinaCreditosRetencao = GradeDisciplina.objects.values('periodoGradeAtual').filter(
            grade_id=grade_id).annotate(quantidadeDisciplinas=Count('id'),
                                        totalCreditos=Sum('creditos'),
                                        acumuladoRetencao=Sum('retencao')).order_by('periodoGradeAtual')
        maxCreditosRetencao = GradeDisciplina.objects.values('periodoGradeAtual').filter(
            grade_id=grade_id).annotate(c=Sum('creditos'), r=Sum('retencao')).aggregate(Max('c'),
                                                                                        Max('r'))

    if grade.gradeOriginal:
        gradesDisciplinasCursar = GradeDisciplinaCursar.objects.filter(grade_id=grade.gradeOriginal.id)

    if grade.gradeOriginal:
        if grade.gradeOriginal.gradeOriginal:
            relacionamentos = []
            for gradeDisciplinaCursarAnterior in gradesDisciplinasCursar:
                for gradeDisciplinaCursarPosterior in gradesDisciplinasCursar:
                    relacionamento = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__id=
                                                                   gradeDisciplinaCursarAnterior.gradeDisciplina.id,
                                                                   gradeDisciplinaRelacionamentoPosterior__id=
                                                                   gradeDisciplinaCursarPosterior.gradeDisciplina.id).first()
                    if relacionamento:
                        relacionamentos.append(relacionamento)
    else:
        relacionamentos = Relacionamento.objects.filter(gradeDisciplinaRelacionamentoAnterior__grade__id=grade_id)
    if periodos:
        gradesDiciplinas = GradeDisciplina.objects.filter(grade_id=grade_id, periodoGradeAtual__in=periodos)
    else:
        gradesDiciplinas = GradeDisciplina.objects.filter(grade_id=grade_id)
    custoLayout = 0
    for relacionamento in relacionamentos:
        for gradeDiciplinaAnterior in gradesDiciplinas:
            if relacionamento.gradeDisciplinaRelacionamentoAnterior.disciplina.codigo == gradeDiciplinaAnterior.disciplina.codigo:
                for gradeDiciplinaPosterior in gradesDiciplinas:
                    if relacionamento.gradeDisciplinaRelacionamentoPosterior.disciplina.codigo == gradeDiciplinaPosterior.disciplina.codigo:
                        custoLayout = custoLayout + relacionamento.relacionamento * (
                            DISTANCIA_SEMESTRES[gradeDiciplinaAnterior.periodoGradeAtual - 1][
                                gradeDiciplinaPosterior.periodoGradeAtual - 1])
    # TODO: retornar maiores numeros de creditos e retenção para ser usados no template
    return {'gradeDisciplinaCreditosRetencao': gradeDisciplinaCreditosRetencao,
            'maxCreditosRetencao': maxCreditosRetencao, 'custoLayout': custoLayout}


def aluno_grade_relatorio(request, grade_id):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        """Generate pdf."""
        # Model data
        grade = Grade.objects.filter(id=grade_id).first()
        gradeDisciplinas = GradeDisciplina.objects.filter(grade_id=grade_id).order_by('periodoGradeAtual',
                                                                                      'disciplina__nome')
        tituloRelatorio = 'Grade curricular do curso de ' + grade.curriculo.curso.nome + ' - ' + grade.curriculo.curso.instituicao.sigla
        # Rendered
        html_string = render_to_string('aluno/grade/relatorio.html',
                                       {'gradeDisciplinas': gradeDisciplinas, 'grade': grade,
                                        'tituloRelatorio': tituloRelatorio})
        html = HTML(string=html_string, base_url=request.build_absolute_uri())

        # report_css = os.path.join(
        #     os.path.dirname(__file__), "static", "css", "app.css")
        print(html)
        result = html.write_pdf()

        # Creating http response
        response = HttpResponse(content_type='application/pdf;')
        response['Content-Disposition'] = 'inline; filename=grade_curricular.pdf'
        response['Content-Transfer-Encoding'] = 'binary'

        with tempfile.NamedTemporaryFile(delete=True) as output:
            output.write(result)
            output.flush()
            output = open(output.name, 'rb')
            response.write(output.read())

        return response

    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_delete_solucoes(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        if request.method == 'POST':
            Grade.objects.filter(gradeOriginal_id=grade_id).delete()
            gradeOriginal = Grade.objects.filter(id=grade_id).first()
            gradeOriginal.balanceada = False
            gradeOriginal.emBalanceamento = False
            gradeOriginal.balanceamentoInterrompido = False
            gradeOriginal.save()
            return HttpResponseRedirect(reverse('aluno_grade_view', args=[grade_id]) + '?successDeleteSolucoes')

        grade = Grade.objects.filter(id=grade_id).first()
        context = {'grade': grade}
        template = loader.get_template('aluno/grade/deletesolucoes.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def aluno_grade_delete_disciplinas_cursar(request, grade_id=None):
    if request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        if request.method == 'POST':
            GradeDisciplinaCursar.objects.filter(grade_id=grade_id).delete()
            return HttpResponseRedirect(
                reverse('aluno_grade_view', args=[grade_id]) + '?successDeleteDisciplinasCursar')

        grade = Grade.objects.filter(id=grade_id).first()
        context = {'grade': grade}
        template = loader.get_template('aluno/grade/deletedisciplinascursar.html')
        return HttpResponse(template.render(context, request))
    elif request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    else:
        return redirect('login')


def home(request):
    # return render(request, 'authenticate/home.html', {})
    if request.user.is_authenticated and request.user.groups.filter(name='gestor'):
        return render(request, 'admin/home/index.html', {})
    elif request.user.is_authenticated and request.user.groups.filter(name='aluno'):
        return render(request, 'aluno/home/index.html', {})
    else:
        return redirect('login')

def sobre(request):
    # return render(request, 'authenticate/home.html', {})
    if request.user.is_authenticated:
        return render(request, 'comum/sobre/index.html', {})
    else:
        return redirect('login')

def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # messages.success(request, ('You Have Been Logged In!'))
            return redirect('home')

        else:
            messages.success(request, ('Erro ao acessar. Confira seu usuário e senha e tente novamente...'))
            return redirect('login')
    else:
        return render(request, 'authenticate/login.html', {})


def logout_user(request):
    logout(request)
    # messages.success(request, ('You Have Been Logged Out...'))
    return redirect('login')


def register_user(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            if request.POST['codigoGestor'] == '987654321' or bool(request.POST['codigoGestor']) == False:
                form.save()
                username = form.cleaned_data['username']
                password = form.cleaned_data['password1']
                if request.POST['codigoGestor'] == '987654321':
                    grupo = Group.objects.get(name='gestor')
                else:
                    grupo = Group.objects.get(name='aluno')
                user = authenticate(username=username, password=password)
                user.groups.add(grupo)
                login(request, user)
                context = {'message': 'success'}
            else:
                context = {'message': 'codigoGestorIncorreto'}

            template = loader.get_template('authenticate/login.html')
            return HttpResponse(template.render(context, request))
            # messages.success(request, ('You Have Registered...'))
            # return redirect('login')
    else:
        form = SignUpForm()

    context = {'form': form}
    return render(request, 'authenticate/register.html', context)


def edit_profile(request):
    if request.method == 'POST':
        # group=request.user.groups.filter(name='gestor').first()
        # if request.POST['codigoGestor']=='987654321':
        if False:
            grupoGestor = Group.objects.get(name='gestor')
            request.user.groups.add(grupoGestor)
            grupoAluno = request.user.groups.filter(name='aluno').first()
            request.user.groups.remove(grupoAluno)
        else:
            group = request.user.groups.filter(name='gestor').first()
            request.user.groups.remove(group)
            grupoAluno = Group.objects.get(name='aluno')
            request.user.groups.add(grupoAluno)

        form = EditProfileForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            # if request.POST['codigoGestor'] == '987654321':

            # else:
            #     grupoAluno = Group.objects.get(name='aluno')
            #     request.user.groups.add(grupoAluno)
            messages.success(request, ('You Have Edited Your Profile...'))
            return redirect('home')
    else:
        form = EditProfileForm(instance=request.user)

    context = {'form': form}
    return render(request, 'authenticate/edit_profile.html', context)


def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(data=request.POST, user=request.user)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            messages.success(request, ('You Have Edited Your Password...'))
            return redirect('home')
    else:
        form = PasswordChangeForm(user=request.user)

    context = {'form': form}
    return render(request, 'authenticate/change_password.html', context)
