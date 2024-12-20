/* 
  jQuery() 기본구조
  $('대상').method();

  https://api.jquery.com/category/selectors
  jQuery('*'); 제이쿼리 방식으로 전체 선택자 탐색
  $('#id'); 아이디 선택자 탐색
  $('.class'); 클래스 선택자 탐색
  $('#id > .class, type type'); 다중 선택자 탐색
  $('type:nth-child(n)');
  $('type[attribute=value]');
  $(':selection');

  .method();
  traversing
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().prevAll(); 이전 형제 노드 '모두' 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().nextAll(); 다음 형제 노드 '모두' 탐색
  $().first(); 일치하는 요소에서 첫번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
  $().filter(); 일치하는 노드 탐색(주로 삭제시 사용)


$().css('속성'); css 속성 탐색
$().css('속성','값'); 속성과 값 적용
$().css({'속성':'값','속성':'값','속성':'값'}); 여러 개의 속성과 값 적용
*/

/* 문서 준비 이벤트 
JS : 
window.onload = function () {}
document.addEventListener('DOMContentLoaded', function() {});
jQuery : 
$(document).ready(function () {}); 문서를 불러온 다음 실행
$(function() {}); 함께 실행
*/

$(document).ready(function() {
    $('body').css('background-color','#ddd');
    $('body *').css({'border': '3px solid #000', 'padding': 10, 'margin': '0.9rem'})
  
    const aParent = $('a').parent();// a의 1촌 부모를 탐색
    console.log(aParent);
    // method chaining 여러 개의 메서드를 연결하는 방식
    $('a').parent().css({'border-color':'#FA4032'});
  });