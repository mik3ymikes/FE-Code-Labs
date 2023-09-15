// //1.)

// class Subject{
//     constructor(){
//         this.observers=[]
       
//     }

//     addObserver(person,...rest){
//       this.observers.push(person,...rest)
//     //   this.observers.push(...rest)
//     }


//     removeObserver(peep){
//         this.observers=this.observers.filter((pers)=>pers!=peep)
//     }

//     notifyObservers(){
//           for(let i=0; i<this.observers.length;i++){
//             console.log("notified " + this.observers[i])
//           }
//     }

//     notifyObservers2(){
//         this.observers.forEach(n=>{mehMethod()
//             console.log(n)
//         })
//     }

// }



// class Observer{
//     update(){
//         console.log("Observer updated")
//     }
// }





// let meh=new Observer

// let mehMethod=meh.update
// // // console.log(mehMethod)



// // let blah=new Subject()
// // blah.addObserver("john")
// // blah.addObserver("ken")
// // blah.addObserver("mike")
// // // console.log(blah.observers)

// // // blah.notifyObservers()
// // // blah.removeObserver("ken")
// // // blah.notifyObservers()

// // blah.notifyObservers2()


// let newPeeps=new Subject()


// newPeeps.addObserver("fred", "joe", "mario", "lugi")
// newPeeps.addObserver("tim")
// console.log(newPeeps.observers)
// newPeeps.removeObserver("joe")
// console.log(newPeeps.observers)
// newPeeps.notifyObservers()
// newPeeps.notifyObservers2()

//got it!@#@! 1 is worst code ever but did it



2//


const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];


let {name, age, address, address:{city,country}}=person

console.log(name)
console.log(age)
console.log(address)

console.log(city)
console.log(country)

let[,b,,d]=fruits
console.log(b, d)
