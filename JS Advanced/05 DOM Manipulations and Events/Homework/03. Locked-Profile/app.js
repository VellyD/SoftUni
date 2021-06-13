function lockedProfile() {
    let maintoAddListenerEl = document.getElementById('main');

    maintoAddListenerEl.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            let divToShow = e.target.parentNode.querySelector('div');
            let inputsLockedUnlocked = e.target.parentNode.querySelector('input[type="radio"]');

            if (inputsLockedUnlocked.checked === false) {
                divToShow.style.display = divToShow.style.display === 'block' ? 'none' : 'block';
                e.target.textContent = e.target.textContent === 'Show more' ? 'Hide it' : 'Show more';

            };
        };
    });
};