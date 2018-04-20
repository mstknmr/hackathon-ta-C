'use strict';


  $('#userName').keypress(function(e)
  {
    if(e.which === 13)
      {
        console.log("enter");
        enterroom();
        return false;
      }

  });


// チャットルームに入室する
function enterroom() {
    // 入力されたユーザ名を取得する
const userName1 =$('#userName').val();
    // ユーザ名が未入力でないかチェックする
    //テキストボックス内においてエンターキーで名前なしでログインできる問題の対処
    if(userName1.trim() === '')//userNameが空欄の場合を弾く
      {
        alert('名前が空欄です。\n再度入力してください。');
        return false;
      }
    else
      {
        $('form').submit();
      }
}
