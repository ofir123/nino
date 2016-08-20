(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('roomService', roomService);

    function roomService() {

        return {
            sendMessage: sendMessage,
            changeRoom: changeRoom
        };

        function sendMessage(ws, message) {
            var messageString = JSON.stringify(
                {
                    'type': 'msg',
                    'data': message
                });
            ws.send(messageString);
        }

        function changeRoom(ws, room) {
            var messageString = JSON.stringify(
                {
                    'type': 'room',
                    'data': room.name
                });
            ws.send(messageString);
        }

    }

})();
