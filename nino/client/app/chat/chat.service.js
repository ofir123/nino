(function() {
  'use strict';

  angular
    .module('app.chat')
    .factory('chatService', chatService);

  /* @ngInject */
  function chatService() {

    return {
      sendMessage: sendMessage,
      changeRoom: changeRoom
    };

    function sendMessage(ws, message) {
      var messageString = JSON.stringify(
        {
          'type': 'message',
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
