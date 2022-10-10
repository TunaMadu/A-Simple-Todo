document.addEventListener("DOMContentLoaded", () => {
  // we should select the content in the input and make a new task

  let form = document.querySelector("#form-section");

  let inputField = document.querySelector("#task-input");
  let tasks = document.querySelector(".tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputField.value === "") {
      return;
    }

    let newTaskText = document.createElement("input");
    newTaskText.classList.add("userInput");
    newTaskText.type = "text";
    newTaskText.value = inputField.value;
    newTaskText.setAttribute("readonly", "readonly");

    let textContainer = document.createElement("div");
    textContainer.classList.add("task-content");

    textContainer.appendChild(newTaskText);

    let importantButton = document.createElement("button");
    importantButton.innerText = "Important";

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    let actions = document.createElement("div");
    actions.classList.add("actions");

    actions.appendChild(importantButton);
    actions.appendChild(editButton);
    actions.appendChild(removeButton);

    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.appendChild(textContainer);
    newTask.appendChild(actions);

    tasks.appendChild(newTask);
    inputField.value = "";

    // lets begin with the important

    importantButton.addEventListener("click", () => {
      if (newTask.id === "important-task") {
        newTask.id = "";
        importantButton.id = "";
      } else {
        newTask.id = "important-task";
        importantButton.id = "important-button";
      }
    });

    // remove button

    removeButton.addEventListener("click", () => {
      newTask.remove();
    });

    // edit button

    editButton.addEventListener("click", () => {
      if (editButton.innerText === "Edit") {
        editButton.innerText = "Save";
        newTaskText.removeAttribute("readonly");
      } else {
        newTaskText.setAttribute("readonly", "readonly");
        editButton.innerText = "Edit";
      }
    });
  });
});
