function editElement(element, matcher, replacer) {
  let elementinDOM = element.textContent;
  let matched = new RegExp(matcher, 'g');
  let editted = elementinDOM.replace(matched, replacer);
  element.textContent = editted;
  
};