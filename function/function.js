function add(number1,number2){
    return number1+number2
}
let result=add(54,10)
console.log(result);

let  funobj={

    name:"umang",
    age:24
}

function printName({name:n,age:a}){

    console.log(`my name is ${n} i am ${a} years old`);
}
printName(funobj)
callexplain(53)


function callexplain(number){

    console.log(number)
}

// // this work 
// // this will not work 
// scallex(24)
// let scallex=function (num){
// console.log(num);

// }


let funex=function(){

    return(4+6);
}
console.log(funex());
// -----------------------------------------------------------------------------------------------------------------------------------------

// concept of this ->it represent the current context

let exampleobj={

    name:"umang",

    welcome:function (){

        console.log(`welcome ${this.name}`);
        console.log(this);// This will console log the object exampleobj
    }
  
}

console.log(exampleobj.welcome());
/*
The current context of node which we can see by consoling this console.log(this) will give {}
The current context of browser which we can see by consoling log this in browser console.log(this) will give window

*/

// this donot work inside function 

// let ex=function (){

//     let name ="umang";

//     console.log(`my name is ${this.name}`);
//     console.log(this);
// }
// ex()

// function thisConcept(){
//     console.log(this);
// }

// thisConcept()

// this will return long value 
/*The long value is function own context and this.something is not present in that context so its giving undefined */
// ---------------------------------------------------------------------------------------------------------------------------
let arowThis=()=>{

    console.log(this);
}
arowThis()
// return empty parenthesis cz arraow function donot create its own context in inherit from global for node its {} and for browser its window 

// let addTwonumbers=()=>{

//     return (4+5)
// }
//  explicit arrow function


// let addTwonumbers=()=>(5+5)
//implicit return function

// but when deal with object make sure to wrap in {}
let addTwonumbers=()=>({username:"umang"})


console.log(addTwonumbers());


/*-------------------------------------------------------------------------------------------------------------------------------------------------------
An Important Observation 

When dealing with function inside an object 
let obj={
  
  name:"umang",
  classes:"24",
  location:"kolkata",
  greting: function(){
    
    console.log(`Welcome to javascript learning ${this.name}`)
    return 0;
  }
}

console.log(obj.greting())
This will give expected Result 
Welcome to javascript learning umang
0
But
let obj={
  
  name:"umang",
  classes:"24",
  location:"kolkata",
  greting: ()=>{
    
    console.log(`Welcome to javascript learning ${this.name}`)
    return 0;
  }
}

console.log(obj.greting())

Welcome to javascript learning undefined
0

Explanation 
Regular functions create their own this context, which in an object method refers to the object itself
Arrow functions inherit this from their surrounding scope (lexical scope), they don't create their own this context





*/
/*Rest Operator 
When you Dont know how much value a function will have we can use rest operator simmilar to spread operator 
it will create an array and keep adding value to it 
let a=function(...num){
  
  console.log(num);
  return 0;
}
console.log(a(500,600,700,800,900,1000))
Output:

[ 500, 600, 700, 800, 900, 1000 ]
0



*/
