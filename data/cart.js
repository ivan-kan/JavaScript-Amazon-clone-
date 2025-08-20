export let cart = JSON.parse(localStorage.getItem('cart'));   

if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }];       // export -> now this variable can be accessed outside cart.js
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));     // need to use this whenever we update the cart 
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {       // product already in the cart 
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {          // if that item exits 
        matchingItem.quantity++;
    }
    else {
        cart.push({
            productId: productId,
            quantity: 1, 
            deliveryOptionsId: '1'  // default option 
        });
    }

    saveToStorage(); 
}

export function removeFromCart(productId) {
    const newCart = []; 

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem); 
        }
    });  

    cart = newCart; 

    saveToStorage(); 
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {       // product already in the cart 
            matchingItem = cartItem; 
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId; 

    saveToStorage(); 
}