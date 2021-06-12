function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultelement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        resultelement.textContent = power + '%';
    });

    gradientElement.addEventListener('mouseout', () => {
        resultelement.textContent = "";
    });
    
}