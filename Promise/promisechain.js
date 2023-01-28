const cart=["shoes", "blazzer", "kurta"];

/*const promise=createOrder(cart);
console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
    //proceedtoPayment(orderId)
})
.catch(function (err){
    console.log(err.message);
});
*/

createOrder(cart)
  .then(function(orderId){
    console.log(orderId)
    return orderId
  })
  .then(function(orderId){
    return proceedtoPayment(orderId)
  })
  .then(function(paymentinfo){
    console.log(paymentinfo)
  })
  .catch(function(err){
    console.log(err.message)
  });

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        //logic to createOrder
        //validateCart
        //valid OrderId
        if(!validatCart(cart)){
            const err=new Error("cart is not valid");
            reject(err);
        }
        const orderId="36782"
        if(orderId){
            setTimeout(function(){resolve(orderId);
        },5000)
    }
    });
    return pr;
}

function validatCart(cart){
    return true;
}

function proceedtoPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful")
    })
}
