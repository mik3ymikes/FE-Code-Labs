const body=document.querySelector("body")

const input=document.querySelector("input[type=text")
const overlay=document.querySelector(".overlay")


input.addEventListener("focusin", showFloater)
// overlay.addEventListener("focusout", closeFloater)
overlay.addEventListener("click", closeFloater)



function showFloater(){
    body.classList.add("show-floater")
}

function closeFloater(){
    if(body.classList.contains("show-floater")){
        body.classList.remove("show-floater")

    }
}

localStorage.setItem("mything", 'something')

const bookmarksList=document.querySelector(".bookmarks-list")
const bookmarkForm=document.querySelector(".bookmark-form")
const bookmarkInput=bookmarkForm.querySelector("input[type=text]")
const bookmarks=JSON.parse(localStorage.getItem("bookmarks")) || []
fillBookmarksList(bookmarks)
const apiUrl="https://opengraph.io/api/1.0/site";
const appId='58858c7bcf07b61e64257391'

// const myUrl= encodeURIComponent("https://www.opengraph.io/")







console.table(bookmarks)

function createBookmark(e){
    e.preventDefault()

    if(!bookmarkInput.value){
        alert("we need info")
        return
    }

    const url=encodeURIComponent(bookmarkInput.value)
    fetch(apiUrl + '/' + url + "?app_id=" +appId).then(response=>response.json()).then(data =>{

    const bookmark={
        title:data.hybridGraph.title,
        image:data.hybridGraph.image,
        link:data.hybridGraph.url

        
    }
        bookmarks.push(bookmark)
        
        
        
         fillBookmarksList(bookmarks)
         storeBookmarks(bookmarks)
        
         bookmarkForm.reset()
})
.catch(error=>{
    alert("three was a prblem getting input")
})

}




function fillBookmarksList(bookmarks=[]){
const bookmarksHtml=bookmarks.map((bookmark,i)=>{
return `<a href="bookmark.link" class="bookmark" data-id=${i}>
<div class="img" style="background-image:url(bookmark.image)"></div>
<div class="title">${bookmark.title} </div>
<span class="glyphicon glyphicon-remove">😒</span></a> `
}).join("")
bookmarksList.innerHTML=bookmarksHtml

// let bookmarksHtml=""
// for(let i=0;i<bookmarks.length;i++){
//     bookmarksHtml+=`<a href="#" class="bookmark"> ${bookmarks[i].title} </a> `
// }
// console.log(bookmarksHtml)
}

bookmarkForm.addEventListener("submit", createBookmark)
bookmarksList.addEventListener("click",removeBookmark)


function removeBookmark(e){
if (!e.target.matches(".glyphicon-remove")) return;
const index=e.target.parentNode.dataset.id
bookmarks.splice(index, 1)
fillBookmarksList(bookmarks)
storeBookmarks(bookmarks)

console.log("hey")
}

function storeBookmarks(bookmarks=[]){
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}