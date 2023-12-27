/* 검색 클릭 시 처리 */
const searchEl = document.querySelector('.search'); // document = doctype = html 그 자체라고 생각해라
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();  //search icon을 누르면 input에 focus 하겠다
});

searchInputEl.addEventListener('focus',function(){  // focus 되어 있을 때
  searchEl.classList.add('focused');  //search input이 focus되면 클래스 이름 추가
  searchInputEl.setAttribute('placeholder','통합검색'); // search input에 속성 추가
});

searchInputEl.addEventListener('blur',function(){ //focus 해제할 때
  searchEl.classList.remove('focused');  //search input이 focus되면 클래스 이름 제거
  searchInputEl.setAttribute('placeholder',''); // search input에 속성 비우기
});


/* 올해 날짜 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent=new Date().getFullYear();