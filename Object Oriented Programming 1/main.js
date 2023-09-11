
// const player={
//     name:this.name,
//     hp:100,
//     mp:0,
//     items:[]


// }

// const hanSolo=player
// hanSolo.name="han solo"
// hanSolo.hp=80
// hanSolo.mp=20
// hanSolo.items=["Blaster"]

// //changed both...player is object and only have one type at a time when make it...so modifying does both or all templeates

// const darthVader=player
// console.log(hanSolo)
// console.log(darthVader)



// const createPlayer=function(name, hp, mp, items){
//     return {name, hp, mp, items
// }
// }

// let hanSolo=createPlayer("han solo", 100, 10, "blaster")
// let darthVader=createPlayer("darth vader", 200, 50, "sabre" )
// console.log(hanSolo)
// console.log(darthVader)'


// class Player{
//     constructor(name, hp, mp, items, phrase){
//         this.name=name,
//         this.hp=hp,
//         this.mp=mp,
//         this.items=items
//         this.phrase=name + " "+ phrase

//     }

// }

//speak and name , hp, mp, items exist on the protype of player...but the properties exist on each instance of a player object??
// class Player{
//     constructor(name, hp, mp, items){
//         this.name=name,
//         this.hp=hp,
//         this.mp=mp,
//         this.items=items
//     }
//     speak(phrase){
//       console.log(`${this.name} says ${phrase}`)
//     }

// }

// const hanSolo=new Player("han Solo", 100, 20, "blaster")
// hanSolo.speak("ill take my chances")
// console.log(hanSolo)


// // const hanSolo=new Player("han Solo", 100, 20, "blaster", " ill take my chances")
// // console.log(hanSolo)

// const darthVader=new Player("darthVader", 200, 100, "sabre")
// darthVader.speak("im your father bruh")
// console.log(darthVader)



// function anotherPlayer(name, hp, mp, items){
// this.name=name,
// this.hp=hp,
// this.mp=mp,
// this.items=items
// }

// let wookie=new anotherPlayer("wookie", 21, 1, "nothing")
// console.log(wookie)

// let lei=new anotherPlayer("leia", 23, 43, "nothing")
// console.log(lei)



// function calculator(){
//    this.read=function(){
//     this.a=prompt("what is value 1?")
//     this.b=prompt("what is value 2")
//    }
//    this.sum=function(){
//     return this.c+ this.d
//    }

//    this.mul=function(e,f){
//     return e *f
//    }
// }




// let test =new calculator()

// console.log(test.mul(2,2))

// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );





// class ah{
//     constructor(){

//     }

//     add1(){
//         console.log(a + b)
//     }
// }



// let blah=new ah

// blah.add1(2,4)