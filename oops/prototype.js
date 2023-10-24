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
