function plusFn() {
  //document(문서)
  //get
  //Element
  //ById

  //-> html 문서내에서 ()내 아이다가 일치하는 요소를 얻어오겠다.
  const number1 = document.getElementById("input1").value;
  //const number1 = document.getElementById("input1").value;
  // html 문서 내에서 가져오겠다 태그(요소) id값  (인풋1). 인풋내에서 작성한 값

  const number2 = document.getElementById("input2").value;
  // 글자와 숫자사이에 +를 작성하면 더하기가 아니라 이어 붙이기기ㅏ 됨
  // 코드를 실행하는중간에 문제가 발생하면 문제를 건너뛰어서 다른것이 실행하는것이 아니라
  // 문제가 발생 한 지점에서 실행 멈춤
  alert("number1의 값" + number1);
  alert("number1의 값" + number2);
  /* input 요소에 작성된 값은 무조건 문자열 형태라서 더했을때 이어쓰기되는 문제가 있다. 
        
        [해결방안]
        형변환 
        
        */
  alert(Number(number1) + Number(number2));

  /*
      두수의 합을 id가 "계산결과" 인 요소(결과 변수) 의 
      내부 글자로 대입하기
      */
  //result 뒤에는 소비자가 작성한 계산값이 아니라 우리가 더해준 계산 결과가 들어가야 하기때문에
  //.value를 붙여주지않음
  const result = document.getElementById("계산결과");
  result.innerText = Number(number1) + Number(number2);
}
