const images = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");
// <img>태그를 생성

bgImg.src = `image/${chosenImage}`;
// <img.src = "image/x.jpeg"> 태그 생성
document.body.appendChild(bgImg);
// bgImg를 body에 추가 중요!!!!
// append 맨 뒤에 prepend 맨 앞에