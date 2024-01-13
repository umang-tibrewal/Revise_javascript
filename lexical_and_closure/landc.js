//lexical scope and closure
let fruit=function(){
    let  apple=50
     function print(){
       return  apple
    }
   return  print()
}
let price=fruit()
console.log(price)

//Lexical scope - function inside function 
// Here we can see inside function (print) can acess varible of outside function (fruits ) this is called lexical scope 

//closure-
// Here we can see when we return the function not just function is returned its lexical scope which is apple value also returned


// Real project implementation

let colourset=function(colour){
    
        document.getElementById("value").style.backgroud-color=color;
    
}

button.onclick=colourset("green")// IF we do this it will directly implement the function as onclick want a function refrence not function execution 
let colourset=function(colour){
    
    return function set(){
        
        document.getElementById("value").style.backgroud-color=color;
    }
}

to overcome this we can use closure 
button.onclick=colourset("green")
// here we can acces colour variable due to closure and lexical scope