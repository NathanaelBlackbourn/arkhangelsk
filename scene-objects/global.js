/** Contains methods common to all scenes */
const global = {
    injuredGroan: '*groans*',
    nielsenThoughts() {
        console.log(injured);
        console.log(leftBehind);
        if (injured === 1 && leftBehind === 0) {
            sceneText.innerHTML = this.injuredGroan;
        } else if (leftBehind === 1) {
            sceneText.innerHTML = 'nielsen has been abandoned to the crater';
        } else {
            sceneText.innerHTML = scene.nielsenText;
        }
    },
    kleistThoughts() {
        if (injured >= 1 && leftBehind === 1) {
            sceneText.innerHTML = this.injuredGroan;
        } else if (leftBehind === 2) {
            sceneText.innerHTML = 'kleist has been abandoned to the crater';
        } else {
            sceneText.innerHTML = scene.kleistText;
        }
    },
    overgaardThoughts() {
        if (injured >= 1 && leftBehind === 2) {
            sceneText.innerHTML = this.injuredGroan;
        } else if (leftBehind === 3) {
            sceneText.innerHTML = 'overgaard has been abandoned to the crater';
        } else {
            sceneText.innerHTML = scene.overgaardText;
        }
    },
    back() {
        sceneText.innerHTML = scene.text;
    },
}