'use strict';

console.log('入室メッセージがみれるはず');
// 入力されたユーザ名を取得する
const userName = $('userName1').val();
// 入室メッセージをサーバに送信する
io.socket.emit('enter1',userName +'さんが入室しました');




// サーバから受信した入室メッセージを画面上に表示する
socket.on('enter2', function (data) {
    $('#thread').prepend('<p>'+ data + '</p>');
});
