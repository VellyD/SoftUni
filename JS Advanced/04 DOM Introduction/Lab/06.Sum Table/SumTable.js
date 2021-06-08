function sumTable() {
    let resultEl = document.getElementById('sum');
    let sume = 0 
    let tdElements = Array.from(document.querySelectorAll('tr td'));

    let columnelements= tdElements.filter((e, i)=> i%2 !== 0 && i!==tdElements.length-1) ;

    for (const costElement of columnelements) {
        let number = Number(costElement.textContent);
        sume += number;
    }

    resultEl.textContent = sume; 
}