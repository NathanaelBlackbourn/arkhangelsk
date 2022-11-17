const restartButton = '<button id="restart">restart</button>';
const commandHTML = '<input id="input" type="text" placeholder="Enter your course of action here"><button id="execute-button">Execute</button>'
const infoBlock = document.getElementById('info-block');
const commandBlock = document.getElementById('command-block');

function freezeToDeath() {
    infoBlock.classList.toggle('hidden');
    sceneText.innerText = 'You ran out of time, the temperature reached -50°C and you and your team froze to death.';
    commandBlock.innerHTML = restartButton;
    addRestartListener();
}

function starveToDeath() {
    infoBlock.classList.toggle('hidden');
    sceneText.innerText = 'You spent too long in the chaos of the crater. Your food ran out and you and your team starved to death.';
    commandBlock.innerHTML = restartButton;
    addRestartListener();
}

function win() {
    infoBlock.classList.toggle('hidden');
    sceneText.innerText = 'You and your team stand back as the air around you illuminates and seems to ignite. You are incinerated by the blast from the launch of the monolith. Congratulations, you win.';
    commandBlock.innerHTML = restartButton;
    addRestartListener();
}

function addRestartListener() {
    document.getElementById('restart').addEventListener('click', restart);
}

function restart() {
    infoBlock.classList.toggle('hidden');
    commandBlock.innerHTML = commandHTML;
    loadScene(intro);
}