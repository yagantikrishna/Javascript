//Reduce function is used in a place where you have to take all the elements from an array and come up with a single value.
//Example calculate the sum of the elements of an array. Find the largest element in the array.

//Generic implementtation to findSum
const arr=[10,20,23,30,35];
 function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum;
 }
 console.log(findSum(arr));

 //Generic implementtation to findMax
function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

//Now Implement using reduce
 //Parameters inside function acc--> indicates the value after changes or accumulated value, curr--> it stores the actual array values
 //The initial value which we need to pass should be passed as a second paramter inside function

 const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
 },0);
console.log(output);
 //Implementing findSum using reduce
 const output2=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr
    }
    return max;
 },0)
 console.log(output2);
