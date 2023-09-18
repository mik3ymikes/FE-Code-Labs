const priceInput=document.querySelector("[name=price]")
const quanityInput=document.querySelector("[name=quanity]")
let total=document.querySelector(".total")
const quanityLabel=document.querySelector(".quanity-label")



function calculatePieCost(){
    const price=priceInput.value
    const quanity=quanityInput.value
    const cost= price*quanity
    console.log(cost)
    total.textContent= "$" + cost.toFixed(2)


}


// priceInput.addEventListener("keyup", calculatePieCost)


//oninput occurs when an element gets user input
priceInput.addEventListener("input", calculatePieCost)
quanityInput.addEventListener("input", calculatePieCost)
quanityInput.addEventListener("input", updateQuanityLabel)

function updateQuanityLabel(){
    const quanity=quanityInput.value
    quanityLabel.textContent=quanity
   


}

//on first run
calculatePieCost()