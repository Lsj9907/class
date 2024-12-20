// document.addEventListener('DOMContentLoaded', function() {});

/* 
  event.target
    실제 이벤트가 발생하는 요소를 반환. 이벤트 리스너가 등록되어 있는 자식 요소 반환. (클릭한 그 대상)

  event.currentTarget
    이벤트 리스너가 있는 요소를 반환. 이벤트를 등록해 놓은 요소 반환(일반적으로는 .addEventListener 앞의 대상)
*/

const $box1 = document.querySelector('.box1');
const $box2 = document.querySelector('.box2'); 
const $ul = document.querySelector('ul');
const $li = document.querySelector('li');
const $a = document.querySelector('a');
// console.log($box1);

// box1에 이벤트 binding
$box1.addEventListener('click', (evt) => {
  console.log(`target -> ${evt.target.tagName}`);
  console.log(`currentTarget -> ${evt.currentTarget.tagName}`);
});
/* 
  box1에 이벤트를 바인딩한 상태,
  box1 클릭 : target -> DIV, currentTarget -> DIV
  h1 클릭 : target -> H1(실제 이벤트가 발생한 그 지점), currentTarget -> DIV(이벤트리스너)
  h2 클릭 : target -> H2, currentTarget -> DIV
*/

$box2.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(`target -> ${e.target.tagName}`);
  console.log(`currentTarget -> ${e.currentTarget.tagName}`);

  e.target.style.backgroundColor = 'orange';
  e.currentTarget.style.borderStyle = 'dotted';
});
/* 
box2 클릭 : target -> DIV, currentTarget -> DIV
ul 클릭 : target -> UL, currentTarget -> DIV
li 클릭 : target -> LI, currentTarget -> DIV
a 클릭 : target -> A, currentTarget -> DIV
*/

