function search() {
   let searchWord = document.getElementById('searchText').value;
   let outputFiledElement = document.getElementById('result');
   let listElements = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0;

   for (const city of listElements) {
      let cityName = city.textContent;

      if (cityName.includes(searchWord)) {
         counter++;

         city.style.fontWeight = 'bold';
         city.style.textDecoration = 'underline';
      };
   };

   outputFiledElement.textContent = `${counter} matches found`;
};