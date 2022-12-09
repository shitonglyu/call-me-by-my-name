$('.words li').mouseover(function(){
    $(this).find('p').css('opacity','0')
    $(this).find('img').show()
}).mouseout(function(){
    $(this).find('p').css('opacity','1')
    $(this).find('img').hide()
})

$(".tabbar p").mouseover(function(){
    $('.tabbar p').removeClass("on")
    $(this).addClass("on")
}).click(function(){
    let index = $(this).attr("data-index");
    $('.box').hide()
    $(".box"+index).show()
})


$(document).ready(function () {

    //切换
    $('.box4_1').click(function (e) {
        e.preventDefault();
        $('.box4_1').hide();
        $('.box4_2').fadeIn();

    });

    $('.box4_2').click(function (e) {
        e.preventDefault();
        $('.box4_2').hide();
        $('.box4_1').fadeIn();

    });

    // 随机定位
    var w = $('.box4').width();
    var h = $('.box4').height();
    var x, y, s, a;
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // 动画
    var animationArr = ['retrospection', 'speculation', 'activation', 'connection'];

    for (var i = 1; i <= 20; i += 1) {
        var position = $(".box4_1 .p" + i + " p");
        x = random(100, w - 300);
        y = random(0, 100);
        // s = random(200, 300);
        a = Math.floor(random(0, animationArr.length));
        position.css({ 'left': x, 'top': y});
        position.addClass(animationArr[a]);
    };
    for (var i = 1; i <= 20; i += 1) {
        var position = $(".box4_2 .p" + i + " p");
        x = random(100, w - 300);
        y = random(0, 100);
        s = random(170, 200);
        a = Math.floor(random(0, animationArr.length));
        position.css({ 'left': x, 'top': y });
        position.addClass(animationArr[a]);
    };



});