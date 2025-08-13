export const cart = [];       // export -> now this variable can be accessed outside cart.js

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
            quantity: 1
        });
    }
}