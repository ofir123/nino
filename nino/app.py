import os

from flask import Flask, send_from_directory

from . import config
from .views import app_views

app = Flask(__name__.split('.')[0])
app.debug = config.DEBUG
app.template_folder = config.TEMPLATE_FOLDER
# For cookies.
app.secret_key = os.urandom(24)


@app.route('/media/<path:filename>')
def send_media(filename):
    return send_from_directory(config.STATIC_FOLDER, filename)

app.register_blueprint(app_views)
