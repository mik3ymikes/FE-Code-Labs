// function outerFunction(outerVaraible) {
//   return function innerFunction(innerVariable) {
//     console.log("Out" + outerVaraible);
//     console.log("in" + innerVariable);
//   };
// }

// const newFunction = outerFunction("outside");
// newFunction("inside");

// function myname(name) {
//   console.log("hi" + name);
// }

// //invokes auto when assign and give value
// let john = myname("john");

function myname(name) {
  return function myage(age) {
    let confused = "?";
    console.log("hi" + name);
    console.log("whats your age" + age);
    console.log(confused);
  };
}

let john = myname("john");
john(19);
