$('a[href="#"]').on('click', function(e) {
    e.preventDefault()
  });
  
  /* 로딩 이벤트 setTimeout(()=>{}, 시간);
  setTimeout( () => $('.loader-container').removeClass('loader-hide'), 0), 
  setTimeout(function(){
    $('.loader-container').addClass('loader-hide')
  }, 2500);
  */
  
  function hideLoader() {
    $('.loader-container').addClass('loader-hide')
  }
  window.addEventListener('load', hideLoader);// 윈도우가 로드되면 함수 실행
  
  // .box4#listen 
  const $item = $('.box4 .list-items .list-item');
  $item.each(function(idx, item) {
    const bgColor = $(item).data('bg');
    $(item).find('.item-bg').css({ backgroundColor : bgColor });
  });
  
  // 메뉴 클릭시 슬라이드 업다운
  $('.nav .global-menu-btn').on('click', function () {
    $('.nav .global-menu').toggleClass('on');
  });
  
  // GSAP
  // https://gsap.com/docs/v3/Plugins/ScrollTrigger/?page=1
  
  // 플러그인을 사용하겠다
  gsap.registerPlugin(ScrollTrigger);
  
  // header
  // gsap.fromTo(); 시작 값과 종료 값을 모두 정의
  
  /*
  gsap.fromTo(
    ['.header .logo svg', '.header .nav .global-menu-btn'], 
    { opacity: 0.5 }, 
    { 
      opacity:1,
      duration: 1,
      scrollTrigger: {
        trigger: '.intro-bg-logo',// 트리거 요소. 기준
        start: 'bottom bottom',// 시작 시점. 트리거 요소의 하단과 뷰표트 하단이 만날 때
        toggleActions: 'play none none reverse'
      }
    } 
  );
  
    toggleActions: 'onEnter onLeave onEnterBack onLeaveBack'
      onEnter: 트리거 요소가 뷰포트로 들어올때 
      onLeave : 트리거 요소가 뷰포트에서 벗어났을 때
      onEnterBack : 트리거 요소가 뷰포트로 다시 들어올 때
      onLeaveBack : 트리거 요소가 뷰포트에서 다시 나갈 때
  */
  const headerOpacity = {
    trigger: '.intro-bg-logo',
    start: '100% 100%',
    toggleActions: 'play none none reverse'
  }
  
  gsap.fromTo(
    '.header .logo svg',
    { opacity: 0.5 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: headerOpacity
    }
  );
  gsap.fromTo(
    '.header .nav .global-menu-btn',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      scrollTrigger: headerOpacity
    }
  );
  
  // 메뉴바 컬러 변경
  const invertColor = {
    trigger: '.card-list',
    start: '30% 0',
    end: '100% 0',
    toggleActions: 'play reverse play reverse',
    onEnter: () => {
      gsap.to('.global-menu-btn', { filter: 'invert(100%)', duration: 0.4 })
    },
    onLeave: () => {
      gsap.to('.global-menu-btn', { filter: 'invert(0)', duration: 0.4 })
    },
    onEnterBack: () => {
      gsap.to('.global-menu-btn', { filter: 'invert(100%)', duration: 0.4 })
    },
    onLeaveBack: () => {
      gsap.to('.global-menu-btn', { filter: 'invert(0)', duration: 0.4 })
    },
  };
  
  ScrollTrigger.create(invertColor);
  
  // intro-bg-logo 이동
  // gsap.to('#bg-logo-q', {x: -100, y: -150, rotate: 5, ease: "bounce.out", duration: 1 });
  
  const bgLogoAni = gsap.timeline({// 여러 애니메이션을 순차적으로 실행
    scrollTrigger:{
      // markers: true,트리거 시작과 끝을 표시
      trigger: '.box1',
      start: '100% 100%',
      end: '100% 0',// 애니메이션 끝나는 지점. 트리거의 bottom과 뷰포트의 top
      scrub: 1// 1~3: 스크롤 속도에 비례해 부드러운 움직임, true: 애니메이션 바로 진행
    }
  });
  
  /*
  bgLogoAni.to('#bg-logo-q', {
    x: -100,
    y: 300,
    rotate: -10,
    ease: "expoScale(0.5,7,none)",
    duration: 0.5,
  }, 0);// 타임라인 내에서 애니메이션 시작 시간으로 동시 시작은 0
  bgLogoAni.to('#bg-logo-u', {
    x: 50,
    y: 200,
    rotate: 10,
    ease: "expoScale(0.5,7,none)",
    duration: 0.5,
  }, 0);
  */
  const xValue = [-100, 0, 100, 100];
  const yValue = [200, 300, 100, 400];
  const rotateValue = [10, -10, 10, -10];
  
  // gsap.util.toArray() 탐색한 요소를 배열로 변환
  gsap.utils.toArray('.intro-bg-logo .bg-logo path').forEach((elem, idx)=>{
    bgLogoAni.to(
      elem,
      {
        x: xValue[idx],
        y: yValue[idx],
        rotate: rotateValue[idx],
        ease: "expoScale(0.5,7,none)",
        duration: 0.5,
      },
      0
    )
  });
  
  // podcast-title
  gsap.fromTo(
    '.podcast-title', 
    { opacity: 0.2, y: 170, overflow: 'hidden' }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 4,
      ease: "expoScale(0.5,7,none)", 
      scrollTrigger: {
        trigger: '.podcast-title',
        start: 'bottom bottom',
        end: 'bottom bottom',
        scrub: 1
      }
    }
  );
  
  // rolled-over-text
  gsap.utils.toArray('.rolled-over-text').forEach((txt)=>{
    const txtAni = gsap.timeline({
      scrollTrigger: {
        trigger: txt,
        start: 'bottom bottom',
        end: 'bottom bottom',
        scrub: 1
      }
    });
    txtAni.fromTo(
      txt,
      { opacity: 0, y: 170, overflow: 'hidden'},
      { opacity: 1, y: 0, ease: "expoScale(0.5,7,none)", duration: 3 }
    )
  });
  
  // .text-ani-wrapper
  const txtAniLis = gsap.utils.toArray('.text-ani-wrapper .text-ani li');
  const txAniLisTl = gsap.timeline({ repeat: -1 });// 무한 반복
  
  txtAniLis.forEach((lis) => {// 순차적으로 순회
    txAniLisTl.to(
      lis,// 각 각의 li
      {
        opacity: 1,
        duration: 1.3,
        repeat: 1,// 한번만 실행. 요요로 인해 실제 2번 실행
        x: 0,// x축 0으로 
        yoyo: true,
        ease: "expoScale(0.5,7,none)",
      }
    )
  });
  
  // .list-items
  const listItem = gsap.utils.toArray('.list-items .list-item');
  /*
  listItem.forEach((li, idx) => {
    gsap.timeline({ scrollTrigger: { }}).fromTo(li, { opacity:0 }, { opacity:1 });
  });
  */
  listItem.forEach((li, idx) => {
    ScrollTrigger.create({
      trigger: li,
      start: "30% 40%",
      onEnter: () => {// 트리거가 뷰포트 안으로 진입
        gsap.set(li, { rotateX: '-65deg', z: -500, opacity: 0 });// 시작 상태 설정. 초기화
        gsap.to(li, { 
          rotateX: 0,
          z: 0, 
          opacity: 1, 
          stagger: 0.2,// 요소 간의 애니메이션 지연 시간
          delay: (idx % 3) * 0.1// 대기 시간
        });
      },
      onEnterBack: () => {// 트리거가 뷰포트 안에 재진입
        gsap.set(li, { rotateX: '-65deg', z: -500, opacity: 0});
        gsap.to(li, { 
          rotateX: 0, 
          z: 0, 
          opacity: 1, 
          stagger: 0.2,// 요소 간의 애니메이션 지연 시간
          delay: (idx % 3) * 0.1// 대기 시간
        });
      },
    });
  });
  
  /*
  ScrollTrigger.batch('.list-items .list-item', {
    start: "30% 40%",
    ...
  });
  */
  
  // meters-bottom-title
  /*
  ScrollTrigger.batch('.meters-bottom-title span', {
    onEnter: (title) => {
      gsap.to(title, {
        // 스크롤 이동시 왼쪽으로 이동
        // (인덱스, 대상요소) => {}
        x: (idx, target) => -target.offsetWidth * 0.9,
        scrollTrigger: {
          trigger: '.box6',
          start: '0 100%',
          end: '100% 0',
          scrub: 1
        }
      });
    }
  });
  */
  const metersTitles = gsap.utils.toArray('.meters-bottom-title span');
  metersTitles.forEach(title => {
    gsap.to(title, {
      x: (idx, target) => -target.offsetWidth * 0.9,
      scrollTrigger: {
        trigger: '.box6',
        start: '0 100%',
        end: '100% 0',
        scrub: 1
      }
    });
  });