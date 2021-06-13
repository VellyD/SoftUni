function attachEventsListeners() {
    let mainEl = document.querySelector('main');
    let [days, hours, minutes, seconds] = Array.from(document.querySelectorAll('input[type="text"]'));


    mainEl.addEventListener('click', (e) => {
        if (e.target.matches('input[type="button"]')) {
            let inputValue = (e.target.parentNode.children)[1].value;
            let typeOfInput = (e.target.parentNode.children)[1].id;


            switch (typeOfInput) {
                case 'days':
                    hours.value = inputValue * 24;
                    minutes.value = inputValue * 1440;
                    seconds.value = inputValue * 86400;
                    break;
                case 'hours':
                    days.value = inputValue / 24;
                    minutes.value = days.value * 1440;
                    seconds.value = days.value * 86400;
                    break;
                case 'minutes':
                    days.value = inputValue / 1440;
                    hours.value = days.value * 24;
                    seconds.value = days.value * 86400;
                    break;
                case 'seconds':
                    days.value = inputValue / 86400;
                    hours.value = days.value * 24;
                    minutes.value = days.value * 1440;
                    break;
            };
        };

    });

}