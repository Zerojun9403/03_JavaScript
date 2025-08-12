// const $ = document.querySelector();
// const $$ = document.querySelectorAll();
$(function () {
  $("#signup-btn").click(singFn);
});

function singFn() {
  const username = $("#username").val();
  const useremail = $("#useremail").val();

  const user = {
    name: username,
    email: useremail,
  };

  localStorage.setItem("userInfo", JSON.stringify(user));
  alert(
    "회원가입이 완료되었습니다. 로그인이 된 상태로 마이 페이지로 이동합니다."
  );

  // 올바른 세션 스토리지 저장
  sessionStorage.setItem("loggedInUser", JSON.stringify(user));

  // 올바른 페이지 이동
  window.location.href = "31_마이페이지.html";
}
