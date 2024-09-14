from audioop import reverse
from django.db import models
from django.db.models import Model
from django.db.models import BooleanField
from django.db.models import CharField
from django.db.models import DateTimeField
from django.db.models import FloatField
from django.db.models import AutoField
from django.db.models import ForeignKey
from django.db.models import IntegerField
from django.db.models import EmailField
from django.conf import settings


class Instituicao(Model):
    id = AutoField(primary_key=True,
                          help_text='Id da instituição')
    nome = CharField(null=False, max_length=255, help_text='Insira o nome da instituição', unique=True)
    sigla = CharField(null=False, max_length=255, help_text='Insira a sigla da instituição', unique=True)
    cidade = CharField(null=False, max_length=255, help_text='Insira a cidade da instituição')
    estado = CharField(null=False, max_length=255, help_text='Insira o estado da instituição')
    pais = CharField(null=False, max_length=255, help_text='Insira o país da instituição')
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        """String for representing the Model object."""
        return self.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('instituicao-detail', args=[str(self.id)])

class Usuario(Model):
    id = AutoField(primary_key=True,
                          help_text='Id do usuario')
    nome = CharField(null=False, max_length=255, help_text='Insira o nome do usuário')
    email = EmailField(null=False, max_length=255, help_text='Insira o email do usuário', unique=True)
    senha = CharField(null=False, max_length=255, help_text='Insira a senha do usuário')
    instituicao = ForeignKey('Instituicao', null=False, on_delete=models.PROTECT)
    curso = ForeignKey('Curso', null=True, on_delete=models.PROTECT)
    admin = BooleanField(default=False, verbose_name='Admin')
    gestor = BooleanField(default=False, verbose_name='Gestor')
    aluno = BooleanField(default=False, verbose_name='Aluno')
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        """String for representing the Model object."""
        return self.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('usuario-detail', args=[str(self.id)])

class Curso(Model):
    id = AutoField(primary_key=True,
                          help_text='Id do curso')
    codigo = CharField(max_length=100, help_text='Insira codigo para o curso. Ex.: SIN-UFVJM')
    nome = CharField(max_length=255, help_text='Insira o nome do curso')
    instituicao = ForeignKey('Instituicao', on_delete=models.PROTECT)
    # gestor = Usuario...
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        """String for representing the Model object."""
        return self.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('curso-detail', args=[str(self.id)])


class Curriculo(Model):
    id = AutoField(primary_key=True,
                          help_text='Id do currículo')
    nome = CharField(max_length=255, help_text='Insira um nome para o currículo. Ex.: SINUFVJM-2021')
    quantidadeDisciplinas = IntegerField(help_text='Insira a quantidade de disciplinas do currículo')
    quantidadePeriodos = IntegerField(help_text='Insira a quantidade de períodos do currículo')
    cargaMinimaPorPeriodo = IntegerField(help_text='Insira a carga mínima permitida por período')
    cargaMaximaPorPeriodo = IntegerField(help_text='Insira a carga máxima permitida por período')
    quantidadeMinimaDisciplinasPorPeriodo = IntegerField(help_text='Insira a quantidade mínima permitida por período')
    quantidadeMaximaDisciplinasPorPeriodo = IntegerField(help_text='Insira a quantidade máxima permitida por período')
    quantidadePeriodosCicloBasico = IntegerField(null=True, help_text='Quantidade de períodos que compõe o ciclo básico')
    curso = ForeignKey('Curso', on_delete=models.PROTECT)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        """String for representing the Model object."""
        return self.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('curriculo-detail', args=[str(self.id)])

class Disciplina(Model):
    id = AutoField(primary_key=True,
                          help_text='Id da disciplina')
    codigo = CharField(max_length=10, help_text='Insira um codigo para a disciplina.')
    nome = CharField(max_length=255, help_text='Insira o nome da disciplina')
    ativo = BooleanField(default=True, verbose_name='Ativo')
    curso = ForeignKey('Curso', on_delete=models.PROTECT)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        """String for representing the Model object."""
        return self.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('disciplina-detail', args=[str(self.id)])

