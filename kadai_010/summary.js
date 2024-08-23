$(function(){
    //クリックしたら赤になる
    $('#change-color').on('click', function(){
        $('#target').css('color','red');
    });

    //クリックしたら「Hallo!」に変更する
    $('#change-text').on('click', function(){
        $('#target').text('Hallo!');
    });

    //クリックしたらフェードアウトする
    $('#fade-out').on('click', function(){
        $('#target').fadeOut();
    });

    //クリックしたらフェードインする
    $('#fade-in').on('click', function(){
        $('#target').fadeIn();
    });
});