//console.log('X');


function calculator(number1, number2, operator) {

  var result = 0;
  var error = '';

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;

    case '-':
      result = number1 - number2;
      break;

    case '*':
      result = number1 * number2;
      break;

    case '/':
      if (number2 != 0) {
        result = number1 / number2;
      } else {
        result = 0;
        error = 'Cannot divide by zero!!!'
      }
      break;

    case '%':
      //result = number1 % number2;
      if (number2 != 0) {
        result = number1 / number2;
      } else {
        result = 0;
        error = 'Cannot mod by zero!!!'
      }
      break;

    case '<<':
      result = number1 << number2;
      break;

    case '>>':
      result = number1 << number2;
      break;
      
    default:
      result = 0;
      error = 'Invalid operator supplied';
  }

  if (error == '')
  {
    console.log(`${number1} ${operator} ${number2} = ${result}`)
  }
  else {
    console.log(error)
  }
}


number1 = 5;
number2 = -1;
console.log (number1 << number2);


calculator(number1, number2, '<<');
calculator(number1, number2, '>>');
calculator(number1, number2, '#');
calculator(number1, number2, '+');
calculator(number1, number2, '-');
calculator(number1, number2, '*');
calculator(number1, number2, '/');
calculator(number1, number2, '%');
