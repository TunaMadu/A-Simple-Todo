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
  <button class = "action-btn" id="" >Important</button>
  <button class = "action-btn" id = "edit" >Edit</button>
  <button class = "action-btn" id = "remove" >Remove</button>
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

const buttonLogic = function (e, triggerEvent, element) {
    if (e.target.getAttribute('id') === '') {
        enableImportant(element.parentElement, element.firstElementChild);
    } else if (e.target.getAttribute('id') === 'important-button') {
        disableImportant(element.parentElement, element.firstElementChild);
    }

    const adjacentParentContainer = element.previousElementSibling;

    //edit button
    if (e.target.getAttribute('id') === 'edit' && !triggerEvent) {
        e.target.innerText = 'Save';
        adjacentParentContainer.firstElementChild.removeAttribute('readonly');
        triggerEvent = true;
    } else if (e.target.getAttribute('id') === 'edit' && triggerEvent) {
        e.target.innerText = 'Edit';
        adjacentParentContainer.firstElementChild.setAttribute(
            'readonly',
            'readonly'
        );
        triggerEvent = false;
    }

    //remove button
    if (e.target.getAttribute('id') === 'remove') {
        element.parentElement.remove();
    }
};

/**
 * Main app logic.
 */

function app() {
    let form = document.querySelector('#form-section');
    let inputField = document.querySelector('#task-input');
    let tasks = document.querySelector('.tasks');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (inputField.value === '') return;

        // creates new task
        tasks.innerHTML += createNewtask(inputField.value);

        //clear input field
        inputField.value = '';

        // button selector
        const actionButtons = document.querySelectorAll('.actions');
        let triggerEvent = false;

        actionButtons.forEach((element) => {
            element.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON') return;
                buttonLogic(e, triggerEvent, element);
            });
        });
    });
}
