const inputField = document.getElementById("input-field");
const addTaskBtn = document.getElementById("add-item");
const taskList = document.querySelector("ul");

function addTask(val) {
  localStorage.setItem(val, val);
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = val;
  let rmBtn = document.createElement("button");
  rmBtn.classList.add("rm");
  li.appendChild(span);
  li.appendChild(rmBtn);
  rmBtn.textContent = "delete";
  taskList.appendChild(li);

  inputField.value = "";
  let rms = document.querySelectorAll(".rm");
  rms.forEach((elem) => {
    elem.onclick = () => {
      console.log(elem.parentElement.firstChild);
      localStorage.removeItem(elem.previousElementSibling.textContent);
      elem.parentElement.remove();
    };
  });
}

addTaskBtn.addEventListener("click", () => addTask(inputField.value));

window.onload = () => {
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      addTask(localStorage.getItem(key));
    }
  }
};
