function drinkOrder(size, drinkName) {

  drink = drinkName.toLowerCase(drinkName);
  messageTemplate = 'You have ordered an';

  switch (drink) {
    case 'cola':
      //console.log('You have ordered a ' + size + ' ' + drink);
      console.log( `${messageTemplate} ${size} ${drink}`)
      break;
    case 'lemonade':
      console.log( `${messageTemplate} ${size} ${drink}`)
      break;
    case 'orangeade':
      console.log( `${messageTemplate} ${size} ${drink}`)
      break;
    default:
      console.log(`${messageTemplate} invalid drink selection '${drink}'.`);
      break
  }



  return 0
}

drinkOrder("small", "COLA");
drinkOrder("Large", "COLA");
drinkOrder("small", "XXX");