release: python manage.py collectstatic --noinput
web: daphne funko_hub.asgi:application --port %PORT --bind 0.0.0.0 -v2
chatworker: python manage.py runworker --setting=chat.settings -v2 