(function() {
  'use strict';

  angular
    .module('app.chat', [])
    .controller('ChatController', ChatController);

  /* @ngInject */
  function ChatController($scope, $location, chatService) {
    var chatVm = this;

    var ws = new WebSocket('ws://' + $location.host() + ':' + $location.port() + '/ws');
    ws.onmessage = onmessage;

    chatVm.selected = {};
    chatVm.messageList = [];
    chatVm.sendMessage = sendMessage;
    chatVm.changeRoom = changeRoom;

    chatVm.rooms = [
      {name: 'Foo'},
      {name: 'Bar'},
      {name: 'Buzz'}
    ];

    function onmessage(message) {
      message = JSON.parse(message.data);
      chatVm.messageList.push(message);
      $scope.$apply();
    }

    function sendMessage(message) {
      chatService.sendMessage(ws, message);
    }

    function changeRoom(room) {
      chatService.changeRoom(ws, room);
      chatVm.messageList = [];
    }
  }

})();
