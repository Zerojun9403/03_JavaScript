const input2 = document.getElementById("input2");

function 체크2() {
  const val = Number(input2.value);
  if (val > 0) {
    alert("양수입니다.");
  } else {
    alert("음수입니다.");
  }
}

const input1 = document.getElementById("input1");

//양수인지 검사하는 기능 설정

function 체크1() {
  const val = Number(input1.value);

  // 만약에 클라이언트가 입력한 숫자값이 0보다 클 경우 = true
  if (val > 0) {
    alert("클라이언트가 입력한 숫자는 0보다 큰 양수입니다.");
  }

  //만약에 클라이언트카 입력한 숫자 값이 0이랑 같거나 0보다 작을 경우 = true
  if (val <= 0) {
    alert("클라이언트가 입력한 숫자는 0과 같거나 음수입니다.");
  }
}
