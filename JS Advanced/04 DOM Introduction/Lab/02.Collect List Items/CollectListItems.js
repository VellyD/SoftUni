function extractText() {
    let outputTextAreaelement = document.getElementById('result');
    let inputListElement = document.getElementById('items');
    outputTextAreaelement.textContent = inputListElement.textContent ; 
   
}