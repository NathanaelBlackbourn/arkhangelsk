const overCrevasses = {
    travel: true,
    text: 'You survive your first day sounding out the ice and crossing carefully but and you set out to leave on day two, a member of your team crashes through and breaks their leg. You can either <span>bring them</span> with you and try to get them some kind of medical attention in time or you can <span>leave them behind</span> probably to their death.',
    nielsenThoughts:'',
    kleistThoughts:'',
    overgaardThoughts:'',
    bringThem() {
        loadScene(findPilot2);
    },
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot2);
    }
}