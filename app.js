const xxxx = document.querySelector("div.yyyy:first-child h1");

function handleTitleClick() {
  xxxx.style.color = "blue";
}

function handleMouseEnter() {
  xxxx.innerText = "'ㅁ'";
}

function handleMouseLeave() {
  xxxx.innerText = "'^'";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "wheat";
}

function handleWindowCopy() {
  alert("카ㅏ피!");
}

function handleWindowOffline() {
  alert("와 없 찐");
}

function handleWindowOnline() {
  alert("있네");
}

xxxx.addEventListener("click", handleTitleClick);
// ===== xxxx.onclick = handleTitleClick

xxxx.addEventListener("mouseenter", handleMouseEnter);
// ===== xxxx.onmouseenter = handleMouseEnter

xxxx.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
