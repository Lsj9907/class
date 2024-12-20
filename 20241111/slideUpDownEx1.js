// 대메뉴에 마우스를 올리면, 소메뉴가 내려옴
/*
$('.global-menu .menu-title').on('mouseenter', () => {
    $('.global-menu .sub-menu').slideDown();
});
$('.global-menu > li').on('mouseleave', () => {
    $('.global-menu .sub-menu').slideUp();
});
*/
/*
$('.global-menu > li').on({
    'mouseenter' : () => {
        $('.global-menu .sub-menu').stop().slideDown();
    },
        'mouseleave' : () => {
            $('.global-menu .sub-menu').stop().slideUp();
        }
});
*/
$('.global-menu > li').on({
    'mouseenter' : function() {
        // 내가 마우스를 올린 그 li의 자손 중 .sub-menu만 적용
        $(this).find('.sub-menu').stop().slideDown();
    },
    'mouseleave' : function() {
        $(this).find('.sub-menu').stop().slideUp();
    }
});