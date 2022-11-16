 /** Event listener on help-button */
function toggleHelp() {

 }
 

let inventory = ['icepick', 'pilot 1'];

function toggleInventory() {
const inventoryPanel = document.getElementById('inventory-panel');
const inventoryText = document.getElementById('inventory-text');
if (inventoryPanel.classList.contains('hidden')){
    if (inventory[0]) {
        let inventoryList = inventory[0]
        if (inventory.length >= 2) {
            inventoryList + '<br>' + inventory[1]
        }
        if (inventory[2]) {
            inventoryList + '<br>' + inventory[2];
        }
        if (inventory[3]) {
            inventoryList + '<br>' + inventory[3];
        };
        inventoryText.innerHTML = inventoryList;
        } else {
            inventoryText.innerHTML = 'Your inventory is empty';
        }
    }
    inventoryPanel.classList.toggle('hidden');
    document.getElementById('close-inventory').addEventListener('click', toggleInventory);
 };