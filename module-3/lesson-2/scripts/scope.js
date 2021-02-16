

function showScope() {
  console.log('---start showScope---');
  var globalScope = 'globalScope from inside the function';
  var localScope = 'localScope';
  console.log(globalScope);
  console.log(localScope);
  console.log('---end showScope---');
}


var globalScope = 'globalScope';

console.log(globalScope);
showScope();


console.log(globalScope);
console.log(localScope);