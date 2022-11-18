const enterTheStorm = {
    travel: true,
    text: 'You immediately regret your decision. Lightening cracks deafeningly all around you. You turn to retrace your steps but you are so disorientated that you don’t know which way you came from. You choose any direction and rush forwards. You spend hours in the storm but you emerge from the other side still with your team. One of them has been struck and can barely speak. The compulsion insists that you continue westwards. You look to your injured teammate and realise you must decide to either <span>leave them behind</span> probably to die ot to <span>bring them</span> with you, slowing your travel and putting you all at risk.',
    nielsenText:'',
    kleistText:'',
    overgaardText:'',
    leaveThemBehind() {
        leaveBehind();
        loadScene(findPilot1);
    },
    bringThem() {
        loadScene(findPilot1);
    }
}