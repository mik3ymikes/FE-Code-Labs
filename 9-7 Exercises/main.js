// 1. function outerFunction() {
//   let outerVar = "Im outside!";

//   function innerFunction() {
//     let innerVar = "IM Inside";
//     console.log(outerVar);
//     console.log(innerVar);
//   }
//   innerFunction();
// }
// outerFunction();

//function outerfunction is a gloabl function that can be called anywhere in the code
//inner function is a local scope function inside outerfunction(nested)...it is able to access Outerfunctions variables but needs to be called inside the outerFunction to work unless its returned

// 2.

// mainFunction();

// function mainFunction() {
//   console.log("I work");
// }

//this works because function declarations can be called before they are declared. since those functions are hoisted

// 3;
// function closeEx() {
//   let name = "link";

//   return function innerFunc() {
//     console.log(name);
//   };
// }

// closeEx()();
// //or

// let random = closeEx();
// random();

// 4.

// let randomVar = "Mario";

// function modifyGlobal() {
//   randomVar = "lugi";
//   console.log(randomVar);
// }

// modifyGlobal();

// function localScopeTest() {
//   let randomVar = "Geno";
//   console.log(randomVar);
// }

// localScopeTest();

//function modifyGlobal reassigned the variable and this worked once the function was called because a local scope has access to global vars
// functoin localScope allowed you to set a new variable with the same name because it was in the local scope

// 5.)

// function functionFactory(name) {
//   return function example() {
//     console.log("good morning " + name + " how are you?");
//   };
// }

// functionFactory("rex")();
// functionFactory("fox")();
// functionFactory("peppy")();

// 6.)

// function hoistingTest() {
//   console.log(character);
//   console.log(character2);

//   let character;
//   var character2;
// }

// hoistingTest();
// //using let or const gives and error and states cannont use before initializatoin
// //using var results in undefined but will allow the code to run

// 7)

// function setupCounter() {
//   let i = 1;
//   return function () {
//     i++;
//     console.log("Here is rep # " + i);
//   };
// }

// let exercise = setupCounter();

// exercise();
// exercise();
// exercise();
// exercise();

// // 8.)

// function newCounter() {
//   let i = 1;
//   return function () {
//     if (i < 10) {
//       i++;
//       console.log("Counter " + i);
//     } else {
//       i = 0;
//     }
//   };
// }

// let eio = newCounter();

// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
// eio();
//closure is able to keep acessing its outerscopes variable and then modify it across mutliple calls

// 9>)
// let ranVar = "cloud";

// function num1() {
//   ranVar = "sid";
//   let ranVar3 = "cait";

//   console.log(ranVar);
//   return function () {
//     console.log(ranVar3);
//   };
// }

// num1()();

// function num2() {
//   ranVar2 = "red";
//   let ranVar2 = "blue";
//   console.log(ranVar2);
// }

// num2();

//it maintains access of the variables even after the outer function is complete

let array1 = [0, 1, 3, 5];
let target = 4;

function reachTarg() {
  let anwser;
  // while (anwser != target) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    // }
  }
}

reachTarg();
