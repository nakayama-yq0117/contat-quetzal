var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var zip11 = $('input[name="zip11"]').val();
        var addr11 = $('textarea[name="addr11"]').val();
        var tel = $('textarea[name="tel"]').val();
        var date = $('textarea[name="date"]').val();
        var reasons = $('textarea[name="reasons"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg1 = `${key}\n名前：${name}`;
        var msg2 = `${key}\n郵便番号：${zip11}}`;
        var msg3 = `${key}\n住所：${addr11}}`;
        var msg4 = `${key}\nTEL：${tel}`;
        var msg5 = `${key}\n日付：${date}`;
        var msg6 = `${key}\n内容：date${reasons}`;
        sendText(msg1);
        sendText(msg2);
        sendText(msg3);
        sendText(msg4);
        sendText(msg5);
        sendText(msg6);
        
        return false;
    });
});
