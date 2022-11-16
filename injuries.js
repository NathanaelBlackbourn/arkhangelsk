/** Add to inured variable, show injury on screen */
function injury() {
    injured = injured + 1;
    document.getElementById('team-' + injured).classList.toggle('injured');
    document.getElementById('injured-' + injured).classList.toggle('hidden');
}

function leaveBehind() {
    document.getElementById('team-' + injured).classList.toggle('hidden');
    team.shift();
    injured = injured -1;
}

function heal() {
    for (let i = 0; i < injured;) {
        document.getElementById('team-' + injured).classList.toggle('injured');
        document.getElementById('injured-' + injured).classList.toggle('hidden');
        injured = injured - 1;
    }
}