'use strict';

module.exports = function (socket,io) {
    // 入室メッセージをクライアントに送信する
    socket.on('enter1',function(data){
     if(!data)
     {
        return;
      }
    socket.broadcast.emit('enter2',data);
    /*socket.on('ss_addroomlist',function(data2){
        if(!data2)
        {
          return;
        }

        io.sockets.emit('sc_addroomlist',data2);
    });*/
  });

}
