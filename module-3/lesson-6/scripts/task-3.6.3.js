//console.log('xxx');

let button = document.querySelector('button');

let alert = function() {
  console.log('button here!!!'); 
}

button.addEventListener('mouseover', function() {
  alert();
});


// button.addEventListener('mouseover', function() {
//   alert('button here!!!'); 
// });

// button.addEventListener('click', function() {
//   alert('button clicked!!!'); 
// });