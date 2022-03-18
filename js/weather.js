const API_KEY = "458c38fe160add01a2ad90320aadacc5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&lang=ko&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      // const name = data.name;

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없슴당");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
