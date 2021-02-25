
function calculateDiscountAmount(cartArray, discountAmount, type) {
  // discountAmont is a percentage
  // type is the type to be applied; any is a special type

  let totalPrice = 0;
  let cartSize = cartArray.length;
  
  for (item = 0; item < cartSize; item++) {
    message = `${cartArray[item].name} ${cartArray[item].quantity} @ ${cartArray[item].price} = ${cartArray[item].quantity * cartArray[item].price}`;

    let discount = 0;
    itemPrice = (cartArray[item].price * cartArray[item].quantity);
  
    if ((cartArray[item].type === type) || (type === 'any')) {
       discount = (itemPrice * discountAmount) / 100;
    }

    message = message + `, ${cartArray[item].type}, discount @ ${discountAmount}% = ${discount}`;

    totalPrice = totalPrice + (itemPrice - discount);
    //console.log(message);
  }

  return totalPrice.toFixed(2);

}

//console.log('food=' + calculateDiscountAmount(shoppingCart, 20, "food"));
//console.log('alcohol=' + calculateDiscountAmount(shoppingCart, 100, "alcohol"));
console.log('any=' + calculateDiscountAmount(shoppingCart, 15, 'food'));
console.log('any=' + calculateDiscountAmount(shoppingCart, 50, 'any'));
console.log('any=' + calculateDiscountAmount(shoppingCart, 100, 'any'));
