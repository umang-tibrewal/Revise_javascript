
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

