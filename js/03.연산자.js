//변수선언
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

  alert("number1의 값" + number1);
  alert("number1의 값" + number2);
}
