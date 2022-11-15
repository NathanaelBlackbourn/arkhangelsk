function main() {
    call scene(scene name)
    set variables:
    food days: 10
    day: 1;
    temperature: -21C
}


Each scene saved as object {
    name: intro,
    text: lorem ipsum,
    // scene keywords listed in array, loop through to set command responses
    keywords:
    keyword one examine:
    keyword one pick up: add to inventory()
    keyword one travel: call scene()
    crew1 thoughts:
    crew2 thoughts:
    crew3 thoughts:
}


// Each scene's text can be saved to it's own folder as a file to reduce length of main.js
// Could save objects into own js file too
// Each object could be own file inlcuding all text and functions


function call scene(scene object as parameter) {
    currentScene = sceneObjectName //assign current scene to variable in order to refer here for functions/text
    text frame.innerText = currentScene.text
    send button add event listener, executeCommand
    changeDay()
    changeTemperature()
    changeFood()
}

function executeCommand() {
    take value from input
    loop through currentScene.keywords to recorgnise entered keyword
    if recognised, check for accompanying words // Here is where we call the next scene or other functions such as throw food
    if recnogised call relevant function or text from object
}


function changeDay() {
    if injured = true {
        day + (1 * injured);
    } else {
    day: +1;
    dayBox.innerText = day;
    }
}


function changeTemp() {
    temperature - 2;
    if temp <= -50 {
        freezeToDeath()
    } else {
        temperatureBox.innerText = temperature;
        }
}

function changeFood() {

 if injured = true {
    food - (1 * injured)
 } else {
    food - 1
 }

if food <= 0 {
    starveToDeath()
} else {
    foodBox.innerText = food + 'days of food'
}
}

function freezetoDeath() {
    sceneText innerText = "The tempterature sank below your equipment's capabilities and you and your team froze to death"
    loseGame();
}

function starveToDeath() {
    sceneText.innerText = "You spent too long exploring the crater. Your food ran out and you and your team starve to death"
    loseGame();
}

function loseGame() {
    display none on gameplay elements
    append child restart game button to textBody
    add event listener restartGame
}

function restartGame() {
    toggle back gameplay elements
    main();
}

main();