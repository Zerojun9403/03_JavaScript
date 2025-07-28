/* 클릭한 숫자를 10글자 까지만 기록하기 */
// 1. select all number id 모두 배열로 가져오기
const numers = document.querySelectorAll(".number");
// 2. id값을 restult 로 가져오기 
const restult = document.getElementById("result");


for(let i=0; i<numers.length; i++ ){
    /*
     아래 방법 모두 가능 / 개발자가 편한 방식으로 사용하면 됨.

    numers[i].addEventListener("click", function(){
        restult.textContent += this.textContent;
        // functon 을 사용할때는 this 사용할수 있음 
        // addEventListener 앞에있는 numers[i] 를 this로 대신 작성가능
    }
    numers[i].addEventListener("click", ()=>{
        restult.textContent += this.textContent;}
        // function 이 없기 때문에 this를 사용할 수 없음!!
        // addEventListener 앞에 있는 요소 명칭을 직접적으로 작성

    numers[i].addEventListener("click", e=>{
        reuslt.textContent += e.target.textContent;
        // function 이 없기 때문에 this를 사용불가
    }
    
    */ 

    numers[i].addEventListener("click", ()=>{

        if(restult.textContent.length ==10){
            alert("10글자까지만 입력 가능");
         return;

         
        }
        restult.textContent += this.textContent;
    });
};



// 2탄 초기화 버튼 클릭하면 result 내부의 값 없애기 
const reset = document.getElementById("resetBtn");
reset.addEventListener("click", ()=>{
    restult.textContent = "";
});
