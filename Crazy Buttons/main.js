const crazyButtons=document.querySelectorAll(".btn-crazy")




function goCrazy(){
   
    let OffsetLeft=Math.random()*(window.innerWidth-this.clientWidth)
    let OffsetTop=Math.random()*(window.innerHeight-this.clientHeight)
    console.log(OffsetLeft)
    console.log(OffsetTop)


    this.style.top=OffsetTop +"px"
    this.style.left=OffsetLeft +"px"
}




crazyButtons.forEach(button=>button.addEventListener("mouseenter", goCrazy))


