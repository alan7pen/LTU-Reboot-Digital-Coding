
function calculatePrice(cartArray) {

  let totalPrice = 0;

  cartSize = cartArray.length;
  
  for (item = 0; item < cartSize; item++) {
    //console.log(`${cartArray[item].name} ${cartArray[item].quantity} @ ${cartArray[item].price} = ${cartArray[item].quantity * cartArray[item].price}`);
    totalPrice = totalPrice +
      (cartArray[item].price * cartArray[item].quantity);
  }

  return totalPrice;

}


console.log(`Cart total = ${calculatePrice(shoppingCart).toFixed(2)}`);



// // play...
// let newCart = shoppingCart;
// newCart.tax = 0;

// newCart.pop();newCart.pop();newCart.pop();newCart.pop();
// newCart.push(
//   {
//     name:"dvd",
//     type:"entertainment",
//     quantity:1,
//     price:7
//   }

// );
// console.log('---------------------------');
// console.log(`Cart total = ${calculatePrice(newCart).toFixed(2)}`);
// console.log(newCart.tax);