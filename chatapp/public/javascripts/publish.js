'use strict';


function publish() {
    // ユーザ名を取得
    const userName =$('#userName').val();
    // 入力されたメッセージを取得
    const message =$('#message').val();
    // 投稿メッセージをサーバに送信する
    if(message.trim() !== '')//空メッセージでの送信防止
    {
      socket.emit('event1', userName+'さん:'+message);
    // 投稿内容を送信
    }

    else {
      alert('メッセージが空欄です。');
    }
    //return false;


}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('event2', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
