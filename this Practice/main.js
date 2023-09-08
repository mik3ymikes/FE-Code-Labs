"use strict"


// function test(){
//     console.log(this)
// }


// test()


// const user={
//     firstName:"Patrick",
//     lastName:"Scott",
//     fullName:()=>{console.log(this)
//     console.log(this.firstName+ ""+ this.lastName)}
//     // fullName:function(){
//     //     console.log(this)
//     //     console.log(this.firstName + ""+this.lastName)

//     // }
// }

// user.fullName()///this takes from the object that is excuting the current function




//arrow doesnt have its own this...so it takes the scope of the nearest containing function if nothing global scope
// const user={
//     firstName:"Patrick",
//     lastName:"Scott",
//     fullName:function(){
//     const arrowfunction=()=>{console.log(this)
//     console.log(this.firstName+ ""+ this.lastName)
//     }
//     arrowfunction()
// }
    
//     }


//     user.fullName()



const user={
    firstName:"Patrick",
    lastName:"Scott",
    hobbies:["programming", "piano"],
    listHobbies:function(){
        this.hobbies.forEach(function(hobby){
            console.log(hobby)
        })
    }

}
user.listHobbies()