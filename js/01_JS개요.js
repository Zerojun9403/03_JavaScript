/**
 * 모든 js 파일명.js확장자명
 * .js파일 내부를 <script> 태그 내부라고 보면 됨.
 * 어떤 특정 js 파일명칭인지 알수 없으므로 * 어떠한 표기를 작성한 것임
 */

function externalFn() {
  alert("HTML 외부 파일에 작성된 External 함수 기능 호출입니다. ");
}

/* JS 맛보기 */
// 버튼 클릭시 body 태그의 글자색, 배경색을 변경
const body = document.querySelector("body");

/* 버튼 에 장착된 기능 실행하면 다크 모드로 바꾸는 기능(함수) 설정*/
function 어두운모드() {
  body.style.color = "white";
  //body 태그 안에 존재하는 스타일에서 글자색상을 변경하겠다.
  body.style.backgroundColor = "black";
  //body 태그 안에 존재하는 스타일에서 배경색상을 검정색으로 변경하겠다.
}

function 밝음모드() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
}

function 블루모드(색상) {
  //위 버튼에서 전달 받은 lightblue컬러가
  // 색상이라는 변수 이름에 담겨지고
  //담겨진 lightblue 는 배경색상으로 변경
  body.style.backgroundColor = 색상;
}
