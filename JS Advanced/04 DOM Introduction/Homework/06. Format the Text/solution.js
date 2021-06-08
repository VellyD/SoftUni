function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let sentenceArr = inputElement.value.split('.').filter(e => e !== "").map(e => e + '.');

  let parR = Math.ceil(sentenceArr.length / 3);

  for (let i = 0; i < parR; i++) {
    outputElement.innerHTML += `<p>${sentenceArr.splice(0, 3).join('')}</p>`;
  };
};