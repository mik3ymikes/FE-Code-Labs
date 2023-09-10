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



// const user={
//     firstName:"Patrick",
//     lastName:"Scott",
//     hobbies:["programming", "piano"],
//     listHobbies:function(){
//         this.hobbies.forEach(function(hobby){
//             console.log(hobby)
//         })
//     }

// }
// user.listHobbies()



// let games={
//     zelda:"links awakening",
//     mario: "super mario 3",
//     metroid:"super metroid",
//     finalFantasy:"ff7",

//     ChadsFavorite:function(){
//         console.log("his fav is " + this.zelda)
//         let mikesFav=()=>console.log("his favorite is " + this.metroid)
//         mikesFav()
//     }
// }

// games.ChadsFavorite()




// let games={
//     zelda:"links awakening",
//     mario: "super mario 3",
//     metroid:"super metroid",
//     finalFantasy:"ff7",
//     hobbies:["games", "movies", "stuff"],
//     listHobbies:function(){
//         for(let hobby in this.hobbies){
//             console.log(this.hobbies[hobby])
//         }
//     }
// }
// games.listHobbies()


// let games={
//     zelda:"links awakening",
//     mario: "super mario 3",
//     metroid:"super metroid",
//     finalFantasy:"ff7",
//     hobbies:["games", "movies", "stuff"],
//     listHobbies:function(){
//         this.hobbies.forEach(function(hobby){
//             console.log(hobby)
//             console.log(this.zelda)
            
//         }, this)
//         }
//     }

// games.listHobbies()



// let blah=["hi", "nah", "jah"]


// blah.forEach(function(o){
//     console.log(o)
// })



function User(name){
    this.name=name,
    console.log(this)
}


let bob=new User("bob")