
        // 1. const elementByID로  모든 HTML JavaScript 로 변경 
        const randomDog = document.getElementById("randomDog");
        const result = document.getElementById("result");
        const content = document.getElementById("content");
        randomDog.addEventListener("click",() =>{

            content.innerHTML='<div class="loading">귀여운 강아지를 찾는중</div>';
        
            fetch("https://api.thedogapi.com/v1/images/search")
            .then(response => response.json())
            .then(data=>{

                /*
                데이터가 중괄호가 아닌 [] 괄호 형태로 시작하면 대부분 배열, 리스트 목록 형태의데이터 
                data를 활용할때는 data[0]가져오고 싶은 index번호를 사용
                    [
                        {
                        "id": "bpi",
                        "url": "https://cdn2.thedogapi.com/images/bpi.jpg",
                        "width": 538,
                        "height": 717
                        }
                    ]
                                    
                
                
                */
                // console.log("data : ",data);
                content.innerHTML=`
                <sting>id :  <string>${data[0].id}<br>
                <sting>URL 주소 확인:<string> ${data[0].url}<br>
                <img src= "${data[0].url}" alt="귀여운 강아지" class="cat-image"> 
                `;
            });
        })
/** TODO 코드 작성해야하거나, 코드 설명, 코드 내용 포함 주소 
 * 
 * parse() jaon() 메서드 차이!
 * 
 * JSON.parse() 
 * JavaScript 의 내장 메서드 
 * JSON 문자열 JavaScript 객체로 변환
 * 동기적 처리 
 * 
 * respones.json()
 * FatchAPI의 Response 객체 메서드
 * URL 응답 본문을 JSON 으로 받아 JavaScrtpt 객체로 변환
 * 비동기적 처리
 * 
 * 동기  : 은행 변호표 업무 순차적으로 시작하고 종료 
 *          직렬 업무 형태
 * 
 * 
 * 비동기 : 카페주문 카페주문을 먼저 했지만 뒤에 있는 사람의 의료가 먼저 나오기도 함
 *                  카페 주문을 기다리며 다른 업무를 할 수 있음
 *          병렬 업무 형태
 * */ 