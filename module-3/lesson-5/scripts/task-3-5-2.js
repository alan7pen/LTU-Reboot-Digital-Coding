
function calculateDiscountFood(cartArray) {

  const DISCOUNT_AMOUNT = 0.20;

  let totalPrice = 0;
  let cartSize = cartArray.length;
  
  for (item = 0; item < cartSize; item++) {
    //console.log(`${cartArray[item].name} ${cartArray[item].quantity} @ ${cartArray[item].price} = ${cartArray[item].quantity * cartArray[item].price}`);

    let discount = 0;
    itemPrice = (cartArray[item].price * cartArray[item].quantity);
    
    if (cartArray[item].type === "food") {
       discount = itemPrice * DISCOUNT_AMOUNT;
    }

    //console.log(`${cartArray[item].type}, discount = ${discount}`);

    totalPrice = totalPrice + (itemPrice - discount);
      
  }

  return totalPrice.toFixed(2);

}

console.log(calculateDiscountFood(shoppingCart));
