'use strict';


// 入力されたユーザ名を取得する
const userName = $('#userName').val();
console.log('flug1');
// 入室メッセージをサーバに送信する
socket.emit('enter1',userName +'さんが入室しました。');

// サーバから受信した入室メッセージを画面上に表示する
socket.on('enter2', function (data) {
  console.log('flug3s');
    $('#thread').prepend('<font color="#ffff93"><p align="center">'+ data + '</p></font>');
});
/*
socket.on('sc_addroomlist',function(data){
    $('#roomlist').prepend(data);
});*/
