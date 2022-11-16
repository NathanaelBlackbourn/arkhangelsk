window.addEventListener('DOMContentLoaded', main);

/** Set starting conditions */
let day = 1;
let temp = -20;
let food = 10;

const sceneText = document.getElementById('scene-text'); // Place i global scope in order to access from scene objects

/** Run the page, load the intro */
function main() {
    loadScene(intro);
}

/**
 * Set the scene by calling relevant text and functions from scene object in separate file. 
 * @param {Object} scene 
 */
function loadScene(scene) {
    sceneText.innerHTML = scene.text;
    console.log(scene.text);
    addExecuteListeners(scene);
    /** Prevent progression in time just for loading the intro */
    if (scene != intro) {
        stepDay();
        stepFood();
        stepTemp();
    }
}

/** Tick down temperature according to number injured */
function stepTemp() {
    const tempBox = document.getElementById('temp-box');
    temp = (temp - (injured * 2)) - 2;
    tempBox.innerText = temp + '°C';
}

/** Tick up day according to number injured */
function stepDay() {
    const dayBox = document.getElementById('day-box');
    day = day + (1 + injured);
    dayBox.innerText = 'Day ' + day;
}

/** Tick down food according to number injured */
function stepFood() {
    const foodBox = document.getElementById('food-box');
    food = food - (1 + injured);
    foodBox.innerText = food + ' days of food';
}

/**
 * Add event listeners to command input field, call execution function.
 * @param {Object} scene 
 */
function addExecuteListeners(scene) {
    const executeButton = document.getElementById('execute-button');
    executeButton.addEventListener('click', () => {
        execute(scene); // Again sending arguments to callbacks, how can I avoid this without having variables in the global scope?
    });
    executeButton.addEventListener('keypress', () => {
        if (key === enter) {
            execute(scene);
        }
    })
}


/**
 * Take value from input field, check if relevant method exists, call method. Otherwise display invalid command message.
 * @param {Object} scene 
 */
function execute(scene) {
    let input = document.getElementById('input');
    let command = input.value;
    console.log(command);
    if (scene.hasOwnProperty(command)) {
        scene[command]();
    } else {
        // Show did not recognise command message
    }
    /** Clear input field */
    input.value = '';
}