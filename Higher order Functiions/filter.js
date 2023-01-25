//Filter function is used to filter an array
const arr=[1,10,3,56,8,9]

//Example using arrow functions
const output=arr.filter((x)=>x>10);
function isEven(x){
    return x%2==0;
}

function isOdd(x){
    return x%2;
}

console.log(output);
console.log(arr.filter(isOdd));
