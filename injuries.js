let leftBehind = 0;

/** Add to inured variable, show injury on screen */
function injury() {
    injured = injured + 1;
    document.getElementById('team-' + (injured+leftBehind)).classList.toggle('injured');
    document.getElementById('injured-' + (injured+ leftBehind)).classList.toggle('hidden');
}

/** Removes a team memeber from the team array and on screen. Adds to the leftBehind variable to step the injury function base up one. */
function leaveBehind() {
    document.getElementById('team-' + (injured + leftBehind)).classList.toggle('hidden');
    team.pop();
    injured = injured -1;
    leftBehind = leftBehind + 1;
}