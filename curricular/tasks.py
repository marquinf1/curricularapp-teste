from __future__ import absolute_import
import os
from django.http import HttpResponseRedirect
from django.urls import reverse
from gurobipy import gurobipy

from .models import Grade, GradeDisciplina, Relacionamento, Requisito
# in any app that you want celery tasks, make a tasks.py and the celery app will autodiscover that file and those tasks.





