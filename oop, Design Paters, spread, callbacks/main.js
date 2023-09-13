// function Character(name, hitpoints, life){

//     this.name=name;
//     this.hitpoints=hitpoints;
//     this.life=life;
//     // this.speak= function speak() {
//     //     console.log("hello" +this.name)
//     // }
// }

// let wookie=new Character("wookie", 20, 40)
// console.log(wookie)

// Character.prototype.speak=function(){
//     console.log(this.name +"hi")
// }

// wookie.speak()


// class Character {
    
//     constructor(name, hitpoints, life){

//     this.name=name;
//     this.hitpoints=hitpoints;
//     this.life=life;
//     }
//     speak() {
//         console.log("hello" +this.name)
//     }
// }


// let jar=new Character("jar", 43, 32,)
// jar.speak()




// class Character {
    
//     constructor(name, hitpoints, life){

//     this.name=name;
//     this.hitpoints=hitpoints;
//     this.life=life;
//     }
//     speak() {
//         console.log("hello" +this.name)
//     }

//     get blue(){
//         return this.life
//     }

//     set hitpoints(points){
//         if(points<40){
//             console.log("not enough ")
//         }
//         else(this._hitpoints=points)
//     }

//     get hitpoints(){
//         return this._hitpoints
//     }
// }


// let jar=new Character("jar", 53, 32,)
// jar.speak()


// console.log(jar.blue)


// class Address{
//     constructor(zip, street){
//         this.zip=zip
//         this.street=street
//     }
// }


// class User{
//     constructor(name, {age, phone="12346", address}={}) {
//         this.name=name
//         this.age=age
//         this.phone=phone
//         this.address=address
// }}

// let user= new User("Bob", {age:10, address:new Address("1", "Main")})
// console.log(user)




// function createObservable(){
//     this.subscribers.push(fn)
// }



// class Observable{
//     constructor(){
//         this.subscribers=[]
//     }
//     subscribers(fn){
//         this.subscribers.push(fn)
//     }

//     unsubscribe(fn){
//         this.subscribers=this.subscribers.filter((item) =>item !==fn)
//     }

//     broadcast(data){
//    for(let i=0; i<this.subscribers.length; i++){
//    this.subscribers[i](data)
//    }
//     }

// }


// const observer=new Observable()
//     const fn=(data)=>{
//         console.log("callback was executed", data)
//     }

//     observer.unsubscribe(fn)

//     observer.broadcast("hello from observable")



//     observer.broadcast("hello from the observable")




// let person={
//     firstname:"mike",
//     lastname:"hen"
// }

// let personFirst=person.firstname="nick"


// let person={
//     firstname:"mike",
//     lastname:"hen"
// }


// // let {firstname, lastname}=person

// // console.log(firstname)


// // // let {firstname:fname, lastname:lname}=person
// // let {firstname:fname, age, lastname:lname}=person

// // console.log(fname)
// // console.log(age)//undefined since not defined earlier

// let {firstname, lastname ="nick", age, lastname:lname}=person
// console.log(lastname)//will keep the object name and default if its not there
// console.log(lastname)



// const arr=[1,2,3, 4]

// let [x, y, z]=arr

// console.log(z)


//this assign those variables in the spot



// let [x, y, ...z]=arr

// console.log(z)



// const arr=[1,2,3]

// let [x, ,y]=arr
// console.log(y)




// let person={
//         firstname:"mike",
//         lastname:"hen",
//         age:30
//     }


    // let {firstname:fi, ...resty }=person ///#@#@objects are diff you got to colon rename cant reassign with just an variable in the same place
    // console.log(fi)

//     console.log(resty)
//spread has to be last or an error

// let {...ya, age}=person doesnt work


// let name1="son";
// let name2="dad";


// [name1, name2]=[name2,name1];

// console.log(name1)
// console.log(name2)
//doesnt work idk why...
//didnt work cuz semicolon...wow...first errror i caughtt of semicolon




// function getPerson(){
//     return {}
// }
   

// let{firstName,lastName}=getPerson() || {}

// console.log(firstName,lastName)
