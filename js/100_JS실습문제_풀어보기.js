// 안녕하세요 첫번째 함수 클릭했을때 나오게 하기
function 첫번째함수() {
  alert("안녕하세요");
}

function 텍스트변경() {
  const msg = document.getElementById("메시지영역");
  msg.innerText = "새로운 메시지!";
}

function 배경색변경(색상) {
  /*
            document.querySelector("body").style.backgroundColor = 색상;
            document
                .querySelector("body")
                    .style
                        .backgroundColor = 색상;
        */
  const bd = document.querySelector("body");
  bd.style.backgroundColor = 색상;
}

function 인사하기() {
  const name = document.getElementById("이름입력").value;

  const result = document.getElementById("인사결과");
  result.innerHTML = "안녕하세요" + name + "님";

  /*
        innerHTML
            : 내부에서 HTML 태그 인식 하고 처리

        innerText
            : 내부에서 HTML 태그 인식하지 않고 오직 순수한 텍스트 값만 다룸
        
        */

  const testInnerHTML = "<h1>안녕하세요</h1>";
  const testInnerText = "<h1>안녕하세요</h1>";
  alert(testInnerHTML);
  alert(testInnerText);
}

function Inner확인하기() {
  const a = document.getElementById("xInnerHTML");
  const b = document.getElementById("xInnerTEXT");

  a.innerHTML = "<h1>안녕하세요</h1>";
  b.innerText = "<h1>안녕하세요</h1>";
}

function 이미지크기조절(크기) {
  /* 자바스크림트 내에서 작성하는 스타일은 2순위 스타일이기 때문에 사용 지양 */
  document.getElementById("조절이미지").style.width = 크기;
}

function 이미지크기조절2(가로, 세로) {
  /* 자바스크림트 내에서 작성하는 스타일은 2순위 스타일이기 때문에 사용 지양 */
  document.getElementById("조절이미지2").style.width = 가로;
  document.getElementById("조절이미지2").style.height = 세로;
}

function 글자스타일변경(색상, 크기, 굵기) {
  document.getElementById("스타일텍스트").style.color = 색상;
  document.getElementById("스타일텍스트").style.fontSize = 크기;
  document.getElementById("스타일텍스트").style.fontStyle = 굵기;

  /* 
        
        fontStyle = 기울이기 어떤 디자인으로 폰트를 꾸며줄지에 대해 설정
        fontWeight = 폰트의 굵기 100(얇음)~900(두꺼워짐)
                    일반적인 폰트 두께 = 400
                    bold 두께 = 700
        
        
        */
}

function 시간보여주기() {
  /*
        
        Number  = 추후에 만들어진 데이터 타입
                -> 단순히 숫자로 만들고 싶은 문자열 외부를 
                 Number() 라는 글자를 작성하고()로 감싸주면 되는 역할
        
        Date  = 다양한 정보와 기능을 담고있는 설계도 
                new 사용해서 js개발자가 제공하는 기능중에 
                현재 js사용하는 개발자가 필요한 기능만 작성해서 사용
                
        변환/계산 할때는 new 라는 명칭을 사용하지 않음
        새로운 복잡한 것을 만들때는 new 명칭 사용
        
        getMonth()는 0부터 시작하게끔 배치 
            Month 월을 사용할 때는 +1를 붙여주는 것이 관례 
        */
  let 지금 = new Date();
  document.getElementById("시간표시").innerHTML =
    지금.getFullYear() +
    "년" +
    (지금.getMonth() + 1) +
    "월" +
    지금.getDate() +
    "일" +
    지금.getHours() +
    "시" +
    지금.getMinutes() +
    "분";
}

let 정답색상 = "red";
function 게임체크(선택색상) {
  if (선택색상 == 선택색상) {
    document.getElementById("게임결과").innerHTML = "정답입니다.";
  } else {
    document.getElementById("게임결과").innerHTML = "틀렸습니다.";
  }
}
