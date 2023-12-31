/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

products = []


/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherries = {
    name: '1LB of Cherries',
    price: 2,
    quantity: 0,
    productId: 1431,
    image: 'images/cherry.jpg'
};

const strawberries = {
    name: '1LB of Strawberries',
    price: 3,
    quantity: 0,
    productId: 1432,
    image: 'images/strawberry.jpg'
};

const oranges = {
    name: '5lbs of Oranges',
    price: 5,
    quantity: 0,
    productId: 1433,
    image: 'images/orange.jpg'
};

products.push(cherries);
products.push(strawberries);
products.push(oranges);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

const cart = []


/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

const addProductToCart = function(productId) {
    let cherryLB = cart.indexOf(cherries);
    let strawberryLB = cart.indexOf(strawberries);
    let orangeLB = cart.indexOf(oranges);

    if ((productId === 1431) && (cherryLB === -1)) {
        cart.push(cherries);
        cherries.quantity = 1
    } else if ((productId === 1431) && (cherryLB !== -1)) {
        cart[cherryLB].quantity += 1
    } else if ((productId === 1432) && (strawberryLB === -1)) {
        cart.push(strawberries);
        strawberries.quantity = 1
    } else if ((productId === 1432) && (strawberryLB !== -1)) {
        cart[strawberryLB].quantity += 1
    } else if ((productId === 1433) && (orangeLB === -1)) {
        cart.push(oranges);
        oranges.quantity = 1
    } else if ((productId === 1433) && (orangeLB !== -1)) {
        cart[orangeLB].quantity += 1
    }
};


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const increaseQuantity = function(productId) {
    let cherryLB = cart.indexOf(cherries);
    let strawberryLB = cart.indexOf(strawberries);
    let orangeLB = cart.indexOf(oranges);

    if ((productId === 1431) && (cherryLB !== -1)) {
        cart[cherryLB].quantity += 1
    } else if ((productId === 1432) && (strawberryLB !== -1)) {
        cart[strawberryLB].quantity += 1
    } else if ((productId === 1433) && (orangeLB !== -1)) {
        cart[orangeLB].quantity += 1
    }
};


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

const decreaseQuantity = function(productId) {
    let cherryLB = cart.indexOf(cherries);
    let strawberryLB = cart.indexOf(strawberries);
    let orangeLB = cart.indexOf(oranges);

    if ((productId === 1431) && (cart.indexOf(cherries) !== -1) && (cart[cherryLB].quantity >= 2)) {
        cart[cherryLB].quantity -= 1
    } else if ((productId === 1431) && (cart.indexOf(cherries) !== -1) && (cart[cherryLB].quantity = 1)) {
        cart[cherryLB].quantity = 0;
        cart.splice(cherryLB, 1)
    } else if ((productId === 1432) && (cart.indexOf(strawberries) !== -1) && (cart[strawberryLB].quantity >= 2)) {
        cart[strawberryLB].quantity -= 1
    } else if ((productId === 1432) && (cart.indexOf(strawberries) !== -1) && (cart[strawberryLB].quantity = 1)) {
        cart[strawberryLB].quantity = 0;
        cart.splice(strawberryLB, 1)
    } else if ((productId === 1433) && (cart.indexOf(oranges) !== -1) && (cart[orangeLB].quantity >= 2)) {
        cart[orangeLB].quantity -= 1
    } else if ((productId === 1433) && (cart.indexOf(oranges) != -1) && (cart[orangeLB].quantity = 1)) {
        cart[orangeLB].quantity = 0;
        cart.splice(orangeLB, 1)
    }
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

const removeProductFromCart = function(productId) {
    if ((productId === 1431) && (cart.indexOf(cherries) !== -1)) {
        let cherryLB = cart.indexOf(cherries);
        cart[cherryLB].quantity = 0;
        cart.splice(cherryLB, 1)
    } else if ((productId === 1432) && (cart.indexOf(strawberries) !== -1)) {
        let strawberryLB = cart.indexOf(strawberries);
        cart[strawberryLB].quantity = 0;
        cart.splice(strawberryLB, 1)
    } else if ((productId === 1433) && (cart.indexOf(oranges) !== -1)) {
        let orangeLB = cart.indexOf(oranges);
        cart[orangeLB].quantity = 0;
        cart.splice(orangeLB, 1)
    }
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

const cartTotal = function() {
    let cartItems = cart.length;

    let allCherries = 0;
    let allStrawberries = 0;
    let allOranges = 0;
    let totalCost = 0;

    for (let i = 0; i < cartItems; i++) {
        if (cart[i] === cherries) {
            allCherries += 2 * cherries.quantity
        } else if (cart[i] === strawberries) {
            allStrawberries += 3 * strawberries.quantity
        } else if (cart[i] === oranges) {
            allOranges += 5 * oranges.quantity
        }
    }
    totalCost = allCherries + allStrawberries + allOranges
    return totalCost
};

/* Create a function called emptyCart that empties the products from the cart */

const emptyCart = function() {
    cart = []
};

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid;

const pay = function(amount) {
    if (totalPaid == undefined) {
        totalPaid = amount;
        return totalPaid - cartTotal()
    } else {
        totalPaid += amount;
        return totalPaid - cartTotal()
    }
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay,
    emptyCart,
    /* Uncomment the following line if completing the currency converter bonus */
    // currency
}