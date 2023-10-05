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