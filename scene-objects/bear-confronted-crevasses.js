const bearConfrontedCrevasses = {
    travel: false,
    text: 'A few seconds of adrenaline feel like a lifetime. You and your team manage to fend the creature off but not unscathed. One of you is injured. If you <span>bring them</span> with you travelling will take twice as long. You can keep up the pace if you <span>leave them behind</span> to their death. The strange compulsion drives you forwards.',
    nielsenText:'We don’t have forever, we should prioritise our research. I want to check the crevasses for any surviving wildlife.',
    kleistText:'If we can get a better look at that electrical storm, the reading may well give me some insight into what happened here.',
    overgaardText:'We’re on too tight a schedule. The company wants me to report the cause of the incident. The data suggests it was straight ahead, that’s where we should go.',
    bringThem() {
        loadScene(findPilot2);
    },
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot2);
    }
}