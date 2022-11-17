let leftBehind = 0;

/** Add to inured variable, show injury on screen */
function injury() {
    injured = injured + 1;
    document.getElementById('team-' + (injured+leftBehind)).classList.toggle('injured');
    document.getElementById('injured-' + (injured+ leftBehind)).classList.toggle('hidden');
}

function leaveBehind() {
    document.getElementById('team-' + (injured + leftBehind)).classList.toggle('hidden');
    team.pop();
    injured = injured -1;
    leftBehind = leftBehind + 1;
}

injury();
injury();