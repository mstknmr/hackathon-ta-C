'use strict';

function pressEnter(){
  $('#userName').keypress(function(e)
  {
    if(e.which === 13)
      {

        if(userName.trim() === '')//userNameが空欄の場合を弾く
          {
            alert('名前が空欄です。\n再度入力してください。');
            return false;
          }
        else
          {
            $('form').submit();
          }
      }
    });
}

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName =$('#userName').val();

    // ユーザ名が未入力でないかチェックする
    //テキストボックス内においてエンターキーで名前なしでログインできる問題の対処

    if(userName.trim() === '')//userNameが空欄の場合を弾く
      {
        alert('名前が空欄です。\n再度入力してください。');
      }
    else
      {
        $('form').submit();
      }
}
