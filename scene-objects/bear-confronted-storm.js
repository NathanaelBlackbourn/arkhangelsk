const bearConfrontedStorm = {
    travel: false,
    text: '',
    bringThem() {
        loadScene(findPilot1);
    },
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot1);
    }
}