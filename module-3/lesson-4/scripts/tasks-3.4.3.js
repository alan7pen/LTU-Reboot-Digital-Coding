let favouriteFoods = [
  'Cheese',
  'Ham',
  'Bread',
  'Beans',
  '',
  '',
  ''
];

let maxItems = favouriteFoods.length;
let checkForLetter = 'M';

console.log(`${maxItems} items of food`);
console.log('----------------------------------------');

for (let loop = 0; loop < maxItems; loop++) {
  message = favouriteFoods[loop];

  
  if (message.toUpperCase().indexOf(checkForLetter) > 0) {
    message = message + ` (has ${checkForLetter} in name)`;
  }

  console.log(message);
}
