window.addEventListener('DOMContentLoaded', main);

/** Run the page, load the intro */
function main() {
    loadScene(intro);
}

/** Set the scene by calling relevant text and functions from scene object in separate file. */
function loadScene(scene) {
    const sceneText = document.getElementById('scene-text'); // Don't know how to have element accessible to methods without being in global scope here.
    sceneText.innerHTML = scene.text;
    console.log(scene.text);
    addExecuteListeners(scene);
}

function addExecuteListeners(scene) {
    const executeButton = document.getElementById('execute-button');
    executeButton.addEventListener('click', () => {
        execute(scene); // Again sending arguments to callbacks, how can I avoid this without having variables in the global scope?
    });
    executeButton.addEventListener('keypress', function(e) {
        if (e.key === enter) {
            execute(scene);
        }
    })
}

function execute(scene) {
    let command = document.getElementById('input').value;
    console.log(command);
    if (scene.hasOwnProperty(command)) {
        scene[command]();
    } else {
        // Show did not recognise command message
    }
}