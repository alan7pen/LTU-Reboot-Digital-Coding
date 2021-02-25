function getItemsInPriceRange(cart, lowPrice, highPrice) {

  let arrItems = [];

  cartSize = cart.length;
  for(let item = 0; item < cartSize; item++) {
    itemPrice = cart[item].price;

    if ((itemPrice >= lowPrice) && (itemPrice <= highPrice)) {
      arrItems.push(cart[item]);
    }
  }

  return arrItems;
}


newCart = getItemsInPriceRange(shoppingCart, 2, 5);
console.log(newCart);
cartSize = newCart.length;
console.log(`No of items = ${cartSize}`);

for(let item = 0; item < cartSize; item++) {
  console.log(`${newCart[item].name} @ ${newCart[item].price} each`);
}