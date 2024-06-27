$(function () {
    AOS.init({
        duration: 1200 //aos 나타나는 속도
    });
    $(window).on('load', function () {
        AOS.refresh();
    });
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 4000) {
        $('.logo').addClass('on');
    } else {
        $('.logo').removeClass('on');
    }
});