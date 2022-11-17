const midCrater = {
    travel: true,
    text: 'Traversing the crater is difficult. The surface has been shredded by the explosion, riddled with deep cracks and strewn with boulders.<br><br>Straight ahead of you is the dead centre of the crater. The centre is your main objective, the readings you were able to take before entering seem to suggest that the weather and other phenomena revolve around it.<br><br>To the west is a raging electrical storm, an area of interest for two members of your team.<br><br>To the east is a region of crevasses and caves potentially a refuge for wildlife which might also harbour survivors if there are any.<br><br>You can travel either <span>to the centre</span>, <span>to the storm</span> or <span>to the crevasses</span>.',
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