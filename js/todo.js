const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// == .document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todolistkey";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const wantDelete = event.target.parentElement;
  wantDelete.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(wantDelete.id));
  saveToDos();
}

function paintToDo(yyy) {
  const createLi = document.createElement("li");
  createLi.id = yyy.id;
  const createSpan = document.createElement("span");
  createSpan.innerText = yyy.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);

  createLi.appendChild(createSpan);
  createLi.appendChild(deleteButton);
  toDoList.appendChild(createLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const getSaveToDo = localStorage.getItem(TODOS_KEY);

if (getSaveToDo !== null) {
  const parsedToDos = JSON.parse(getSaveToDo);
  // 단순 string을 array로 변환시켜주어서 우리가 사용할수 있게해줌
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  /* 위 한줄은 이걸 하는것과 같음
    function sayHello(item) {
      console.log("hello hello", item);
    }*/
}
