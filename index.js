var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var zip11 = $('textarea[name="zip11"]').val();
        var addr11 = $('textarea[name="addr11"]').val();
        var tel = $('textarea[name="tel"]').val();
        var date = $('textarea[name="date"]').val();
        var reasons = $('textarea[name="reasons"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `${key}\nお名前：${name}\n郵便番号：${zip11}\nご住所：${addr11}\nご連絡先：${tel}\n日付：${date}\n内容：${reasons}`;
        sendText(msg);

        return false;
    });
});
