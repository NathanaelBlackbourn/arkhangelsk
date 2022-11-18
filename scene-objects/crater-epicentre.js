const craterEpicentre = {
    travel: true,
    text: 'The eye of the supercell swirls above you. The air is charged and lightning strikes regularly around you. You are confronted by a huge monolith resembling the obelisks of ancient Egypt but smooth and black like obsidian. The monolith is surrounded by a bubble of light and warmth where plant life seems to thrive. Trees bearing fruit of all kinds. It looks even like you could.<br><br>There is no sounds, nothing you could discern to be words but you are somehow aware that the monolith is communicating you you and you understand it. It explains to your that you must return to it two objects, ‘pilots’. They are lost somewhere within the crater. You and you team feel inexplicably compelled to comply. You see an image of yourself returning to <span>insert the pilots</span> into the monolith.<br><br>The monolith tells you, somehow, that you can return here at any time to <span>pick the fruit</span> and refill your rations or to <span>heal</span> any injuries you sustain in the crater.<br><br>From here you can only travel <span>back to the crater</span>.',
    /** Checks inventory for both pilots, invokes win function */
    insertThePilots() {
        if (inventory.includes('pilot 1') && inventory.includes('pilot 2')) {
            win();
        }
    },
    /** Removes all injuries in the team */
    heal() {
        for (let i = 0; i < injured;) {
            document.getElementById('team-' + (injured + leftBehind)).classList.toggle('injured');
            document.getElementById('injured-' + (injured + leftBehind)).classList.toggle('hidden');
            injured = injured - 1;
        }
    },
    /** Refill food rations to maximum */
    pickTheFruit() {
        food = 10;
        showFood();
    },
    backToTheCrater() {
        loadScene(midCrater);
    }

}