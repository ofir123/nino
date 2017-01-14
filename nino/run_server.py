import os
import sys

import click
import logbook
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from tornado.wsgi import WSGIContainer
from tornado.web import Application, FallbackHandler

from nino import config
from nino.app import app
from nino.ws_handler import AppWebSocketHandler


def run_server(ip, port, use_ssl):
    settings = dict()
    flask_container = WSGIContainer(app)
    if use_ssl:
        settings['ssl_options'] = {
            'certfile': os.path.join(os.path.dirname(__file__), 'certs', 'localhost.crt'),
            'keyfile': os.path.join(os.path.dirname(__file__), 'certs', 'localhost.key')
        }
    handlers = [
        (r'/ws', AppWebSocketHandler),
        (r'.*', FallbackHandler, dict(fallback=flask_container))
    ]
    http_server = HTTPServer(Application(handlers), **settings)
    http_server.listen(port, ip)
    IOLoop.instance().start()


def run_server_logged(ip, port, use_ssl):
    # No need for a file handler, since the service directs all output to a file anyway.
    logger_setup = logbook.NestedSetup(
        [logbook.NullHandler(), logbook.StreamHandler(sys.stdout, level=logbook.DEBUG, bubble=True)])
    with logger_setup.applicationbound():
        run_server(ip, port, use_ssl)


@click.command()
@click.option('--ip', default=config.IP)
@click.option('--port', default=config.PORT)
@click.option('--use-ssl/--no-ssl', default=config.IS_SSL, is_flag=True)
def main(ip, port, use_ssl):
    run_server_logged(ip, port, use_ssl)


if __name__ == '__main__':
    main()
