
    const inputName =document.getElementById("inputName");
    const nameResult =document.getElementById("nameResult");

    inputName.addEventListener("input",(e)=>{

        /* input 이벤트 : 입력과 관련된 모든 행동
        (단, 어떤 키로 입려갷ㅆ는지 컴퓨터가 알 수 없음*/
        // 입력된 값을 얻어오기
        const val = e.target.value;

        if(val.trim().length==0){
            nameResult.textContent="";
            return;
        }



        const regExp=/^[가-힇]{2,5}$/;
        /*
        정규식객체.test(문자열)  : 
        - 문자열이 정규식에 일치하면 true
        - 아니면 fales

        */
        if(regExp.test(val)){
            // 소비자가 작성한 값이[가-힁]이고 2~5 글자이면 
            nameResult.textContent = "유효한 이름입니다.";
            nameResult.style.color = "green";
        } else{
            nameResult.textContent = "유효하지 않은 이름입니다.";
            nameResult.style.color = "red";
        }
    });

    const inputPhone = document.getElementById("inputPhone");
    const phoneResult = document.getElementById("phoneResult");

    inputPhone.addEventListener("input", e=> {
        const value = e.target.value; // 입력한 값

        /* 정규식을 이용한 핸드폰 번호 검사*/
        // 앞자리는 010,011,016,017,019 가능
        // - 다음에 오는 \d 숫자는 3자리 또는 4자리만 가능
        // - 다음에 오는 \d 숫자는 4자리만 가능 
        // /^정규식시작 정규식종료$/    
        const regExp = /^01[01679]-\d{3,4}-\d{4}$/;


    if(regExp.test(value)){
        // 입력 받은 값이 정규식이 일치하면
        phoneResult.textContent = "유요한 번호 형식입니다.";
        phoneResult.classList.add("check");
        phoneResult.classList.remove("uncheck");
        
    }else{
        phoneResult.textContent = " 번호가 유효하지 않습니다.";
        phoneResult.classList.add("uncheck");
        phoneResult.classList.remove("check");
    }


    });

