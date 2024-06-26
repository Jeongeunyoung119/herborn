AOS.init({
    duration: 1200 //aos 나타나는 속도
});

$(function () {
    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 5,//보여지는 갤러리 수
        spaceBetween: 60,//갤러리 사이 간격
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 1000,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        centeredSlides: true,
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 6000) {
        $('.logo').addClass('on');
    } else {
        $('.logo').removeClass('on');
    }
});