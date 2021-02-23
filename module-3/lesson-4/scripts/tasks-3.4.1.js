for (var number = 0; number <= 12; number++) {

  console.log (`Multiplication table for ${number}`);
  
  for (var multiply = 1; multiply <= 12; multiply++) {
      var message = `${number} x ${multiply} = ${number * multiply}`;
      console.log(message);
  }

}

