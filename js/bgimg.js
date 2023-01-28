const images = ["ran1.png","ran2.png","ran3.png","ran4.png"];
const chosenImg = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");
bgImg.src = `image/${chosenImg}`;
const ranImg = document.querySelector(".imgset");
ranImg.appendChild(bgImg);