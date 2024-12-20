// $(function(){});

// a 요소가 가지고 있는 기본 이벤트 제거
$('a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });
  
  // 각 박스 안에 움직이는 이미지
  const movingImgs = function (e) {
    let imgX = e.clientX;
    let imgY = e.clientY;
    // console.log(imgX, imgY);
  
    $('.box2-left').css({ left: -200 - imgX / 60, top: 50 - imgY / 30});
    $('.box2-right').css({ right: imgX / 30, bottom: -50 + imgY / 60});
  
    $('.box3-left').css({ left: -200 + imgX / 40, top: 50 - imgY / 50});
    $('.box3-right').css({ right: imgX / 60, bottom: -50 - imgY / 30});
  
    $('.box4-left').css({ left: -200 + imgX / 50, top: 50 - imgY / 50});
    $('.box4-right').css({ right: imgX / 50, bottom: -50 - imgY / 60});
  
    requestAnimationFrame(movingImgs);
  };
  
  $('.box').on('mousemove', movingImgs);
  
  // 스크롤이 되면
  $(window).on('scroll', function() {
    // header 변경
    const box1Top = $('#box1 p').offset().top;
    /*
    if(scrollY > box1Top) {
      $('header').addClass('header-change');
    } else {
      $('header').removeClass('header-change');
    }
    */
    $('header').toggleClass('header-change', scrollY > box1Top);
    
    // 해당 박스로 이동을 하면 내비 에 .menuOn 붙음
    const idx = Math.floor(scrollY / $(window).height());
    // console.log(idx);
    $('.side-menu li').removeClass('menuOn').eq(idx).addClass('menuOn');
  
    // .menuOn이 있으면 li에 data-bg 적용
    $('.side-menu li').each(function() {
      const bgColor = $(this).data('bg');
      console.log(bgColor);
      /*
      if($(this).hasClass('menuOn')) {
        $(this).find('.menu-dot').css({ backgroundColor: bgColor});
      } else {
        $(this).find('.menu-dot').css({ backgroundColor: '#fff'});
      }
      */
     const isDot = $(this).hasClass('menuOn');
     $(this).find('.menu-dot').css({ backgroundColor: isDot ? bgColor : '#fff'});
    });
  });
  
  // 메뉴 클릭시 해당 박스로 부드럽게 이동
  $('.side-menu li').on('click', function() {
    const idx = $(this).index();
    const currentBox = $(window).height() * idx;
    $('html, body').stop().animate({ scrollTop: currentBox }, 800, 'easeInOutBack');
  });
  
  // 마우스 휠 이벤트
  $('.box').each(function(){
    $(this).on('wheel', function(e){
      e.preventDefault();// 여기에서는 스크롤 기본 성격 제거
  
      let delta = e.originalEvent.deltaY;// 스크롤 이동 거리
      const nextBox = $(this).next()[0];
      const prevBox = $(this).prev()[0];
      let currentTop = null;
  
      if(delta > 0) {// 휠을 내렸을 때
        /* console.log(delta);
  
        if(nextBox) {
          currentTop = nextBox.offsetTop;
        } else {
          currentTop = this.offsetTop;// 다음 박스의 값이 없는 경우 현재 박스의 높이값 반환
        }
        */
       
        currentTop = nextBox ? nextBox.offsetTop : this.offsetTop;
  
      } else {// 휠을 올렸을 때
        if(prevBox) {
          currentTop = prevBox.offsetTop;
        } else {
          // currentTop = 0; 첫번째 박스에 도달하면 높이값을 0으로 반환
          return;// 이전 박스의 값이 없는 경우 벗어남
        }
      }
  
      // scrollTo({
      //   top: currentTop,
      //   behavior: 'smooth'
      // });
      $('html, body').stop().animate({ scrollTop: currentTop }, 800, 'easeInOutBack');
    })
  });