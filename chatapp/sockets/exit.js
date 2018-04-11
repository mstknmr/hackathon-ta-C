'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exit1', function (data) {

      socket.broadcast.emit('exit2',data);

    });
};
