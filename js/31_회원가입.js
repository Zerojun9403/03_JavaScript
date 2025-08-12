// const $ = document.querySelector();
// const $$ = document.querySelectorAll();
$(function () {
  $("signup-btn").click(singFn);
});

function singFn() {
  const username = $("#user-neme").val();
  const useremail = $("#user-email").val();

  const user = {
    //local에 저장할 변수 이름 : js로 사용자가 작성한 html input 안에 들어있는 value=값을 갖고 있는 변수 이름
    name: username,
    email: useremail,
  };
  localStorage.setItem("userInfo", JSON.stringify(user));
  //alert("회원가입이 완료되었습니다. 로근인 페이지로 이동합니다.");
  alert(
    "회원가입이 완료되었습니다. 로그인이 된 상태로 마이 페이지로 이동합니다."
  );

  //seesion 스토리지에 로그인 정보를 저장하다
  sessionStorage.setItem("loggedInUser".JSON.stringify(user));

  //로그인이 완료되면 마이페이지로 이동
  window.localStorage.href = "31_마이페이지.html";
}