class Grade(Model):
    id = AutoField(primary_key=True,
                          help_text='Id da grade')
    nome = CharField(max_length=255, help_text='Insira o nome da grade')
    solucao = BooleanField(default=False)
    pc = FloatField(null=True, help_text='Peso do critério de créditos')
    prd = FloatField(null=True, help_text='Peso do critério de custo do layout da grade')
    pir = FloatField(null=True, help_text='Peso do critério de índices de retenção')
    c = FloatField(null=True, help_text='Maior carga de créditos dentre todos os períodos')
    rd = FloatField(null=True, help_text='Custo do layout da grade')
    ir = FloatField(null=True, help_text='Maior somatório de índices de retenção dentre todos os períodos')
    media = BooleanField(null=True, default=False)
    mediana = BooleanField(null=True, default=False)
    menorValor = BooleanField(null=True, default=False)
    referencia = BooleanField(null=True, default=False)
    ativo = BooleanField(default=True)
    curriculo = ForeignKey('Curriculo', on_delete=models.PROTECT)
    gradeOriginal = ForeignKey('Grade', null=True, on_delete=models.PROTECT)
    usuario = ForeignKey('Usuario', null=True, on_delete=models.PROTECT)
    balanceada = BooleanField(null=False, default=False)
    emBalanceamento = BooleanField(null=True, default=False)
    balanceamentoInterrompido = BooleanField(null=True, default=False)
    problemaUltimoBalanceamento = BooleanField(null=True, default=False)
    periodosRestantes = IntegerField(null=True, help_text='Períodos restantes pra a conclusão do curso do estudante')
    periodoCronologico = IntegerField(null=True, help_text='Período contínuo em que se encontra o aluno')
    gradeAluno = BooleanField(null=True, default=False)
    user = ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.PROTECT)
    parar = BooleanField(null=True, default=False)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        """String for representing the Model object."""
        return self.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('grade-detail', args=[str(self.id)])

    @property
    def melhoriaC(self):
        if self.gradeOriginal.c!=None:
            melhoriaC = round(100-(self.c / self.gradeOriginal.c)*100,2)
            return melhoriaC;

    @property
    def melhoriaIR(self):
        if self.gradeOriginal.ir != None:
            melhoriaIR = round(100 - (self.ir / self.gradeOriginal.ir) * 100, 2)
            return melhoriaIR;

    @property
    def melhoriaRD(self):
        if self.gradeOriginal.rd != None:
            melhoriaRD = round(100 - (self.rd / self.gradeOriginal.rd) * 100, 2)
            return melhoriaRD;

    @property
    def melhoriaOriginalC(self):
        if self.gradeOriginal.c != None:
            melhoriaC = round(100 - (self.gradeOriginal.c / self.c) * 100, 2)
            return melhoriaC;

    @property
    def melhoriaOriginalIR(self):
        if self.gradeOriginal.ir != None:
            melhoriaIR = round(100 - (self.gradeOriginal.ir / self.ir) * 100, 2)
            return melhoriaIR;

    @property
    def melhoriaOriginalRD(self):
        if self.gradeOriginal.rd != None:
            melhoriaRD = round(100 - (self.gradeOriginal.rd / self.rd) * 100, 2)
            return melhoriaRD;

class GradeDisciplina(Model):
    id = AutoField(primary_key=True,
                          help_text='Id da gradeDisciplina')

    ativo = BooleanField(null=False, default=True)
    periodo = IntegerField(null=True, default=0, help_text='Período na qual a disciplina é fixada')
    creditos = IntegerField(null=False, default=0, help_text='Créditos da disciplina na grade')
    retencao = FloatField(null=False, default=0, help_text='Retenção da disciplina na grade')
    cicloBasico = BooleanField(null=False, default=False)
    periodoFixo = BooleanField(null=False, default=False)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)
    periodoGradeAtual = IntegerField(null=True, default=0, help_text='Período da disciplina na grade atual')

    class Meta:
        ordering = ['grade', 'disciplina']
        constraints = [
            models.UniqueConstraint(fields=['grade', 'disciplina'], name='unique_grade_disciplina'),
        ]
    #Cascade, pois é inviável ter que apagar todas as gradesDisciplinas para poder excluir uma grade
    grade = ForeignKey('Grade', on_delete=models.CASCADE)
    #Protected para evitar que uma simples exclusão de disciplina apague uma gradeDisiciplina, o que poderia
    #impactar negativamente nos processos de balanceamento.
    disciplina = ForeignKey('Disciplina', on_delete=models.PROTECT)

    def __str__(self):
        """String for representing the Model object."""
        return self.disciplina.nome+'-'+self.grade.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('gradedisciplina-detail', args=[str(self.id)])

    @property
    def prerequisitos(self):
        if self.grade.gradeOriginal:
            if self.grade.gradeOriginal.gradeOriginal:
                #como a grade original aqui não possui disciplinas associadas (aluno informa as disciplinas a serem cursadas para a entidade disciplinascursar),
                #tem-se que pegar os requisitos a partir da grade original de onde foram selecionadas as disciplinas
                prerequisitos = Requisito.objects.filter(gradeDisciplina__grade_id=self.grade.gradeOriginal.gradeOriginal.id, gradeDisciplina__disciplina_id=self.disciplina.id)
            else:
                ##a busca aqui é diferente devido a gradeDisciplina da solução ter um id diferente daquela associada à grade original.
                prerequisitos = Requisito.objects.filter(
                    gradeDisciplina__grade_id=self.grade.gradeOriginal.id,
                    gradeDisciplina__disciplina_id=self.disciplina.id)
        else:
            prerequisitos = Requisito.objects.filter(gradeDisciplina__id=self.id)
        return prerequisitos;

