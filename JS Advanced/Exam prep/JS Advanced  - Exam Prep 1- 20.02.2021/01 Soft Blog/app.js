function solve() {
   //getting all needed fields
   let authorNameEl = document.getElementById('creator');
   let titleNameEl = document.getElementById('title');
   let categoryNameEl = document.getElementById('category');
   let contentTextAreaEl = document.getElementById('content');

   // Element to archive the post
   let oLArchiveEl = document.querySelector('body > div > div > aside > section.archive-section > ol')

   //element to append the new post
   let postElement = document.querySelector('body > div > div > main > section');

   //Create BNT
   let addButton = document.querySelector('body > div > div > aside > section:nth-child(1) > form > button');


   //Listener for creation of an article
   addButton.addEventListener('click', (e) => {
      e.preventDefault();

      let articleE = document.createElement('article');
      let h1E = document.createElement('h1');
      h1E.textContent = titleNameEl.value;
      //categoryEls
      let paragraphCategoryE = document.createElement('p');
      paragraphCategoryE.textContent = 'Category: '
      let strongCategoryE = document.createElement('strong');
      strongCategoryE.textContent = categoryNameEl.value;
      //append strong in P
      paragraphCategoryE.appendChild(strongCategoryE);

      //Creator Els
      let paragraphCreatorE = document.createElement('p');
      paragraphCreatorE.textContent = 'Creator: '
      let strongCreatorE = document.createElement('strong');
      strongCreatorE.textContent = authorNameEl.value;

      //append strong in P
      paragraphCreatorE.appendChild(strongCreatorE);

      //P with content
      let contentE = document.createElement('p');
      contentE.textContent = contentTextAreaEl.value;

      //div with BTNS
      let divBtnsE = document.createElement('div');
      divBtnsE.setAttribute('class', 'buttons')

      //del and archive buttons
      let delBtnE = document.createElement('button');
      delBtnE.textContent = 'Delete';
      delBtnE.classList.add('btn')
      delBtnE.classList.add('delete')
      delBtnE.addEventListener('click', () => {
         articleE.remove();
      })

      let arcBtnE = document.createElement('button');
      arcBtnE.textContent = 'Archive';
      arcBtnE.classList.add('btn')
      arcBtnE.classList.add('archive')
      arcBtnE.addEventListener('click', () => {
         let text = h1E.textContent;
         let liArchive = document.createElement('li');
         liArchive.textContent = text;


         articleE.remove();

         let ol = document.querySelector('.archive-section ol');
         let liinOL = Array.from(ol.querySelectorAll('li'));
         liinOL.push(liArchive)

         liinOL.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => ol.appendChild(x))

      })

      //BTNS append
      divBtnsE.appendChild(delBtnE);
      divBtnsE.appendChild(arcBtnE);
      // Article append

      articleE.appendChild(h1E);
      articleE.appendChild(paragraphCategoryE);
      articleE.appendChild(paragraphCreatorE);
      articleE.appendChild(contentE);
      articleE.appendChild(divBtnsE);

      //append the article in DOM
      postElement.appendChild(articleE);

   })


}