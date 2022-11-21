window.addEventListener('DOMContentLoaded', main);

/** Set starting conditions */
let day = 1;
let temp = -20;
let food = 10;
let team = ['nielsen', 'kleist', 'overgaard']; // Maybe remove this array if not used
let injured = 0;
let scene;
let sceneText;
let input;

/** Run the page, load the intro */
function main() {
    loadScene(intro);
    addEventListeners();
}


/** Adds event listeners to command input field and help and inventory buttons. */
 function addEventListeners() {
    document.getElementById('help-button').addEventListener('click', toggleHelp);
    document.getElementById('inventory-button').addEventListener('click', toggleInventory);
    document.getElementById('close-help').addEventListener('click', toggleHelp);
    document.getElementById('close-inventory').addEventListener('click', toggleInventory);
    const executeButton = document.getElementById('execute-button');
    executeButton.addEventListener('click', execute);
    input = document.getElementById('input');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            execute();
        }
    })
}

/**
 * Set the scene by calling relevant text and functions from scene object in separate file.
 */
function loadScene(newScene) {
    scene = newScene;
    sceneText = document.getElementById('scene-text');
    sceneText.innerHTML = scene.text;
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
    const foodBox = document.getElementById('food-box');
    foodBox.innerText = food + ' days of food';
}

/**
 * Take value from input field, check if relevant method exists, call method. Otherwise display invalid command message.
 */
function execute() {
    let command = camelize(input.value);
    console.log(command);
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
