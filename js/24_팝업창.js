// # 을 제거한 메서드를 이용해서 사용 querySelector -> id(getElementById)값 사용 가능한 형태로 변경

const result = document.getElementById("result");
// #result 에 부모창 #result 에 작성된 값 얻어와 출력하기

/**
 * opener : 팝업을 연 창 (== 부모창)
 *        : 나를 열어준 부모 창에 DOM(document html 파일 문서) 에 접근하거나
 *          부모 창의 javaScript 함수를 실행하는등 부모 창을 제어 할 수 있음
 *          부모 창 = html 파일 window.open() 사용해서 팝업창을 여는 창
 *          자식 창 = 새로 열린 팝업창 입장에서 나를 만들어준 부모를 찾아가는 연결고리
 *                  opener 를 통해 부모창의 요소에 값을 사용하거나
 *                  opener.document.querySelector() 부모 창의 변수이름을 읽을 수 있음
 */

/**
 * jQuery value 뒤에 val() 소괄호를 붙임
 * value : 기본 자바스크립트에서 value 속성이므로 ()를 붙이면 안됨!!!!!
 */
const readValue = opener.document.getElementById("readValue").value;

result.textContent = readValue;

/*
#send 버튼 클릭시 
#childInput 값을 얻어와
부모창 #writeValue의 값으로 대입한후 
팝업창 닫기

id 명칭이나 name명칭을 한글로 쓰는 경우 
인식을 가끔 못할 수 있기에 영어로 작성해주는것이 좋음
*/

const send = document.getElementById("#send");
const childInput = document.getElementById("#childInput");

send.addEventListener("click", () => {
  opener.document.getElementById("writeValue").value = childInput.value;

  window.close();
});