class Relacionamento(Model):
    id = AutoField(primary_key=True,
                          help_text='Id do Relacionamento')
    gradeDisciplinaRelacionamentoAnterior = ForeignKey('GradeDisciplina', related_name='gradeDisciplinaRelacionamentoAnterior', on_delete=models.CASCADE)
    gradeDisciplinaRelacionamentoPosterior = ForeignKey('GradeDisciplina', related_name='gradeDisciplinaRelacionamentoPosterior', on_delete=models.CASCADE)
    relacionamento = IntegerField(null=False, default=0, help_text='Relacionamento entre das disciplinas')
    # distanciaMinima = IntegerField(null=False, default=0, help_text='Distância mínima entre as disciplinas')
    # distanciaMaxima = IntegerField(null=False, default=0, help_text='Distância máxima entre as disciplinas')
    ativo = BooleanField(null=False, default=True)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = []
        constraints = [
            models.UniqueConstraint(fields=['gradeDisciplinaRelacionamentoAnterior', 'gradeDisciplinaRelacionamentoPosterior'], name='unique_relacionamento_disciplinas'),
        ]

    def __str__(self):
        """String for representing the Model object."""
        return self.gradeDisciplinaRelacionamentoAnterior.disciplina.nome+' '+self.gradeDisciplinaRelacionamentoPosterior.disciplina.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('relacionamento-detail', args=[str(self.id)])

class Requisito(Model):
    id = AutoField(primary_key=True,
                          help_text='Id da gradeDisciplina')
    gradeDisciplina = ForeignKey('GradeDisciplina', related_name='gradeDisciplina', on_delete=models.CASCADE)
    gradeDisciplinaRequisito = ForeignKey('GradeDisciplina', related_name='gradeDisciplinaRequisito', on_delete=models.CASCADE)
    prerequisito = BooleanField(null=False, default=True)
    corequisito = BooleanField(null=False, default=False)
    ativo = BooleanField(null=False, default=True)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = []
        constraints = [
            models.UniqueConstraint(fields=['gradeDisciplina', 'gradeDisciplinaRequisito'],
                                    name='unique_requisito'),
        ]

    def __str__(self):
        """String for representing the Model object."""
        return self.gradeDisciplina.disciplina.nome+' '+self.gradeDisciplinaRequisito.disciplina.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('requisito-detail', args=[str(self.id)])

class GradeDisciplinaCursar(Model):
    id = AutoField(primary_key=True,
                          help_text='Id da gradeDisciplina')

    periodoFixo = BooleanField(null=False, default=False)
    periodo = IntegerField(null=True, default=0, help_text='Período da disciplina')
    gradeDisciplina = ForeignKey('GradeDisciplina', on_delete=models.CASCADE)
    grade = ForeignKey('Grade', on_delete=models.CASCADE)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['grade', 'gradeDisciplina']
        constraints = [
            models.UniqueConstraint(fields=['grade', 'gradeDisciplina'], name='unique_grade_disciplina_cursar'),
        ]

    def __str__(self):
        """String for representing the Model object."""
        return self.gradeDisciplina.disciplina.nome+'-'+self.grade.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('gradedisciplinacursar-detail', args=[str(self.id)])



class UserCurso(Model):
    id = AutoField(primary_key=True,
                          help_text='Id da relação UserCurso')
    user = ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    curso = ForeignKey('Curso', on_delete=models.PROTECT)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        ordering = ['user']

    def __str__(self):
        """String for representing the Model object."""
        return self.user.first_name+'-'+self.user.last_name+'-'+self.curso.nome

    def get_absolute_url(self):
        """Retorna o URL para acessar uma instância específica do modelo."""
        return reverse('usercurso-detail', args=[str(self.id)])
