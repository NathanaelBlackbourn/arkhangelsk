const waitTheStormOut = {
    travel: true,
    text: 'As your wake up and crawl out of your tent you are overcome by relief. The storm has died down. As you pack up and prepare to continue a polar bear approaches you. In panic two possible actions occur to you, either <span>throw some food</span> to distract the bear long enough for you to escape, or to grab your icepick and <span>confront the bear<span/>.',
    nielsenThoughts:'',
    kleistThoughts:'',
    overgaardThoughts:'',
    throwSomeFood() {
        food = food - 1;
        loadScene(foodThrownStorm);
    },
    confrontTheBear() {
        injury();
        // if (inventory.contains('icepick')) {
        //     inventory.pop();
        //     };
        loadScene(bearConfrontedStorm);
    }
}