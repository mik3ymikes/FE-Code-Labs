// "use strict"

// //static method ran without an instance...on the class iteself

// // class Calculator{
// //     static add (a,b){
// //         return a+b
// //     }
// // }


// // console.log(Calculator.add(4,5))



// //1.)


// function myGame(){
//     console.log(this)
// }




// let myGames={
//     sega:"sonic",
//     snes:"mario",
//     ps1:"re1",
//     ps2:"metal gear solid",

//     games: function(){
//         console.log(this)
//     },


//     games2: ()=>console.log(this)
// }



// myGame()
// // this pulls from the global scope since no object is calling it...if i use strict mode however it returns undefined.

// myGames.games()
// //the function gets access to the object that callled it thus they gets access to the mygames object

// myGames.games2() //arrow functions do not have their own this key word so they use the function surronding them or move to global window





// function Person1(name, age){
//     return{
//         name,
//         age,
//         function greet1(){
//             console.log("hello " + this.name + " how are you")
//     }
//   greet1()
//     }
// }

// let bobby=new Person1("bobby", 12)





// 2. and 3)

// class Person {
//     constructor(name, age){
//         this.name=name
//         this.age=age
//     }
// greet(){
//     console.log("hello " + this.name + " how are you")
// }
// static info(){
//     return "this is a person class"
// }
// }


// let bob=new Person("bob", 90)
// let tony=new Person("tony", 23)

// bob.greet()
// tony.greet()



// 4.)
// class Person {
//     constructor(name, age){
//         this.name=name
//         this.age=age
//     }
// greet(){
//     console.log("hello " + this.name + " how are you")
// }
// static info(){
//     return "this is a person class"
// }
// }


// let bob=new Person("bob", 90)
// let tony=new Person("tony", 23)

// bob.greet()
// tony.greet()

// console.log(Person.info())
// console.log(tony.info())

//Static methods work on the class itself but not on instances. 


// 5.)

// class Person {
//     constructor(name, age){
//         this.name=name
//         this._age=age
//     }
// greet(){
//     console.log("hello " + this.name + " how are you")
// }

// get age(){
//     return this._age

// }

// set age(newAge){
// if(newAge<0){
//     alert("error")
// } else{
//     this.age=newAge
// }
// }


// static info(){
//     return "this is a person class"
// }
// }


// let bob=new Person("bob", 30)
// let tony=new Person("tony", 23)

// console.log(bob.age)
// console.log(tony.age)


// bob.age=-4

//you can set an inital value of age to negative and it will work. But if you use the set method it will give the alert




