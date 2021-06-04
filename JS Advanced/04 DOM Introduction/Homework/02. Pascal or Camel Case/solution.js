function solve() {
  let inputText = document.getElementById('text').value;
  let inputConvestion = document.getElementById('naming-convention').value;
  let outputElement = document.getElementById('result');

  let words = inputText.toLowerCase().split(' ');

  if (inputConvestion === 'Camel Case') {
    outputElement.textContent = words.map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x).join('');

  } else if (inputConvestion === 'Pascal Case') {

    outputElement.textContent = words.map(x => x[0].toUpperCase() + x.slice(1)).join('');
  } else {
    outputElement.textContent = 'Error!'
  }

};