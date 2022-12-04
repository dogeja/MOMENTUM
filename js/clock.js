const clock = document.querySelector("#clock");

// padStart에 대하여.
// x.padStart(3,"0") 
// == 문자열 x의 length가 3미만이라면 3자리까지 앞에 문자열 "0"을 채워라



function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"),
        minutes = String(date.getMinutes()).padStart(2,"0"),
        seconds = String(date.getSeconds()).padStart(2,"0");
        // padStart는 string, 즉 문자열에만 사용이 가능하므로 string으로 변환후 뒤에 적어줘야함.
        if(hours>=12){
            const afterNoonHours = String(date.getHours()-12).padStart(2,"0");
            clock.innerText=` ${afterNoonHours}:${minutes}PM`;

        }else{
            clock.innerText=`${hours}:${minutes}AM`;

        }
    // innerText 대문자주의

    const lightingdaytime = document.querySelector(".daystatus");
    
    if(hours>=6 && hours<11){
        lightingdaytime.classList.remove("night");
        lightingdaytime.classList.add("morning");
    }else if(hours>=11 && hours<5){
        lightingdaytime.classList.remove("morning");
        lightingdaytime.classList.add("day");
    }else if(hours>=5 && hours<8){
        lightingdaytime.classList.remove("day");
        lightingdaytime.classList.add("noon");

    }else{
        lightingdaytime.classList.remove("noon");
        lightingdaytime.classList.add("night");
    }

}



getClock();


// 여기서 함수불러와서 웹페이지 로드하자마자 시작되는걸로 보여줌
setInterval(getClock,1000);
// setInterval은 (실행하고싶은 함수, ms단위)로 반복 실행해줌

