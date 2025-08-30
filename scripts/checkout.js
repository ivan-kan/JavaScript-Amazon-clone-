import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js'; 
// import '../data/backend-practice.js'

Promise.all([      // this allows to run multiple promises at the same time 
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {             // 2nd step 
            resolve('value2');
        });
    }) 
]).then((value) => {    // parameter saved in resolve(), is also saved as the parameter of then()
    console.log(value); 

    renderOrderSummary();           // 3rd step 
    renderPaymentSummary();
});

// resolve is a function, similar to done() 
// let us control when to go to the next step
/* 
new Promise((resolve) => { 
    // it runs the inner function immediately
    loadProducts(() => {            // 1st step 
        resolve('value1');        // when called, means can go to next step 
    });  

}).then((value) => {         // 'value1' in resolve() will be saved in the value parameter 
    console.log(value); 

    return new Promise((resolve) => {
        loadCart(() => {             // 2nd step 
            resolve(); 
        });
    });

}).then(() => {
    renderOrderSummary();           // 3rd step 
    renderPaymentSummary();
}); 
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    }); 
});  
*/
