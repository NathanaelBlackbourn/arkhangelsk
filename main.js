window.addEventListener('DOMContentLoaded', main);

/** Set starting conditions */
let day = 1;
let temp = -20;
let food = 10;
let injured = 0;

const sceneText = document.getElementById('scene-text'); // Place in global scope in order to access from scene objects

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
    /** Prevent progression in time just for loading the intro */
    if (scene != intro) {
        stepDay();
        stepFood();
        stepTemp();
    }
    addEventListeners(scene);
}

/** Tick down temperature according to number injured */
function stepTemp() {
    const tempBox = document.getElementById('temp-box');
    temp = (temp - (injured * 2)) - 2;
    if (temp <= -50) {
        freezeToDeath();
    } else {
    tempBox.innerText = temp + '°C';
    };
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
    if (food <= 0) {
        starveToDeath();
    } else {
        foodBox.innerText = food + ' days of food';
    };
}

/**
 * Add event listeners to command input field and help and inventory buttons.
 * @param {Object} scene 
 */
function addEventListeners(scene) {
    document.getElementById('help-button').addEventListener('click', toggleHelp);
    document.getElementById('inventory-button').addEventListener('click', toggleInventory);
    const executeButton = document.getElementById('execute-button');
    executeButton.addEventListener('click', () => {
        execute(scene); // Again sending arguments to callbacks, how can I avoid this without having variables in the global scope?
    });
    const input = document.getElementById('input');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            execute(scene);
        }
    })
    /** Clear input field */
    input.value = '';
}

/**
 * Take value from input field, check if relevant method exists, call method. Otherwise display invalid command message.
 * @param {Object} scene 
 */
function execute(scene) {
    let input = document.getElementById('input');
    let command = camelize(input.value);
    if (scene.hasOwnProperty(command)) {
        scene[command]();
    } else {
        // Show did not recognise command message
    }
}


/**
 * Copied code from stack overflow. Translate string to camel case to match scene key.
 * @param {string} str 
 * @returns {string}
 */
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
