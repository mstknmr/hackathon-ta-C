'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('event1',function(data){
console.log('入室メッセージがみれるはず' + data);
      if(!data){
        return;
      }
    socket.broadcast.emit('event2',data);
  }
);
};
