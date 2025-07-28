      const menuResult = document.getElementById("menuResult");
      const selectBtn = document.getElementById("selectBtn");
      const menuInput = document.getElementById("menuInput");
      const addBtn = document.getElementById("addBtn");
      const validationMessage = document.getElementById("validationMessage");
      const menuItems = document.getElementById("menuItems");
      const menuCount = document.getElementById("menuCount");

      const menus = [
        "곱창",
        "김밥",
        "제육볶음",
        "돈까스",
        "파스타",
        "샐러드",
        "라면",
        "삼겹살",
        "카레라이스",
        "불고기",
        "피자",
        "치킨",
        "쌀국수",
        "감자탕",
        "닭가슴살",
      ];

      // 한글, 영어, 숫자 포함 정규식
      const menuRegex = /^[가-힣a-zA-Z0-9\s]{2,20}$/;

      // 메뉴 목록 화면에 표시
      function displayMenus() {
        menuItems.innerHTML = "";
        /*
        
        createElement = 태그 내부에 추가로 태그 및 요소 넣을수 있음 
        forEach = 각 배열의 요소에 대한 주어진 함수를 한번씩 실행하는 배열 메서드
        예를 들어
        const 과일들=["사과","바나나","오렌지"];
        내부에 존재하는 과일들을 한번씩 모두 출력 하는 향상된for문 
        사용방법
        과일들.forEach((과일)=>{ 
            //과일을 한번씩 꺼냈을때 실행할 기능들 작성
            // 주로 배열에서 index 대신에 가볍게 문자열을 순회하여 출력할 때 많이 사용    
        })
        */ 
        menus.forEach(menu => {
          const menuItem = document.createElement("div");
          menuItem.className = "menu-item";
          menuItem.textContent = menu;
          menuItems.appendChild(menuItem);
        });
        menuCount.textContent = menus.length;
      }

      //displayMenus() 만들어진 기능을 
      // html 화면이 보이자 마자 사용하도록 호출
      displayMenus();


      // 랜덤Math.random 사용해서 메뉴 랜덤으로 선택하기 


      // 뽑기 버튼에 해당하는 selectBtn 에 클릭했을때 
      // 현재 메뉴목록에 작성된 메뉴를 랜덤으로 선택하기 
      selectBtn.addEventListener("click", function(){
        // 만약에 length === 0 이라면 

        if(menus.length === 0){
            alert("선택할 메뉴가 없습니다.");
            return;
        } else {
             const randomNumber = Math.floor(Math.random() * menus.length);
            console.log("randomNumber : ", randomNumber);
            menuResult.textContent = menus[randomNumber];
        }
        // 선택할 메뉴가 없습니다. alert 띄운후 
        // retutn; 으로 되돌려 보내기

        // 메뉴가 존재한다면 랜덤함수 사용해서 
        //const selectedMenu= menu[랜덤번호] 로 메뉴 선택할수 있도록 설정
        //menuResult 에 selectedMenu 글씨가 보이도록 설정

      })