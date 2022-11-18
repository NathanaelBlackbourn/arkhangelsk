const throughCrevasses = {
    travel: true,
    text: 'A landscape of deep crevasses extends before you. Created by the explosion which form the crater as it clawed at the land. There are two ways to proceed. If you travel <span>over the crevasses</span> it will be easy to navigate but it’s dangerous. Thin sheets of ice and conceal crevasses resulting in disaster if you try to walk over them. If you choose to travel <span>through the crevasses</span> you avoid the risk of falling to your death but you could lose your way and you don’t know what might be taking shelter down there from the storm.',
    nielsenThoughts:'',
    kleistThoughts:'',
    overgaardThoughts:'',
    overTheCrevasses() {
        injury();
        loadScene(overCrevasses);
    },
    throughTheCrevasses() {
        loadScene(throughCrevasses);
    }
}