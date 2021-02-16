function clothing(temperature, season) {;

  console.log('Temperature is ' + temperature);

  if (season == 1) {
    console.log('Spring');
  } else if (season == 2) {
    console.log('Summer');
  } else if (season == 3) {
    console.log('Autum');
  } else {
    console.log('Winter');
  }

  if (temperature < 0 && season != 4) {
    console.log('STAY INSIDE !!! WAY TOO COLD');
  } else if (temperature < 0) {
    console.log('Stay inside');
  } else if (temperature < 30 && season == 4) {
    console.log('Watch out for ICE');
  } else if (temperature < 30) {
    console.log('Put your coat and hat on');
  } else if (temperature < 50) {
    console.log('Put your coat on');
  } else if (temperature < 60 || season == 3) {
    console.log('Pants and vest is OK');
  } else {
    console.log ('Shorts and t-shirt');
  }

  console.log('--------------------------');
}
season = 3;

random = Math.floor(Math.random() * 90 - 25);
clothing(random, season);

// clothing(-2, season);
// clothing(17, season);
// clothing(37, season);
// clothing(52, season);
// clothing(72, season);