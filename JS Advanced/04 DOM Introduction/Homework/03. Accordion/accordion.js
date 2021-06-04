function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let texttoExpandElement = document.getElementById('extra');

    buttonElement.textContent = buttonElement.textContent === 'More' ? 'Less' : 'More';
    texttoExpandElement.style.display = texttoExpandElement.style.display === 'none' ? 'block' : 'none';

};