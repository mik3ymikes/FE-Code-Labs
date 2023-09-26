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
function findFactorial(n) {
    var value = 1;
    for (var i_1 = 1; i_1 <= n; i_1++) {
        value *= i_1;
    }
    console.log(value);
}
findFactorial(4);
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}
// take input
checkLeapYear(2000);
var i;
var counter;
i = 0;
counter = 0;
while (i <= 100) {
    console.log(i);
    counter += i;
    i++;
}
console.log(counter);
var rah;
rah = 12;
var boo;
boo = true;
var nah;
nah = null;
var uni;
uni = undefined;
var objs;
objs = {
    name: "mike",
    age: 32
};
var arr;
arr = ["hi", "yo"];
function addNum(value1, value2) {
    console.log(value1 + value2);
    console.log(value2);
    return value2;
}
addNum(2, 2);
