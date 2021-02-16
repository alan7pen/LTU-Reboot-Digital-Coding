function clothing(temperature) {;

  console.log('Temperature is ' + temperature);

  if (temperature < 0) {
    console.log('Stay inside');
  } else if (temperature < 30) {
    console.log('Put your coat and hat on')
  } else if (temperature < 50) {
    console.log('Put your coat on');
  } else {
    console.log('Pants and vest is OK');
  }

  console.log('--------------------------');
}

clothing(-2);
clothing(17);
clothing(37);
clothing(52);