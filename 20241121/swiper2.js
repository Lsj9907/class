const mainSwiper = new Swiper(".main-slide", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500
    }, scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
    },
    breakpoints: {
        513: { // 화면의 크기가 513보다 크거나 같으면 실행
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// swiper.on(event, handler)
mainSwiper.on('slideChange', function() {
    console.log('slide changed');
    $('.logo').toggleClass('change-bg');
});
/*
$('.gnb a').eq(0).on('click', function(e){
    e.preventDefault();
    $('.gnb a').removeClass('colorOn')
    $(this).addClass('colorOn')
    mainSwiper.slideToLoop(0);
});
$('.gnb a').eq(1).on('click', function(e){
    e.preventDefault();
    $('.gnb a').removeClass('colorOn')
    $(this).addClass('colorOn')
    mainSwiper.slideToLoop(1);
});
*/
/*
const $as = document.querySelectorAll('.gnb a');
$as.forEach((a, idx) => {
    a.addEventListner();    
});
*/
$('.gnb a').each(function (idx, elem) {
    $(elem).on('click', function(e) {
        e.preventDefault();
        $('.gnb a').removeClass('colorOn');
        $(this).addClass('colorOn');
        mainSwiper.slideToLoop(idx);
    });
});