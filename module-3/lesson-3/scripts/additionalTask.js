//console.log('X');


function seasonWear(season) {

  switch (season.toLowerCase()) {

    case 'spring':
      console.log(`It is ${season}, take a brolly with you`);
      
      break;
    
    case 'summer':
      console.log(`It is ${season}, no needs for a coat today`);
      break;
    
    case 'autumn':
      console.log(`It is ${season}, so make sure you have your coat at the ready`);
      break;
    
    case 'winter':
      console.log(`It is ${season}, so make sure you wrap up`);
      break;
    
    default:
      console.log('Season not found');
      break;

  }

}


function dayOfTheWeek(day) {
  switch (day) {
    case 4:
      console.log('It is Thursday');
      break;
  default:
    console.log('error');
    break;
  }
}




date =new Date();
day = date.getDay();

console.log(date);
dayOfTheWeek(day);

seasonWear('ZZZ');
seasonWear('Spring');
seasonWear('Summer');
seasonWear('autumn');

seasonWear('wintER');
