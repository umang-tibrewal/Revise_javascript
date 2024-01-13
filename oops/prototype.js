
//EVERTHING IN JAVASCRIPT IS AN OBJECT 
// Here we can see we made a function name fruits and we added a object like notion power and  can acces it this make it an object 
function fruits(season,price){
    this.season=season
    this.price=price
    
    
}
fruits.power=2;
console.log(fruits.power)

//-------------------new keyword-----------------------------
// Prototype ->javascript show prototypal behaviour 
// when we write any array or object on function in console and print it we see something there called prototype which contain all function of it can we add our own custom function yes with prototype

// Here in the fruit function we want to make a custom function which calculate the fruit price on the basic of dozen so we added a custom function using prototype

// why new keyword
// new keyword make a new object and bind the function property here fruits and our custom prototype property also 
fruits.prototype.dugen=function(){
    
    return this.price*12
}


let apple=new fruits("summer",50)

console.log(apple.dugen())
//***********************prototype for array and object 


// Prototype with array 
let arra=[94,82,77,36,45]

Array.prototype.multiply=function(value){
    
   return  this.map((e)=>{
        return e*value;
    })
    
    
}
arra=arra.multiply(10)
console.log(arra)
//Here we have created a custom function to multiply each element of an array with a value so here this define the entire array so we maped to multiply with each element 

let obj1={
    
    name:"umang"
}
// obj1.multiply(10)
Object.prototype.name=function(){
    
    console.log("whats my name?")
}
arra.name()

// Prototyping to array will not show changes in object 
// but object prototyping will show changes in array 


//***********prototype in object*********************
let ornament ={
    
    type:"gold",
    purity:24
}

Object.prototype.price=function(value){
    
 return    this.purity*value;
    
}

console.log(ornament.price(100))


//********************************************************************

//**********prototype in string************************************
let fruit ="apple"

String.prototype.addseason=function(value){
    let a=`${this}`
    let b= `${this} and the season is ${value}`
    
    return b;
}

console.log(fruit.addseason("summer"))

//*****************************************************************


let arr=[5,4]

Array.prototype.r=function(){

    console.log(this.map((e)=>{

        return e*50
    }))
}

arr.r()



// for string 

let s="umang"

String.prototype.reverce=function (){

    let a=`${this}`
    let c=a.length
    let result=""

    for(let i=c-1;i>=0;i--){
 result+=a[i]

    }

    return result

}

console.log(s.reverce())

// by this we can make custom function

//  every function ,string ,array go to object thn null
//  if we add any custom property to these not reflect in object and vice-versa is not true 


const user ={

    name:"umang",
    age:"24"
}

const t_assis={

    insvalid:true
}

const  teacher={

    school:"dps",
    location:"bgp",
    __proto__:user
}

console.log(teacher.name)

// this is prototype inheritance 

Object.setPrototypeOf(teacher,t_assis)
console.log(teacher.insvalid);

