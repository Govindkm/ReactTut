const addBtn = document.getElementById("addBtn");
const input = document.getElementsByTagName("input")[0];
const ul = document.getElementById("card");
let todolist = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let item = listItem(input.value);
  todolist.push(item);
  card.appendChild(item);
});

function listItem(innerText) {
  let item = document.createElement("li");
  item.classList.add("list-group-item");
  item.innerText = innerText;
  return item;
}

card.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-group-item")) {
    e.target.style.textDecoration = "line-through";
  }
});
