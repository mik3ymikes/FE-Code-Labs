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

const bookmarksList=document.querySelector(".bookmarks-list")
const bookmarkForm=document.querySelector(".bookmark-form")
const bookmarkInput=bookmarkForm.querySelector("input[type=text]")

function createBookmark(e){
    e.preventDefault()

    console.log("processing form")
    const title=bookmarkInput.value 
    const bookmark=document.createElement("a")
    bookmark.className="bookmark"
    bookmark.textContent=title
    bookmark.href="#"
    bookmark.target="_blank"
    
    
    bookmarksList.appendChild(bookmark)

    bookmarkForm.reset()
}






bookmarkForm.addEventListener("submit", createBookmark)