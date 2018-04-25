'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('ss_publishMessage', function (data) {
      if(!data){
        return;
      }
      console.log('クライアントmessage：' +data);
      console.log('index'+data.indexOf(':'));

      io.sockets.emit('sc_publishMessage', data);
    });

};
