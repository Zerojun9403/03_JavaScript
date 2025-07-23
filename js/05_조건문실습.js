function 잔액확인하기() {
  //1. 친구가 빌려 달라는 금액 자바 스크립트에서 확인
  // 2. 만약에 친구가 빌려다는 금액이 5,000원 이상이면 잔액이 없어서 힘들거 같아
  //     5,000원 이하면 언제까지 돌려줄수 있는지 알려줘^^보냄.

  const ch = document.getElementById("input1").value;
  alert(ch);

  if (ch >= 5000) {
    alert("잔액이없어서 힘들거 같아");
  } else {
    alert("언제까지 돌려줄수 있는지 알려줘^^");
  }
}

function 홀짝기능() {
  const input2 = document.getElementById("input2");
  const val2 = Number(input2.value);
  if (val2 % 2 == 1) {
    alert("홀수입니다.");
  } else {
    alert("짝수입니다.");
  }
}

const 인풋3 = document.getElementById("input3");

function 주행거리계산기능() {
  const amount = Number(인풋3.value);
  if (amount <= 3) {
    alert("주행거리 비용은 3,000원입니다.");
  } else if (amount < 10) {
    alert("주행거리 비용은 8,000원입니다");
  } else {
    alert("주행거리 비용은 20,000입니다");
  }
}

const inputAge = document.getElementById("inputAge");
function 체크4() {
  const 받아온나이값 = Number(inputAge.value);

  if (받아온나이값 < 0 || 받아온나이값 > 150) {
    alert("잘못입력하셨습니다.");
  } else if (받아온나이값 >= 0 && 받아온나이값 <= 13) {
    alert("어린이");
  } else if (받아온나이값 <= 19) {
    alert("청소년");
  } else {
    alert("성인");
  }
}
