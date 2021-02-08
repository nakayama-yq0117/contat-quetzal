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
        var msg = `${key}\n名前：${name}`;
        var msg = `${key}\n郵便番号：${zip11}}`;
        var msg = `${key}\n住所：${addr11}}`;
        var msg = `${key}\nTEL：${tel}`;
        var msg = `${key}\n内容：${date}`;
        var msg = `${key}\n内容：date${reasons}`;
        sendText(msg);

        return false;
    });
});
