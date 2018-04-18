'use strict';


socket.on('event1',function(data){
  if(!data){
    return;
  }
}
// 入力されたユーザ名を取得する
const userName = $('userName').val();
// 入室メッセージをサーバに送信する
socket.emit('event1',userName +'さんが入室しました');



// サーバから受信した入室メッセージを画面上に表示する
socket.on('event2', function (data) {
    $('#thread').prepend('<p>'+ data + '</p>');
});
