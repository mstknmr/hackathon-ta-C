'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('exit1', userName + 'さんが退出しました。')
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('exit2', function (data) {
    $('#thread').prepend('<p>' +data+ '</p>');
});
