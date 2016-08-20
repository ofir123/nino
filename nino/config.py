import os

STATIC_FOLDER = os.path.join((os.path.dirname(__file__)), 'client')
TEMPLATE_FOLDER = os.path.join(STATIC_FOLDER, 'build')

IP = '127.0.0.1'
PORT = '5000'

DEBUG = True
