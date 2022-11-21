/** Scene object. Contains the scene's text and functionality. */
const midCrater = {
    travel: true,
    text: 'Traversing the crater is difficult. The surface has been shredded by the explosion, riddled with deep cracks and strewn with boulders.<br><br>Straight ahead of you is the dead centre of the crater. The centre is your main objective, the readings you were able to take before entering seem to suggest that the weather and other phenomena revolve around it.<br><br>To the west is a raging electrical storm, an area of interest for two members of your team.<br><br>To the east is a region of crevasses and caves potentially a refuge for wildlife which might also harbour survivors if there are any.<br><br>You can travel either <span>to the centre</span>, <span>to the storm</span> or <span>to the crevasses</span>.',
    nielsenText: 'We don’t have forever, we should prioritise our research. I want to check the crevasses for any surviving wildlife.',
    kleistText: 'If we can get a better look at that electrical storm, the reading may well give me some insight into what happened here.',
    overgaardText: 'We’re on too tight a schedule. The company wants me to report the cause of the incident. The data suggests it was straight ahead, that’s where we should go.',
    toTheCentre() {
        loadScene(craterEpicentre);
    },
    toTheStorm() {
        loadScene(electricalStorm);
    },
    toTheCrevasses() {
        loadScene(crevasses);
    },
}