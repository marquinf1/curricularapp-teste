# Curricular
### Instalações iniciais
```sh
sudo apt-get install libjpeg-dev zlib1g-dev
sudo apt-get install python3
sudo apt install python3-pip
sudo apt-get install redis-server
```

### Criar diretório do projeto e instalar o ambiente virtual
```sh
mkdir projeto && cd projeto
python3 -m venv venv
source venv/bin/activate
```
### Atualizar o gerenciador pip
```sh
pip install --upgrade pip
```

### clonando o repositório
```sh
git clone https://github.com/claytonbras/curricularapp.git
```
### instalar das dependências
```sh
cd curricularapp
pip install -r requirements.txt
```

### Integrar postgres com Django
Instalar postgres e outros pacotes por fora das dependências
```sh
sudo apt-get install postgresql python-pip python-dev libpq-dev  postgresql-contrib
```
### Criar base de dados curricular
```sh
sudo -u postgres createdb curricular
```
### Criar role (user) com prinvilégios de super-usuário
```sh
sudo -u postgres createuser -P --interactive
>> user pgmaster
>> senha curricular
```
### Criar role (user) com prinvilégios básicos
```sh
sudo -u postgres createuser -P --interactive
>> user curricular
>> senha curricular
```
### Definir o dono do banco curricular para pgmaster (EM PRINCÍPIO, NÃO SERÁ UTILIZADO)
```sh
sudo -i -u postgres
psql
alter database curricular owner to pgmaster;
```
### Verificar em qual porta o postgres está aceitando conexões (substituir pela versão do postgres instalada)
```sh
cat /etc/postgresql/11/main/postgresql.conf | grep port #verificar a versão do PostgresSQL instalada e substituir se for diferente de 11
```
### Teste de conexão
```sh
sudo -i -u postgres
psql -h localhost -p PORTA #Se pedir a senha do postgres, é porque deu certo
```
### Alterar o banco a ser utilizado em settings.py
DATABASES = {<br />
    'default': {<br />
        #'ENGINE': 'django.db.backends.sqlite3',<br />
        #'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),<br />
		'ENGINE': 'django.db.backends.postgresql_psycopg2',<br />
        'NAME': os.environ.get('DB_NAME', 'curricular'),<br />
        'USER': os.environ.get('DB_USER', 'pgmaster'),<br />
        'PASSWORD': os.environ.get('DB_PASS', 'curricular'),<br />
        'HOST': 'localhost',<br />
        'PORT': 'ADICIONAR PORTA IDENTIFICADA ANTERIORMENTE',
    }<br />
}<br />

### Criar superusuario
```sh
python3 manage.py createsuperuser
```
user: admin<br />
email: seuemail@provedor.com.br<br />
senha: curricular

### executando as migrações iniciais e iniciando o servidor
```sh
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Verificar o balanceamento ocorrendo em background
```sh
celery -A balancing worker -l info
```
