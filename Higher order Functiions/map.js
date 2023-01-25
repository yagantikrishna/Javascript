const radius=[2, 3, 4, 6]
const area=function(radius){
    return Math.PI*radius*radius;
};

const circumference=function(radius){
    return 2*Math.PI*radius;
};

//Array.prototype makes the function  calculate available to all the arrays you see in the code.
Array.prototype.calculate=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

function binary(x){
    return x.toString(2);
}
//map function is used to transform an array
//map function maps the radius function with a logic
console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
//console.log(calculate(radius, circumference));
console.log(radius.map(binary))



