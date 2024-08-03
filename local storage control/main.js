const inputField = document.querySelector("input");
const addItem = document.getElementById("add-item");
const removeItem = document.getElementById("delete-item");
const checkItems = document.getElementById("check-items");
const clear = document.getElementById("clear");
const showItems = document.getElementById("show-items");
const result = document.querySelector("p");

// ============================================================

function addToStore(val) {
  localStorage.setItem(val, val);
  console.log(val);
  result.textContent = `'${localStorage.getItem(
    `${val}`
  )}' was added to local storage`;
}

function removeFromStore(val) {
  for (const key in localStorage) {
    if (localStorage[key] === val) {
      localStorage.removeItem(key);
      result.textContent = `'${val}' was removed from local storage`;
      break;
    } else {
      result.textContent = "this item does not exist in local storage";
    }
  }
}

function checkStore(val) {
  for (key in localStorage) {
    if (localStorage[key] === val) {
      result.textContent = "this item does exist in local storage";
      break;
    } else {
      result.textContent = "this item does not exist in local storage";
    }
  }
}

function showStor() {
  result.textContent = "";
  for (let i = 0; i < localStorage.length; i++) {
    let div = document.createElement("div");
    div.textContent = localStorage.key(i);
    result.appendChild(div);
  }
}

// =======================================================================

addItem.addEventListener("click", () => addToStore(inputField.value));

removeItem.addEventListener("click", () => removeFromStore(inputField.value));

checkItems.addEventListener("click", () => checkStore(inputField.value));

showItems.addEventListener("click", showStor);

clear.addEventListener("click", () => {
  localStorage.clear();
  result.textContent = "local storage was cleared";
});
