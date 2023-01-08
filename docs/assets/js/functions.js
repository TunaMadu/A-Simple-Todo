/**
 * Will run the main logic once everything is loaded on DOM
 */

document.addEventListener('DOMContentLoaded', app);

/**
 * Will create a new task and will set the input value given by its @param
 * @param {text} input will be from the user
 * @returns will string containg html to be appended
 */

const createNewtask = function (input) {
    return `<div class="task" id="">
  <div class="task-content">
  <input type="text" value ="${input}" class="userInput" readonly />
  </div>
  <div class="actions">
  <button class = "action-btn" id="">Important</button>
  <button class = "action-btn" >Edit</button>
  <button class = "action-btn" >Remove</button>
  </div>
  </div>`;
};

const disableImportant = function (parentElem, childElem) {
    parentElem.id = '';
    childElem.id = '';
};

const enableImportant = function (parentElem, childElem) {
    parentElem.id = 'important-task';
    childElem.id = 'important-button';
};

/**
 * Main app logic.
 */

function app() {
    let form = document.querySelector('#form-section');
    let inputField = document.querySelector('#task-input');
    let tasks = document.querySelector('.tasks');

    // creates arrays to store regular tasks and important tasks separately
    let taskArray = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (inputField.value === '') return;

        // creates new task
        tasks.innerHTML += createNewtask(inputField.value);
        taskArray.push(tasks.lastElementChild);

        //clear input field
        inputField.value = '';

        // button logic
        const actionButtons = document.querySelector('.actions');

        //important button
        //TODO the button logic is giving me some issues though i think it has to deal with even delagation and just dom concepts in general!
        // actionButtons.addEventListener('click', (event) => {

        //     if (actionButtons.parentElement.id === 'important-task') {
        //         disableImportant(
        //             actionButtons.parentElement,
        //             actionButtons.firstElementChild
        //         );
        //     } else {
        //         enableImportant(
        //             actionButtons.parentElement,
        //             actionButtons.firstElementChild
        //         );
        //     }
        // });

        // // remove button

        // // will remove the task in array
        // removeButton.addEventListener('click', () => {
        //     for (let i = 0; i < taskArray.length; i++) {
        //         let checkImpTaskLength = importantTaskArray.length >= 1;
        //         if (checkImpTaskLength && importantTaskArray[i] === newTask) {
        //             importantTaskArray.splice(i, 1);
        //         }

        //         if (taskArray[i] === newTask) {
        //             taskArray.splice(i, 1);
        //         }
        //     }
        //     newTask.remove();
        // });

        // // edit button
        // editButton.addEventListener('click', () => {
        //     if (editButton.innerText === 'Edit') {
        //         editButton.innerText = 'Save';
        //         newTaskText.removeAttribute('readonly');
        //     } else {
        //         newTaskText.setAttribute('readonly', 'readonly');
        //         editButton.innerText = 'Edit';
        //     }
    });
}
