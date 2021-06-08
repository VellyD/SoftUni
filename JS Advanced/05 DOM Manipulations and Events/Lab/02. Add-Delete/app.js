function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listToAppend = document.getElementById('items');

    let newelement = document.createElement('li');
    newelement.textContent = inputElement.value;

    let delBtn = document.createElement('a');
    delBtn.setAttribute('href', '#');
    delBtn.textContent = '[Delete]';

    newelement.appendChild(delBtn);
    listToAppend.appendChild(newelement);

    inputElement.value = '';

    delBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });

};