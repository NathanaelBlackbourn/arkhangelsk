const bearConfrontedStorm = {
    travel: false,
    text: '',
    nielsenText:'',
    kleistText:'',
    overgaardText:'',
    bringThem() {
        loadScene(findPilot1);
    },
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot1);
    }
}