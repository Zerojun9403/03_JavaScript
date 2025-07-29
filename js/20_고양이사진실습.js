  
        // 1. const elementByID로  모든 HTML JavaScript 로 변경 
        const randomCat = document.getElementById("randomCat");
        const result = document.getElementById("result");
        const content = document.getElementById("content");
        randomCat.addEventListener("click",() =>{
            fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data=>{

                /*
                데이터가 중괄호가 아닌 [] 괄호 형태로 시작하면 대부분 배열, 리스트 목록 형태의데이터 
                data를 활용할때는 data[0]가져오고 싶은 index번호를 사용
                    [
                        {
                        "id": "bpi",
                        "url": "https://cdn2.thecatapi.com/images/bpi.jpg",
                        "width": 538,
                        "height": 717
                        }
                    ]
                                    
                
                
                */
                console.log("data : ",data);
                content.innerHTML=`
                <sting>id:<string>${data[0].id}<br>
                <sting>URL 주소 확인:<string> ${data[0].url}<br>
                <img src= "${data[0].url}" alt="귀여운 고양이" class="cat-image"> 
                `;
            });
        })
   