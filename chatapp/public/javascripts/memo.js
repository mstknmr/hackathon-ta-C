'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    if(message.trim() !== '')//空メッセージでの送信防止
  {
    var today = new Date();
    var month = today.getMonth() + 1 ;
    var year = today.getFullYear();
    var date = today.getDate();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    // メモの内容を表示
    $('#thread').prepend('<font color="#a7d28d"><p>' + 'memo：'+$('#message').val() +'<br />'+year + "/" + month + "/"+ date + "/" + getstringday(day)+'/'+hour+':'+minute+':'+second+ '</p></font>');
    $('#message').val('');

    }

  else {
    alert('メモ内容が空欄です。');
  }

}

function getstringday(day)
{
  if(day === 0)
  {
    return 'Sun';
  }
  else if(day === 1)
  {
    return 'Mon';
  }
  else if(day === 2)
  {
    return 'Tue';
  }
  else if(day === 3)
  {
    return 'Wed';
  }
  else if(day === 4)
  {
    return 'Thu';
  }
  else if(day === 5)
  {
    return 'Fri';
  }
  else if(day === 6)
  {
    return 'Sat';
  }
}
