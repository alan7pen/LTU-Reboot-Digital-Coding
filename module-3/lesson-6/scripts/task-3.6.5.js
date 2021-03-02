//console.log('xx');


let userInput = document.querySelector('#full-name');
let theNumber = document.querySelector('#theNumber');
let button = document.querySelector('#submitButton');

button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(userInput.value);
  console.log(parseFloat(theNumber.value) * 5);
});