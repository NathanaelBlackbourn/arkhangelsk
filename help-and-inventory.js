 /** Event listener on help-button */
function toggleHelp() {
    const helpPanel = document.getElementById('help-panel');
    helpPanel.classList.toggle('hidden');
 }
 

let inventory = ['icepick'];

function toggleInventory() {
    const inventoryPanel = document.getElementById('inventory-panel');
    if (inventoryPanel.classList.contains('hidden')){
        createInventoryList();
        }
    inventoryPanel.classList.toggle('hidden');
 };

function createInventoryList() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    for (let i = 0; i < inventory.length; i++) {
        let listItem = document.createElement('li');
        listItem.id = 'inventory-item-' + (i + 1);
        listItem.innerHTML = inventory[i];
        inventoryList.appendChild(listItem);
    }
 }