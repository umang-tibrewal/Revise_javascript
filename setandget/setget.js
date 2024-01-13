class Fruits{
    
    
    constructor(name,price){
        
        this.name=name;
        this.price=price
    }
    
    get name(){
        
        return( this._name.toUpperCase() )
    }
    set name (name){
        
        this._name=name;
       
    }
     get price(){
        
        return( this._price*12 )
    }
    set price (name){
        
        this._price=name;
       
    }
    
}

let apple=new Fruits("apple",500)
console.log(apple.name)
console.log(apple.price)
// This is done to have custom input and custom output there is way to do it in form of function and object also