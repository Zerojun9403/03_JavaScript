const display = document.querySelector("#display");
const list = document.querySelectorAll("#display > span");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#record-Container");

let count = 0; // 1/100 초 마다 1씩 증가한 값을 저장할 변수

// 1/100 초 : count % 100
//1      초 : count /100 % 60
//1      분 : count /100 / 60

let currInterval; // 인터벌 저장 변수이름

// startBtn 버튼 클릭시 10ms 마다 display(시간)을 증가 0.01초

startBtn.addEventListener("click", (e) => {
  // 클릭한 버튼에 작성된 내용이 PAUSE 인경우
  if (e.target.textContent == "PAUSE") {
    e.target.textContent = "START";
    window.clearInterval(currInterval);
    return;
  }
  // 클릭한 버튼에 작성된 내용이 START 인경우
  currInterval = window.setInterval(() => {
    count++; // 1초 씩 증가
    output(); // 화면에 시간출력하는 기능 (실습코드에 존재)
  }, 10); // 10ms


  e.target.textContent ="PAUSE"; // 카운트 시작 중에 정지하고 싶으면 정지할 수 있도록 버튼 내부 PAUSE변경
});


/* 시계 출력 함수 */
function output() {
  let minute = Math.floor(count / 100 / 60);
  let second = Math.floor((count / 100) % 60);
  let ms = count % 100;

  // 0 붙여서 문자열로 변환해서 반환
  minute = attachZero(minute);
  second = attachZero(second);
  ms = attachZero(ms);

  // minute의 값과 화면에 출력된 분이 다를 경우
  if (list[0].innerText != minute) list[0].innerText = minute;

  // second의 값과 화면에 출력된 초가 다를 경우
  if (list[1].innerText != second) list[1].innerText = second;

  list[2].innerText = ms;
}

/* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attachZero(num) {
  if (num < 10) {
    // 한 자리 숫자인 경우
    return "0" + num;
  }
  return "" + num;
}

/* RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", () => {
  // currInterval 제거
  window.clearInterval(currInterval);

  // count, 출력된 시간 모두 0으로
  count = 0;
  output();

  // start 버튼 활성화 ( == 비활성화 안하겠다)
  //startBtn.disabled = false;

  // START 버튼의 내용을 "START"로 변경
  startBtn.textContent = "START";

  // #recordContainer의 내용을 모두 삭제(== 빈 문자열로 변경)
  recordContainer.innerHTML = "";
});
