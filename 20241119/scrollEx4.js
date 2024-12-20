// 로고 클릭시 맨 위로 이동
$('header .title strong').on('click', function () {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

// 스크롤에 따른 header 변화
// addEventListener('scroll', ()=>{})
$(window).on('scroll', function () {
    const box1Top = $('#box1').offset().top;
    // const headerHt = $('header').height();
    const headerHt = $('header').outerHeight();// 마진을 제외한 요소의 높이
    console.log(box1Top);
    console.log(headerHt);

    // section1을 지나면
    if (scrollY > box1Top) {
        $('header').addClass('change-header');
        $('.box').css({ height: `calc(100vh - ${headerHt}px)` });
    } else {
        $('header').removeClass('change-header');
        $('.box').css({ height: `calc(100vh - ${headerHt}px)` });
    }
});

// 모바일 토글 버튼
$('header .menu-wrapper .mobile-btn').on('click', function () {
    // 내가 클릭한 그 버튼에 .toggle-btn이 적용/미적용
    $(this).toggleClass('toggle-btn');
    // 내가 클릭하면 메뉴가 보이고, 안보이고
    $('.global-menu').toggleClass('toggle-menu');

    /* 어떤 li이든 클릭하면 버튼은 원래대로, 메뉴는 닫히게
    $('.global-menu li').on('click', function() {
      $('header .menu-wrapper .mobile-btn').removeClass('toggle-btn')
      $('.global-menu').removeClass('toggle-menu');
    });
    */

    // 각자의 메뉴를 클릭하면, 버튼은 원래대로, 메뉴는 닫히게
    $('.global-menu li').each(function (idx, list) {
        $(list).on('click', function () {
            $('header .menu-wrapper .mobile-btn').removeClass('toggle-btn');
            $('.global-menu').removeClass('toggle-menu');
        });
    });
});

/* 
  여러 요소를 순차적으로 순회
  JS:
  array.forEach((해당요소, 인덱스) => {});
 
  jQuery:
  $.each();
  $().each(function(인덱스, 해당요소){});
*/

// 해당 박스로 부드러운 이동
/*
$('.global-menu li:nth-child(1) a').on('click', function(e) {
  e.preventDefault();
 
  scrollTo({
    top: $('#box1').offset().top - $('header').height(),
    behavior: 'smooth'
  })
});
$('.global-menu li:nth-child(2) a').on('click', function(e) {
  e.preventDefault();
 
  scrollTo({
    top: $('#box2').offset().top - $('header').height(),
    behavior: 'smooth'
  })
});
*/
$('.global-menu li a').each(function (idx, elem) {
    // console.log(`index: ${idx}, value: ${elem}`);
    $(elem).on('click', function (e) {
        e.preventDefault();

        const getBox = $('.box').eq(idx).offset().top - $('header').height();
        scrollTo({
            top: getBox,
            behavior: 'smooth'
        });
    });
});