const body=document.querySelector("body")

const input=document.querySelector("input[type=text")
const overlay=document.querySelector(".overlay")


input.addEventListener("focusin", showFloater)
overlay.addEventListener("click", closeFloater)
overlay.addEventListener("focusout", closeFloater)



function showFloater(){
    body.classList.add("show-floater")
}

function closeFloater(){
    if(body.classList.contains("show-floater")){
        body.classList.remove("show-floater")

    }
}