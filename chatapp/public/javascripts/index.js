'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName =$('#userName').val();
    // ユーザ名が未入力でないかチェックする
    if(userName === '')
    {
      alert('名前が空欄です。\n名前を入力してください。');
    }
    else
    {
    $('form').submit();
    }
}
