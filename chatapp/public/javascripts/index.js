'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName =$('#userName').val();
    // ユーザ名が未入力でないかチェックする

    if(userName.trim() === '')//一文字目が空欄の場合を弾く
    {
      alert('名前が空欄です。\n再度入力してください。');
    }
    else
    {
    $('form').submit();
    }
}
