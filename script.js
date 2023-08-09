const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);
  }

  inputBox.value = "";
}

listContainer.addEventListener("click", (event) => {
  const { target } = event;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.tagName === "SPAN") {
    target.parentElement.remove();
  }
});
