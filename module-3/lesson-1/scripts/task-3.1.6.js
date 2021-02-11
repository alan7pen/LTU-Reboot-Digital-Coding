var mealAmount = 32.50;
var tipMarkupPercentage = 15;
var tipAmount = mealAmount * (tipMarkupPercentage / 100); 
var total = mealAmount + tipAmount;
var noOfDP = 2;
var currencySymbol = '£';

console.log('Bill without tip is ' + currencySymbol + ' ' + mealAmount);
console.log('Tip percentage is', tipMarkupPercentage + ' %');
console.log('Your total bill, with tip is ' + currencySymbol + ' ' + total);

console.log('Your total bill, with tip is ' + currencySymbol + ' ' + total.toFixed(noOfDP) + ' (' + noOfDP + ' decimal places)');
console.log('Tip was ' + currencySymbol + ' ' + tipAmount.toFixed(noOfDP));
//toFixed()