//console.log('xxx');

//  dom-div

let domDiv = document.querySelector('#dom-div'); // get element by ID
let paragraph = document.createElement('p');
let paragraphText = document.createTextNode('THIS IS MY CONTENT');

paragraph.appendChild(paragraphText);
domDiv.appendChild(paragraph);
