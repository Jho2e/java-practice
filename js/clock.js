const clock = document.querySelector("h2#clock"); // id가 clock인 h2

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${Seconds}`;
}

getClock();
setInterval(getClock, 1000); //초마다 반복 == 실시간으로 시간을 보여줌
