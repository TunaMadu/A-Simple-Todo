document.addEventListener("DOMContentLoaded", () => {
  // we should select the content in the input and make a new task

  let form = document.querySelector("#form-section");

  let inputField = document.querySelector("#task-input");
  let tasks = document.querySelector(".tasks");

  // creates arrays to store regular tasks and important tasks separately
  let taskArray = [];
  let importantTaskArray = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputField.value === "") {
      return;
    }
    //creates a new task
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
    //

    taskArray.push(newTask);

    // button logic

    //important button
    importantButton.addEventListener("click", () => {
      if (newTask.id === "important-task") {
        // this will remove the task that is no longer important
        for (let i = 0; i < importantTaskArray.length; i++) {
          if (importantTaskArray[i] === newTask) {
            importantTaskArray.splice(i, 1);
          }
        }
        newTask.id = "";
        importantButton.id = "";
      } else {
        importantTaskArray.push(newTask);
        newTask.id = "important-task";
        importantButton.id = "important-button";
      }
    });

    // remove button

    // will remove the task in array
    // since arrays in js are not fixed we can also check if the element at i is in the important task array as well,
    // we will not get a out of bound but simply a undefined value!
    removeButton.addEventListener("click", () => {
      for (let i = 0; i < taskArray.length; i++) {
        let checkImpTaskLength = importantTaskArray.length >= 1;
        if (checkImpTaskLength && importantTaskArray[i] === newTask) {
          importantTaskArray.splice(i, 1);
        }

        if (taskArray[i] === newTask) {
          taskArray.splice(i, 1);
        }
      }
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