const secounds = document.querySelector('#secounds');
const minutes = document.querySelector('#minutes')
const button_start = document.querySelector('#button-start')
const button_pause = document.querySelector('#button-pause')
const button_fiveminutes = document.querySelector('#button-five-minutes')
const button_fifteenminutes = document.querySelector('#button-fifteen-minutes')
const button_reset = document.querySelector('#button-reset')
const audio = document.querySelector('#bell')
var pomodoro_running;
var time_pause = false

button_start.addEventListener("click", function(){
 if (pomodoro_running === undefined){
     pomodoro_running = setInterval(timer, 1000)
 }else{
     alert('Its already running...')
 }
})
button_pause.addEventListener("click",function(){
    StopInterval()
    pomodoro_running = undefined
})
button_fiveminutes.addEventListener("click",function(){
    minutes.innerText = (5)
    secounds.innerText = ('00')
    time_pause = true
})
button_fifteenminutes.addEventListener("click",function(){
    minutes.innerText = (15)
    secounds.innerText = ('00')
    time_pause = true
})
button_reset.addEventListener('click',function(){
    minutes.innerText = (25)
    secounds.innerText = ('00')
})


function timer() {
    if (time_pause == false){
        if (secounds.innerText != 0) {
        secounds.innerText--
    } else if (secounds.innerText == 0 && minutes.innerText != 0) {
        secounds.innerText = (59)
        minutes.innerText--
    } else if (secounds.innerText == 0 && minutes.innerText == 0) {
        pomodoro_running = undefined
        time_pause = true
        audio.play()
        minutes.innerText = (5)
    }}else{
        if (secounds.innerText != 0) {
            secounds.innerText--
        } else if (secounds.innerText == 0 && minutes.innerText != 0) {
            secounds.innerText = (59)
            minutes.innerText--
        } else if (secounds.innerText == 0 && minutes.innerText == 0) {
            pomodoro_running = undefined
            time_pause = false
            audio.play()
            secounds.innerText= (0)
            minutes.innerText= (25)
        
    }}}
function StopInterval(){
    clearInterval(pomodoro_running);
}