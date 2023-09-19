// //#1


// let myDiv=document.querySelector("#myDiv")


// myDiv.style.backgroundColor="lightblue"

// let para=document.querySelectorAll("p")

// para.forEach((p)=>
//     console.log(p.textContent)
// )


//#2
// let blah=document.querySelector("body")

// function changeBackground(){
//     blah.style.backgroundColor="red"
//     console.log("hey")
// }


//#3
// let btnOnclick=document.querySelectorAll(".btn_onclick")


// // function ranColor(){
// //     btnOnclick.style.backgroundColor="red"
// //     console.log("hey")
// // }





// btnOnclick.forEach((button)=>{button.onclick=function(){
//     let randomColor=Math.floor(Math.random()*1677215).toString(16)
//     let randomColor2=Math.floor(Math.random()*1677215).toString(16)
//     console.log(randomColor)
//     document.body.style.backgroundColor="#"+randomColor
//     button.style.backgroundColor="#"+randomColor2
// }})


//#4
// let buttony=document.querySelector(".buttony")
// let body=document.querySelector("body")


// body.appendChild(buttony)


// buttony.addEventListener("click", function(){
//     alert("button clicked!")
// })

// #5

let textInput=document.querySelector("#textInput")
let textDisplay=document.querySelector("#textDisplay")
let body=document.querySelector("body")

textInput.addEventListener("keypress", typing )


// textInput.addEventListener("input", function(){
//     body.style.backgroundColor="red"
// })
// textDisplay.addEventListener("input", function(){
//     body.style.backgroundColor="red"
// })

function typing (e){

    console.log(final)
    textDisplay.textContent=e.key
    console.log(e.key)
}

