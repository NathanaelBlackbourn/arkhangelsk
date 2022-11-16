const midCrater = {
    travel: true,
    text: '',
    back() {
        sceneText.innerHTML = scene.text;
    },
    vasilievThoughts:'',
    federovThoughts:'',
    semenovThoughts:'',
    goToTheStorm() {
        loadScene(electricalStorm);
    },
}