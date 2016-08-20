from tornado.ioloop import IOLoop
from tornado.wsgi import WSGIContainer
from tornado.web import Application, FallbackHandler

from nino.config import PORT, IP
from nino.app import app
from nino.ws_handler import AppWebSocketHandler


def run_server():
    flask_container = WSGIContainer(app)

    application = Application([
        # An simple handler for
        (r"/ws", AppWebSocketHandler),
        (r".*", FallbackHandler, dict(fallback=flask_container)),
    ])

    application.listen(PORT, IP)

    IOLoop.instance().start()

if __name__ == '__main__':
    run_server()
