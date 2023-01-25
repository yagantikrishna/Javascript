const users = [{firstName:"Sai", lastName:"krishna", age:25},
{firstName:"Vinod", lastName:"kumar", age:28},
{firstName:"Gopi", lastName:"Chand", age:34}]

//using reduce filter to find the number of persons with same age
//acc={25:1.28:2}

const output=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1
    }
    return acc;
},{})

console.log(output);

//using map to combine firstName and lastName
//map={Sai Krishna, Vinod Kumar, Gopi Chand}

const output2=users.map((x)=>x.firstName+" "+x.lastName);

console.log(output2);

//using filter to print firstname of all users whose age is less than 30
//filter={Sai,Vinod,Gopi}
const output3= users.filter((x)=>x.age<30).map((x)=>x.firstName);
/*function True(x){
    if(x.age<30){
    return x.firstName;
    }
}
console.log(users.filter(True));
*/
console.log(output3);
