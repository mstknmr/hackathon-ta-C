'use strict';


// 入力されたユーザ名を取得する
const userName = $('#userName').val();
// 入室メッセージをサーバに送信する
socket.emit('enter1',userName +'さんが入室しました。');




// サーバから受信した入室メッセージを画面上に表示する
socket.on('enter2', function (data) {
    $('#thread').prepend('<p>'+ data + '</p>');
    $('#thread').addClass('enter_color');
});
