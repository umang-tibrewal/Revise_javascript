class user{

    constructor(username){

        this.username=username
    }

    log(){

        console.log(this.username)
    }
}


class teacher extends user{

    constructor(username,email){
        super(username)
        this.email=email    
       
    }


    isloogedin(){

        console.log("true")
    }

}

let t= new teacher("umang","umang@123")
console.log(t.log())


//use of static 


class school{


    constructor(username,schoolid){

        this.username=username
        this.schoolid=schoolid
    }


    static setid(){

        this.schoolid=54
    }
}

let school1=new school("umang",54)
school1.setid()

console.log(school1.id)
