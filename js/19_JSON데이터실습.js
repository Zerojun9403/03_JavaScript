//1. const elementById 로 모두 HTML JavaScript 연결 설정하기 


 const result = document.getElementById("result");
 const fetchpost = document.getElementById("fetchpost");
 const content = document.getElementById("content");





 //html button type 은 submit 아니라 button 형태로 타입 맞춰주는것이 바람직함. 
 fetchpost.addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) =>  {
   
        console.log("data:", data);
     //innerHTML = <>태그 적용
        //innrerTEXT  =  <>태그도 출력
        content.innerHTML=`
        <strong>userID:</strong>${data.userID}<br>
        <strong>id:</strong>${data.id}<br>
        <strong>title:</strong>${data.title}<br>
        <strong>body:</strong>${data.body}<br>
    
        `;

    });
 });

