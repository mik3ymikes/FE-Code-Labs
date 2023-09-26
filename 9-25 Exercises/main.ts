// let person:string;
// person="mike"

// console.log(person)


// function AreaRect(length:number, width:number): number {
//  return length * width
// }


// console.log(AreaRect(4, 4))


// function isEven(a:number){
//     if(a%2==0){
//         console.log("number is even")
//     }else{
//         console.log("number odd")
//     }
// }

// isEven(4)
// isEven(5)



//     for(let i=0; i<=10; i++){
//         console.log(i)
//     }

// const name:string=prompt("enter your name")



function findFactorial(n:number){
    let value=1
   
    for(let i=1;i<=n;i++){
 
        value*=i
    
}

console.log(value)
}


findFactorial(4)





function checkLeapYear(year:number) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input

checkLeapYear(2000);


let i:number
let counter:number

i=0
counter=0

while(i<=100){
console.log(i)
counter+=i
i++
}
console.log(counter)


let rah:number
rah=12

let boo:boolean
boo=true


let nah:null
nah=null

let uni:undefined
uni=undefined


let objs:{
    name:string;
    age:number
}

objs={
    name:"mike",
    age:32
}

let arr:string[]
arr=["hi", "yo"]



