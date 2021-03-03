let div1 = document.querySelector("#para1");
let div2 = document.querySelector("#para2");
let div3 = document.querySelector("#para3");
let startBtn = document.querySelector(".btn1");
let stopBtn = document.querySelector(".btn2");
let resetBtn = document.querySelector(".btn3");

// store reference to setInterval on a global scale
let stopWatch;

// call displayTime function declared below;
startBtn.addEventListener("click", function(){
    stopWatch = setInterval(displayTime, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
});

// clear displayTime interval above
stopBtn.addEventListener("click", function(){
    clearInterval(stopWatch);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

// resets timer to zero
resetBtn.addEventListener("click", function(){
    clearInterval(stopWatch);
    div1.textContent = "00";
    div2.textContent = "00";
    div3.textContent = "00";
    counter = 0;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    stopBtn.disabled = true;
});

// default text content of box1,2 and 3
div1.textContent = "00";
div2.textContent = "00";
div3.textContent = "00";

// declear a counter variable for calculating hr, min, and sec 
let counter = 0;

// calculates hr, min, sec from counter
function displayTime(){
    let hr = Math.floor(counter / 3600);
    let min = Math.floor((counter % 3600) / 60);
    let sec = Math.floor(counter % 60);

    // add leading zero to hr, min, sec
    let displayHr = hr < 10? "0" + hr : hr;
    let displayMin = min <10? "0" + min : min;
    let displaySec = sec <10? "0" + sec : sec;

    // update text content of box1, 2, and 3
    div1.textContent = displayHr;
    div2.textContent = displayMin;
    div3.textContent = displaySec;

    // increase counter by 1
    counter++;
}