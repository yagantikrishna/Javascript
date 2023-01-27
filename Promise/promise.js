const cart=["shoes", "blazzer", "kurta"];

createOrder(cart);//This api takes cart items and returns us a orderId

proceedToPayment(orderId)//This api will then take orderId and take you to the payment page

//The above operations are asynchronous and dependent on each other, we do not know how much time they would take

//Lets try to wrap them up in a call back function.

createOrder(cart, function(orderId){
    proceedToPayment(orderId)
});

//Now with the above call back function we have the issue of inversion of control, because we are giving control to createOrder API, we have no control over how much time would it take or how many times proceed
//to payment would be called

//To avoid this problem we use never use callback function inside a API, instead we use promise.promise is nothing but a empty object{} with some data value in it.
const promise=createOrder(cart);//here createOrder is an async operation. {data:undefined}

/* As we know javascript waits for none when the above line is executed, createOrder Api returns an empty object, whose data is filled later when the async operation is completed 
We will attach the ProceedtoPayment as Callback function to promise object
*/
promise.then(function(orderId){
    proceedToPayment(orderId)
});

createOrder(cart)
.then(orderId=>proceedToPayment(orderId))

.then(paymentInfo=>ShowOrderSummary(paymentInfo))
.then(balance=>updatewalletBalance(balance))
/*Even Here we are using callback functions again so what improvement did we make, In the earlier case we are passing a callback function inside a API, here we are attaching a callback function to promise object
Once the createOrder API return orderId and promise object is filled automatically callback function is called we are redirected to ProceedtoPayment, earlier we do not have that control whether proceedtoPayment wiil
be called or not its upto craeteOrder API */

const github_api="https://api.github.com/users/yagantikrishna"

const user=fetch(github_api);

console.log(user);

user.then(function(data){
    console.log(data)
});
