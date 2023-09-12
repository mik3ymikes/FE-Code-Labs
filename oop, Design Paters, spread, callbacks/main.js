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