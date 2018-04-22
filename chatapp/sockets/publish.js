'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('event1', function (data) {
      if(!data){
        return;
      }


      console.log('クライアントの入力値：' +data);

      io.sockets.emit('event2', data);
    });
};
