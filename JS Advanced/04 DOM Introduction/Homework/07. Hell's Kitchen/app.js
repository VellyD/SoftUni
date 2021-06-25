function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let textAreaElement = document.querySelector('textarea');

     console.log(textAreaElement.value);
      
   }
}