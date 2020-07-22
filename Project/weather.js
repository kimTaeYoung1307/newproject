const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "2926842108032d67d2b5aaed818c774b";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temps = json.main.temp;
      const place = json.name;
      weather.innerText = `온도 :${temps} 지역: ${place}`;
    });
}

function saveCoords(coordObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSucces(POSITION) {
  const latitude = POSITION.coords.latitude;
  const longitude = POSITION.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoERRO() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoERRO);
}

function loadcode() {
  const loadedcords = localStorage.getItem(COORDS);
  if (loadedcords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedcords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadcode();
}

init();
