const findPilot1 = {
    travel: true,
    text: 'Ahead of you encased in ice is a perfect sphere, black as night. The sphere seems to emit a faint glow. If you still have your icepick you can make short work of removing it from the ice otherwise it looks like it will take around a day. The team is in agreement that you should remove it and <span>return</span> to the central crater.',
    nielsenText:'',
    kleistText:'',
    overgaardText:'',
    return() {
        inventory.push('pilot1');
        loadScene(midCrater);
    }
}