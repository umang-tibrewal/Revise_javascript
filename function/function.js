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

// concept of this ->it represent the current state

let exampleobj={

    name:"umang",

    welcome:function (){

        console.log(`welcome ${this.name}`);
        console.log(this);
    }
  
}

console.log(exampleobj.welcome());

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
// ---------------------------------------------------------------------------------------------------------------------------
let arowThis=()=>{

    console.log(this);
}
arowThis()
// return empty parenthesis

// let addTwonumbers=()=>{

//     return (4+5)
// }
//  explicit arrow function


// let addTwonumbers=()=>(5+5)
//implicit return function

// but when deal with object make sure to wrap in {}
let addTwonumbers=()=>({username:"umang"})


console.log(addTwonumbers());