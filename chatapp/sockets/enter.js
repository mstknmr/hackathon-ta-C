'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enter1',function(data){
console.log('入室メッセージがみれるはず' + data);
      if(!data){
        return;
      }
    socket.broadcast.emit('enter2',data);
  }
);
};
