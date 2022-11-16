const intro = {
    text: "Russia, Novaya Zemlya, 2045. Weapons testing has resumed on the island in the arctic circle. A test has resulted in an explosion fifty times that of expected. The northern tip of the island has become a crater. A deadzone where no technology, electronic or otherwise, functions. Electrical storms, however, rage and abnormal light patterns are witnessed in the crater from space. Something strange has happened. You and your team are sent in to investigate.<br><br>The <span>weather</span> is closing in and you don't have much time. Your <span>food</span> is also limited, if it runs out you will starve to death in the deadzone.<br><br>Words in yellow are keywords. Enter any of them in the command bow below and execute to either get more information or take actions.<br><br>You can consult your <span>team</span> at any time in the crater. Type their name followed by the keyword <span>thoughts</span>. Try it now to get acquianted with each of them.<br><br>Click 'help' at any time for the games basics.<br><br>When you are ready to begin type <span>enter the crater</span>.",
    weather() {
        const sceneText = document.getElementById('scene-text');
        sceneText.innerHTML = 'Hellow worldddddd'
    },
    enterTheCrater() {
        loadScene(midCrater);
    },
}