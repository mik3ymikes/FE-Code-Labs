
// const greet=function(greeting){
//     return function (name) {
//           console.log(greeting + name)
//     }
// }


// let greeter=greet("hello bro ")
// greeter("tom ")




// const greet= (greeting)=> (name)=>console.log(greeting+name)



// greet("hi ")("tom")


const secureBooking=function(name){
    let passengerCount=0

    return function(){
        passengerCount++
        console.log(passengerCount+" passengers "+name)
    }
}

// secureBooking("john")()
// secureBooking("tim")()


const booker=secureBooking("john")
// secureBooking("tim")()
booker()


