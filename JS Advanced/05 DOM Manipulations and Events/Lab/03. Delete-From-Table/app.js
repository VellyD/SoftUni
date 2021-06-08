function deleteByEmail() {
    let resultElement = document.getElementById('result');
    let inputElement = document.querySelector('input');
    let tableEMailElements = Array.from(document.querySelectorAll('tr td'));
    let eMailstoCheck = tableEMailElements.filter((el, i) => i % 2 !== 0);
       
    for (const email of eMailstoCheck) {
        if(email.textContent === inputElement.value){
            email.parentNode.remove();
            resultElement.textContent = 'Deleted';
        }else{
            resultElement.textContent = 'Not found.';
        };
    };

};