'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('event1',function(data){
      io.socket.emit('event2',message);
      if(!data){
        return;
      }
    /*  io.socket.emit('event2',message);*/
    }
};
