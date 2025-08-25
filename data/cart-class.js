class Cart {      // class = object generator 
    // Properties 
    cartItems;
    localStorageKey;  

    // will run automatically when we generate a new object -> put the set-up code inside 
    /* 
    - Has to be named as 'constructor'
    - Should not return anything 
    */
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }   

    // Methods 
    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));   // this points to the object that we generated 

        if (!this.cartItems) {
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '3'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];       
        }
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {       // product already in the cart 
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {          // if that item exits 
            matchingItem.quantity++;
        }
        else {
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionsId: '1'  // default option 
            });
        }

        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {       // product already in the cart 
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
}

// Use function to generate objects 
const cart = new Cart('cart-oop');       // generate the cart object using the new keyword 
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart); 

console.log(businessCart instanceof Cart);     
// this checks if businessCart is an instance (generated) from the class Cart 