const bearConfrontedStorm = {
    travel: false,
    text: 'A few seconds of adrenaline feel like a lifetime. You and your team manage to fend the creature off but not unscathed. One of you is injured. If you <span>bring them</span> with you travelling will take twice as long. You can keep up the pace if you <span>leave them behind</span> to their death. The strange compulsion drives you forwards.',
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