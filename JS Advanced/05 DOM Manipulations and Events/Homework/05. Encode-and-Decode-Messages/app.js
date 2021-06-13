function encodeAndDecodeMessages() {
    let [message, lastReceived] = Array.from(document.querySelectorAll('textarea'));
    let [encodeBNT, decodeBTN] = Array.from(document.querySelectorAll('button'));


    encodeBNT.addEventListener('click', () => {
        message.value = message.value
            .split('')
            .map(e => e.charCodeAt() + 1)
            .map(x => String.fromCharCode(x))
            .join('')

        lastReceived.value = message.value;
        message.value = '';
    });

    decodeBTN.addEventListener('click', () => {

        lastReceived.value = lastReceived.value
            .split('')
            .map(e => e.charCodeAt() - 1)
            .map(x => String.fromCharCode(x))
            .join('')

    });

}