const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username2 = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username2);
  //  localStorage.setItem("저장할 아이템의 이름", 값 = username 변수);

  /*   greeting.innerText = `로그인 감샤. Hello ${username2} gogo!`;
  //  greeting.innerText = "Hello " + username2;

  greeting.classList.remove(HIDDEN_CLASSNAME); */

  paintGreetings(username2);
}

function paintGreetings(nameOfUser) {
  greeting.innerText = `로그인 감샤. Hello ${nameOfUser}. gogo!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //저장된 유저네임이 없다면 입력창을 보여줘야함 show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 유저네임이 있다면 form은 없애고 greeting을 보여주면됨
  paintGreetings(savedUsername);
}
