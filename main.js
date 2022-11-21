window.addEventListener('DOMContentLoaded', main);

/** Tracks number of days in the crater */
let day = 1;

/** Tracks temperature */
let temp = -20;

/** Tracks remaining food */
let food = 10;

/** Tracks injured team members */
let injured = 0;

/** Tracks team members left behind */
let leftBehind = 0;

/** Scene objects are assigned to this variable then method and properties are called from it */
let scene;

/** The DOM object 'scene-text' is assigned to this variable on load */
let sceneText;

/** The DOM object 'input' is assigned to this variable on load */
let input;

/** Tracks whether the player has completed the storm wing */
let stormCompleted = false;

/** Tracks whether the player has completed the crevasses wing */
let crevassesCompleted = false;

/** Runs the page, loads the intro */
function main() {
    loadScene(intro);
    addButtonListeners();
    addCommandListeners();
}


/** Adds event listeners to help and inventory buttons. */
 function addButtonListeners() {
    document.getElementById('help-button').addEventListener('click', toggleHelp);
    document.getElementById('inventory-button').addEventListener('click', toggleInventory);
    document.getElementById('close-help').addEventListener('click', toggleHelp);
    document.getElementById('close-inventory').addEventListener('click', toggleInventory);    
}

/** Adds listeners to command input */
function addCommandListeners() {
    const executeButton = document.getElementById('execute-button');
    executeButton.addEventListener('click', execute);
    input = document.getElementById('input');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            execute();
        };
    })
}

/** Sets the scene by calling relevant text and functions from scene object in separate file. */
function loadScene(newScene) {
    scene = newScene;
    sceneText = document.getElementById('scene-text');
    scene.showText();
    /** Progresses time if travel is true for scene objects */
    if (scene.travel) {
        stepDay();
        stepFood();
        stepTemp();
    }
}

/** Ticks down temperature according to number injured */
function stepTemp() {
    temp = (temp - (injured * 2)) - 2;
    if (temp <= -55) {
        freezeToDeath();
    } else {
        showTemp();
    };
}

/** Displays current temperature on screen */
function showTemp() {
    /**
     * The div where current temperature is shown
     * @type {HTMLDivElement}
     */
    const tempBox = document.getElementById('temp-box');
    tempBox.innerText = temp + '°C';
}

/** Ticks up day according to number injured */
function stepDay() {
    day = day + (1 + injured);
    showDay();
}

/** Displays current day on screen */
function showDay() {
    /**
     * The div where current day is show
     * @type {HTMLDivElement}
     */
    const dayBox = document.getElementById('day-box');
    dayBox.innerText = 'Day ' + day;
}

/** Ticks down food according to number injured */
function stepFood() {
    food = food - (1 + injured);
    if (food < 0) {
        starveToDeath();
    } else {
        showFood();
    };
}

/** Displays current food on screen */
function showFood() {
    /**
     * The div where remaining food is shown
     * @type {HTMLDivElement}
     */
    const foodBox = document.getElementById('food-box');
    foodBox.innerText = food + ' days of food';
}

/** Takes value from input field, check if relevant method exists, call method. Otherwise display invalid command message. */
function execute() {
    let command = camelize(input.value);
    if (scene.hasOwnProperty(command)) {
        scene[command]();
    } else if (global.hasOwnProperty(command)) {
        global[command]();     
    } else {
        wrongCommand();
    }
    /** Clear input field */
    input.value = '';
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

/** Displays 'Command not recognised' message to user. */
function wrongCommand() {
    let wrong = document.getElementById('wrong-command');
    function toggleWrong() {
        wrong.classList.toggle('hidden');
    }
    toggleWrong();
    setTimeout(toggleWrong, 1000);
}
