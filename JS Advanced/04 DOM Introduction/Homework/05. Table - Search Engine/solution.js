function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchElement = document.getElementById('searchField');
      let tableSearchElements = Array.from(document.querySelectorAll('tbody tr td'));
   
      tableSearchElements.forEach(el => {
         if (el.textContent.includes(searchElement.value)) {
            el.parentNode.setAttribute('class', 'select');
         };
      });

      searchElement.value = '';
   };
};