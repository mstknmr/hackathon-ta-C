'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('event1',function(data){

      if(!data){
        return;
      }
    io.socket.emit('event2',data);
    }
};
