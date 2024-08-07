const inputField = document.getElementById("input-field");
const addTaskBtn = document.getElementById("add-item");
const taskList = document.querySelector("ul");

window.onload = () => {
  if (localStorage.length === 0) {
    console.log(localStorage.length);
  } else {
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        let li = document.createElement("li");
        li.textContent = localStorage.getItem(key);
        taskList.appendChild(li);
        console.log(localStorage.length);
      }
    }
  }
};

function addTask(val) {
  localStorage.setItem(val, val);
  let li = document.createElement("li");
  li.textContent = val;
  taskList.appendChild(li);
  inputField.value = "";
}

addTaskBtn.addEventListener("click", () => addTask(inputField.value));
