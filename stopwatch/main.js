const startButton=document.querySelector('[data-action="start"]')
const stopButton=document.querySelector('[data-action="stop"]')
const resetButton=document.querySelector('[data-action="reset"]')
const minutes=document.querySelector(".minutes")
const seconds=document.querySelector(".seconds")
let timerTime=0
let isRunning=false
let interval



startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetTimer)



function startTimer(){
    if(isRunning) return
    isRunning=true
    // interval=setInterval(incrementTimer,1000)
    interval=setInterval(incrementTimer, 1000)
    

}


function stopTimer(){
    if(!isRunning) return
    isRunning=false
    clearInterval(interval)
    
}

function incrementTimer(){
    
        timerTime+=1
        const numOfMinutes=Math.floor(timerTime/60)
        const numofSeconds=timerTime%60
      
    // console.log("hi")
    minutes.textContent=pad(numOfMinutes)
    seconds.textContent=pad(numofSeconds)
   

}


function pad(number){
    if(number<10){
        return "0" +number
    }else{
        return number
    }
}

function resetTimer(){
    stopTimer()
    timerTime=0
    minutes.textContent="00"
    seconds.textContent="00"
    
}

