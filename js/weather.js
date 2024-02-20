import config from "./config.js";
const { API_KEY } = config;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const cityName = document.querySelector("#weather>span:first-child");
      const weatherStatus = document.querySelector("#weather>span:last-child");

      cityName.innerText = data.name;
      weatherStatus.innerText = `${data.weather[0].main}/${data.main.temp}`;
      console.log(weatherStatus);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
