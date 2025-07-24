/*
        
            주문완료기능을 이용해서 switch  case  으로 주문완료
        */

// id="menuSelect"

//const를 이용해서 아이디 값 가져오기 id 위치(요소 나 태그)를 바라보거나, value값을 확인할때는 let보다는 const사용하는것이 바람직함

let orders = ""; //let orders 내 값이 존재하지 않기 때문에 undefined
let 주문번호 = 0; // 카운터 기능 추가
function 주문추가기능() {
  const menu = document.getElementById("menuSelect").value;
  // 고객이 원하는 메뉴를 주문하는 것은 다양한 선택지가 존재하기 때문에
  // let을 사용하는것
  let foodName, price;
  //애초에 빈 공간임을 개발자의 눈으로 확인하길 원한다면
  // let orders=""; 와 같은 형식으로 작성해놓을수 있음
  switch (menu) {
    case "1":
      foodName = "피자";
      price = 15000;
      break;
    case "2":
      foodName = "치킨";
      price = 18000;
      break;
    case "3":
      foodName = "햄버거";
      price = 8000;
      break;
    case "4":
      foodName = "음료";
      price = 3000;
      break;
    default:
      alert("선택후 주문해주세요.");
      break;
  }

  // 주문 추가

  // ++ 주문번호는 주문을 1개 추가한 상태에서
  // 현재 주문이 어디까지 진행됐는지 바로 확인

  // 주문번호++는 주문이 추가되기 전 상태를 확인
  orders = ` ${orders} ${foodName} - ${price}원* ${++주문번호} 개<br>`;

  //주문에 대한 결과를 화면에 보여주기
  document.getElementById("result").innerHTML = orders;
  /*
        document.getElementById("result").innerHTML = `
        <h3>주문목록</h3>
        ${foodName}<hr/>
        <p>${price}원</p>
        `;*/
}

// 주문초기화 기능
function 주문초기화() {
  orders = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("menuSelect").value = "";
}

function 주문완료기능() {
  if (orders === " ") {
    alert("주문한 내역이 없습니다");
  } else {
    alert("주문이 완료되었습니다.");
  }
  // 주문을 완료하고 orders 비우기
  주문초기화();
}
