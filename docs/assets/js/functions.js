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
    <button class = "action-btn">Edit</button>
    <button class = "action-btn">Remove</button>
    </div>
    </div>`;
};

/**
 *
 * gets the child element that contains the input value on the HTML
 * @param {HTMLDivElement} btnContainer  container that contains the buttons
 * @returns its adajcent sibling's child element that is an input html tag
 *
 */
const getTaskText = function (btnContainer) {
    return btnContainer.parentElement.querySelector('.userInput');
};

/**
 *
 * This will "disable" the imporntant button on the screen, removing the specified
 * CSS classes that contains the styles to show its an important task on the screen
 * @param {HTMLDivElement} btnContainer container that contains the buttons
 * @param {HTMLButtonElement} currentBtn the button that triggered event
 *
 */
const disableImportant = function (btnContainer, currentBtn) {
    btnContainer.parentElement.id = '';
    currentBtn.id = '';
};

/**
 *
 * This will "disable" the imporntant button on the screen, removing the specified
 * CSS classes that contains the styles to show its an important task on the screen
 * @param {HTMLDivElement} btnContainer container that contains the buttons
 * @param {HTMLButtonElement} currentBtn the button that triggered event
 *
 */
const enableImportant = function (btnContainer, currentBtn) {
    btnContainer.parentElement.id = 'important-task';
    currentBtn.id = 'important-button';
};

/**
 *
 * This will be the controller function for @function enableImportant and @function disableImportant
 * will trigger either or depending on the id
 * @param {HTMLDivElement} btnContainer container that contains the buttons
 * @param {HTMLButtonElement} currentBtn will be the "Important" button
 *
 */
const importantButtonController = function (btnContainer, currentBtn) {
    if (currentBtn.id === '') {
        enableImportant(btnContainer, currentBtn);
        return;
    }
    disableImportant(btnContainer, currentBtn);
};

/**
 *
 * Contains the logic for when we click on a button that is "Edit".
 * It will convert the inner text to "Save". Uses @function getTaskText to get the
 * tasks current text. To set its default atribute value of readonly.
 *
 * @param {HTMLDivElement} btnContainer container that contains the buttons
 * @param {HTMLButtonElement} currentBtn will be the "Edit" button
 *
 */
const editButtonLogic = function (btnContainer, currentBtn) {
    currentBtn.innerText = 'Save';
    getTaskText(btnContainer).removeAttribute('readonly');
};

/**
 *
 * Contains logic for when we click on a button that is "Save".
 * It will convert the inner text to "edit". Uses @function getTaskText to get the
 * tasks current text. To set its default atribute value of readonly.
 *
 * @param {HTMLDivElement} btnContainer container that contains the buttons
 * @param {HTMLButtonElement} currentBtn will be the "Save" button
 *
 */
const saveButtonLogic = function (btnContainer, currentBtn) {
    currentBtn.innerText = 'Edit';
    getTaskText(btnContainer).setAttribute('readonly', 'readonly');
};

/**
 *
 * Will remove the task container from the page
 * @param {HTMLDivElement} btnContainer container that contains the buttons
 *
 */
const removeButtonLogic = function (btnContainer) {
    btnContainer.parentElement.remove();
};

/**
 *
 * Button logic controller. uses a switch statement that will trigger
 * @function removeButtonLogic,
 * @function importantButtonController,
 * @function editButtonLogic,
 * @function saveButtonLogic
 * depending on the element's inner text that triggered an event.
 *
 * @param {HTMLDivElement} parent container that will contain buttons
 * @param {HTMLButtonElement} element will be the button that triggered the event
 *
 */
const buttonLogicController = function (parent, element) {
    switch (element.innerText) {
        case 'Remove':
            removeButtonLogic(parent);
            break;
        case 'Important':
            importantButtonController(parent, element);
            break;
        case 'Edit':
            editButtonLogic(parent, element);
            break;
        case 'Save':
            saveButtonLogic(parent, element);
            break;
    }
};

/**
 *
 * Main app logic.
 *
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
    });

    // Event delegation!

    tasks.addEventListener('click', function (e) {
        if (e.target.tagName !== 'BUTTON') return;

        buttonLogicController(e.target.parentElement, e.target);
    });
}

// Will run app once DOM has fnished loading.
document.addEventListener('DOMContentLoaded', app);
