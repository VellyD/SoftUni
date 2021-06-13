function addItem() {
    let selectElement = document.getElementById('menu');
    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');

    selectElement.appendChild(createDomElemenet('option', newItemTextElement.value, newItemValueElement.value));

    newItemTextElement.value = '';
    newItemValueElement.value = '';

    function createDomElemenet(type, textContent, val) {
        let eL = document.createElement(type);
        eL.textContent = textContent;
        eL.value = val;
        return eL;
    };
}