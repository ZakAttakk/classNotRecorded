class Food {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  changePrice(yourPrice){
    console.log("lalala")
    this.price = yourPrice
  }

}

class Cocktail extends Food {
  constructor(name, price, description, alcoholPercentage) {
    super(name, price, description);
    this.alcoholPercentage = alcoholPercentage;
  }
}

// var food1 = new Food("Spaghetti", 19.95, "Yummy")
// var food2 = new Food("Burger", 16.95, "Delicious")
// var cocktail1 = new Cocktail("Manhattan", 12.95, "Very strong!", .35)
// var cocktail2 = new Cocktail("Scotch Penicillin", 15.95, "Less strong!", .25)

// var menu = [food1, food2, cocktail1, cocktail2]

let foodAnswer1 = prompt("Enter a food 1");
let priceAnswer1 = prompt("Enter a price 1");
let dAnswer1 = prompt("Enter a description 1");


let foodAnswer2 = prompt("Enter a food 2");
let priceAnswer2 = prompt("Enter a price 2");
let dAnswer2 = prompt("Enter a description 2");

let cocktailAnswer = prompt("Enter a cocktail");
let cocktailPriceAnswer = prompt("Enter a price for your cocktail");
let cocktailDescriptionAnswer = prompt("Enter a description for your cocktail");
let cocktailAlcoholAnswer = prompt("Enter a percentage");


var orderItem1 = new Food(foodAnswer1, priceAnswer1, dAnswer1)
var orderItem2 = new Food(foodAnswer2, priceAnswer2, dAnswer2)
var orderItem3 = new Cocktail(cocktailAnswer, cocktailPriceAnswer, cocktailDescriptionAnswer, cocktailAlcoholAnswer)

var totalOrder = [orderItem1, orderItem2, orderItem3]

// console.log(orderItem1)
// console.log(orderItem2)
// console.log(orderItem3)

console.log(totalOrder)

let changedPrice = prompt("Now change the price of your cocktail!");

orderItem3.changePrice(changedPrice);

console.log(totalOrder)

let deletedItem = prompt(`You changed your mind! Delete one of these:
0) ${orderItem1.name}
1) ${orderItem2.name}
2) ${orderItem3.name}
`);

// if (deletedItem == 0) {
  totalOrder.splice(deletedItem, 1)
// }
// if (deletedItem == 1) {
  // totalOrder.splice(deletedItem, 1)
// }
// if (deletedItem == 2) {
  // totalOrder.splice(deletedItem, 1)
// }

// let changedPrice = prompt("Now change the price of your cocktail!");

console.log(totalOrder)

























// class Cocktail extends Food {
//   constructor(name, price, description, alcoholPercentage) {

//   }

// }



// let person = prompt("Please enter your name");