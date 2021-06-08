function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listToAppend = document.getElementById('items');

    let newelement = document.createElement('li');
    newelement.textContent = inputElement.value;

    listToAppend.appendChild(newelement);
    inputElement.value = '';
};