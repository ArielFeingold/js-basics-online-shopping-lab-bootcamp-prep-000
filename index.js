
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

 function addToCart(item){
 var itemName = [item]
 var itemPrice = Math.floor(Math.random() * 100)
    cart.push({[itemName]: itemPrice })
    console.log(`${itemName} has been added to your cart.`)
    return cart
}

function viewCart(){
  var resultArray = [];
  var withoutLast
    if(cart.length === 0){
      console.log(`Your shopping cart is empty.`);
    } else if(cart.length === 1){
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`)
    } else if(cart.length === 2){
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`)
    } else{
      for(var i = 0; i < cart.length; i++){
        resultArray.push(` ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`);
        withoutLast = resultArray.slice(0, resultArray.length -1)
            console.log(`In your cart, you have${withoutLast}, and${resultArray[i]}.`); 
      }
    }
}
 
function total() {
 var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += Object.values(cart[i])[0]
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    var name = cart[i]
    if(name.hasOwnProperty(item)){
      delete cart[i]
      return cart
    } else{
      console.log("That item is not in your cart")
      return cart
    }
  }
}


function placeOrder(cardNumber) {
  // write your code here
}
