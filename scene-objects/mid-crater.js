const midCrater = {
    travel: true,
    text: '',
    back() {
        sceneText.innerHTML = scene.text;
    },
    nielsenThoughts:'',
    kleistThoughts:'',
    overgaardThoughts:'',
    goToTheStorm() {
        loadScene(electricalStorm);
    },
}