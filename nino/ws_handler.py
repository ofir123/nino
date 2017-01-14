import ujson
from tornado.websocket import WebSocketHandler


class AppWebSocketHandler(WebSocketHandler):
    """
    A global socket that sends & receives generic events to/from all users.

    Messages can be sent with "send_event", and callbacks registered with "register_event".
    """
    websocket_to_room = dict()
    message_handlers = dict()

    def open(self):
        AppWebSocketHandler.websocket_to_room[self] = None

    def on_close(self):
        AppWebSocketHandler.websocket_to_room.pop(self)

    def on_message(self, message):
        message = ujson.loads(message)
        if 'type' in message and message['type'] in AppWebSocketHandler.message_handlers:
            AppWebSocketHandler.message_handlers[message['type']](self, message)
        else:
            self.write_message({'type': 'error', 'message': 'Invalid event received'})

    @classmethod
    def send_event(cls, event_type, event_room=None, **kwargs):
        """
        Send a JSON of the given type with any arguments to the user.
        """
        kwargs['type'] = event_type

        web_socket_list = filter(lambda item: item[1] == event_room,
                                 cls.websocket_to_room.items())

        for (websocket, _) in web_socket_list:
            websocket.write_message(ujson.dumps(kwargs))

    @classmethod
    def register_event(cls, event_type, callback):
        """
        Registers a callback for a certain event type (string).
        Callback receives a message object (dict).
        """
        cls.message_handlers[event_type] = callback

    def check_origin(self, origin):
        """
        This was override for supporting Tornado > 4.0.
        """
        return True


def type_message_handler(src_socket, message):
    socket_room = AppWebSocketHandler.websocket_to_room[src_socket]
    AppWebSocketHandler.send_event('message', event_room=socket_room, **message)

AppWebSocketHandler.register_event('message', type_message_handler)


def type_room_handler(src_socket, message):
    AppWebSocketHandler.websocket_to_room[src_socket] = message['data']

AppWebSocketHandler.register_event('room', type_room_handler)
