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

// let textInput=document.querySelector("#textInput")
// let textDisplay=document.querySelector("#textDisplay")
// let body=document.querySelector("body")

// textInput.addEventListener("keypress", typing )


// // textInput.addEventListener("input", function(){
// //     body.style.backgroundColor="red"
// // })
// // textDisplay.addEventListener("input", function(){
// //     body.style.backgroundColor="red"
// // })

// function typing (e){

//     // console.log(final)
    
//     textDisplay.textContent+=e.key
//     console.log(e.key)
// }


const items = [
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'}
];


items.forEach(items=>{
    for(let item in items){
        console.log({item})
    }
})



// for(let [key,value] of Object.entries(items)){

//     console.log({value}, {key})

// }

// items.forEach(item, function(){
// for (const name in object) {

// }
// })



// let arry=[0, 1, 3]

// console.log(arry[2])