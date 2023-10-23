# oops in javascript 

### does javascript has classes ??
on superficial level yes 
but deper concept javascript is a prototype language 
everything is syntactically sugar coted 
to wecome class programer 

## 4 pillar of oops 
encapsulation
inheritance 
abstraction
polymorphism


#### concept of this
this give current refrence 
in node it will give empty parenthesis 
in window it will give curren tcontext 

```javascript

let obj1={

    name:"umang",
    id:"54",
    class:"10 D",
    fun1: function(){

        console.log("hello ${this.name}")
    }
}

console.log(obj1.func1())


function user(username,userid,userloged)
{

    this.username=username
    this.userid=userid
    this.userloged=userloged
}

let userone =new user("umang",45,true)
let   usertwo=new user("hitesh",410,false)

// new keyword create an empty object
// cunstructor  function is called due to new keyword





```

## behaviour of javascipt 
prototype behaviour 
javascript go child to parent to  grand parent to find a value util it incounter null

### everthing in javascript is an object

 function -------|
string-----------|------object----------null
 array------------|



if you make array in console and write name of array you will see default prototype 

can we make our own prototype ?yes
power of new keyword

```javascript


let beverage =function (name,price){

    this.name=name
    this.price =price 
}


bevarage.prototype.increment=function(){

    this.price++
    console.log("the price is ${this.price}")
}

// let chai=bevarage("chai",60)
// chai.increment()

// this will not work 

// to make it work we need to use new

let chai =new bevarage("chai",50)
chai.increment()
```
