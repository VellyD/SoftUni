function create(words) {
   let divToAppend = document.getElementById('content');
   words.forEach(element => {
      let divEl = document.createElement('div');
      let pEl = document.createElement('p');
      pEl.textContent = element;
      pEl.style.display = 'none';

      divEl.appendChild(pEl);
      divToAppend.appendChild(divEl);

      divEl.addEventListener('click', () => {
         pEl.style.display = pEl.style.display === 'none'? 'block': 'none';
      });

   });
};