'use strict';

$('#message').keypress(function(e)
{
  if(e.which === 13)
    {
      if(!e.shiftKey)
      {
        publish();
        return false;
      }
    }

});


function publish() {
    // ユーザ名を取得
    const userName =$('#userName').val();
    // 入力されたメッセージを取得
    const message =$('#message').val();

    // 投稿メッセージをサーバに送信する
    if(message.trim() !== '')//空メッセージでの送信防止
    {
      const kaigyou =message.replace(/\r?\n/g,"<br />");
      socket.emit('event1', userName+'さん:'+'<br />'+kaigyou);
    // 投稿内容を送信
    }

    else {
      alert('メッセージが空欄です。');
    }
    //return false;


}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('event2', function (data) {
    var today = new Date();
    var month = today.getMonth() + 1 ;
    var year = today.getFullYear();
    var date = today.getDate();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    $('#thread').prepend('<font color="#ffffff"><p>' + data +'<br />'+year + "/" + month + "/"+ date + "/" + getstringday(day)+'/'+hour+':'+minute+':'+second+ '</p>');
});

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
