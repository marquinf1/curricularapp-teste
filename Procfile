web: gunicorn balancing.wsgi --log-file -
celery: celery -A balancing worker  -l info -c 4
