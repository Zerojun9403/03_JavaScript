// 팝업사이즈 450*200 화면 가운데 위치
const idCheck = document.getElementById("idCheck");
idCheck.addEventListener("click", () => {
  let options = [];
  options.push("width=400");
  options.push("height=600");

  // 팝업창을 가운데로 위치 시키는 방법
  const screen가로 = window.screen.width;
  const screen세로 = window.screen.height;
  // 팝업창을 중앙에 위치시키기 위한 left, top값 계산
  const left = (screen가로 - 400) / 2;
  const top = (screen세로 - 400) / 2;
  /* 팝업창 띄우는 위치를 지정*/
  options.push(`left=${left}`);
  options.push(`top=${top}`);

  // 배열이름 .toString()  :"요소,요소,요소" 처리로
  //배열 내 요소를, 를 구분자로 하여 한 하나의 문자열로 변환
  window.open("28_아이디중복확인.html", "_blank", options);
});
