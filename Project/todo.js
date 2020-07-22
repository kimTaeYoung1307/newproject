const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDOinfo = document.querySelector("#info"),
  toDoDinfo = document.querySelector("#Dinfo");
const label = document.querySelector(".label__content");
const TEXT = document.querySelector(".TEXT");

let SW = 0;
const TODOS_LS = "toDos";
let TODOS = [];

function deleteTodo(event) {
  toDOinfo.innerText = `할 일 목록  ${TODOS.length - 1}`;
  console.log(TODOS.length);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleenToDos = TODOS.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });

  TODOS = cleenToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(TODOS));
}

function paintTodo(text) {
  const Li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "x";
  delBtn.addEventListener("click", deleteTodo);
  const span = document.createElement("span");
  const inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";
  inputCheckBox.className = "checkBox";
  const newid = TODOS.length + 1;
  span.innerText = text;
  toDOinfo.innerText = `할 일 목록  ${TODOS.length + 1}`;
  Li.appendChild(inputCheckBox);
  Li.appendChild(span);
  Li.id = newid;
  Li.appendChild(delBtn);
  toDoList.appendChild(Li);
  const ToDoObj = {
    text: text,
    id: newid,
  };
  TODOS.push(ToDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currrentvalue = toDoInput.value;
  paintTodo(currrentvalue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

function clickInput() {
  toDoInput.removeAttribute("placeholder");
  toDoInput.classList.add("clickInput");
}

function labels() {
  if (SW === 0) {
    label.style.transition = "all 0.2s ease";
    label.style.display = "flex";

    TEXT.style.display = "flex";

    SW = 1;
  } else {
    label.style.display = "none";

    TEXT.style.display = "none";
    SW = 0;
  }
}

function init() {
  loadToDos();
  toDOinfo.addEventListener("click", labels);
  toDoForm.addEventListener("submit", handleSubmit);
  toDoInput.addEventListener("click", clickInput);
}

init();
