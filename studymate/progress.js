// Timer

console.log("Timer JS Loaded");


// Timer display

const minutesDisplay =
document.querySelector("#minutes");


const secondsDisplay =
document.querySelector("#seconds");



// Buttons

const startButton =
document.querySelector("#startTimer");


const pauseButton =
document.querySelector("#pauseTimer");


const resetButton =
document.querySelector("#resetTimer");



// Session buttons

const sessionButtons =
    document.querySelectorAll(".session-btn");


const breakButtons =
    document.querySelectorAll(".break-btn");



// Timer variables

let minutes = 25;

let seconds = 0;

let timer;

let isRunning = false;


// Tracks what type of timer is active

let isBreak = false;





// Update display

function updateDisplay(){


    minutesDisplay.textContent =
    minutes.toString().padStart(2,"0");


    secondsDisplay.textContent =
    seconds.toString().padStart(2,"0");


}






// Countdown

function countdown(){


    if(minutes === 0 && seconds === 0){


        clearInterval(timer);


        isRunning = false;



        // If timer was a break

        if(isBreak){


            recordBreak();


            alert("Break complete! Ready to study?");


            isBreak = false;


        }


        // If timer was study session

        else {


            recordStudySession();


            alert("Study session complete! Great job!");


        }



        return;


    }





    if(seconds === 0){


        minutes--;

        seconds = 59;


    }

    else{


        seconds--;

    }



    updateDisplay();


}







// Start timer

startButton.addEventListener("click",()=>{


    if(!isRunning){


        timer =
        setInterval(countdown,1000);


        isRunning = true;


    }


});







// Pause timer

pauseButton.addEventListener("click",()=>{


    clearInterval(timer);


    isRunning = false;


});








// Reset timer

resetButton.addEventListener("click",()=>{


    clearInterval(timer);


    minutes = 25;

    seconds = 0;


    isRunning = false;


    isBreak = false;


    updateDisplay();


});








// Select study session

sessionButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        clearInterval(timer);


        isRunning = false;


        isBreak = false;



        minutes =
        Number(button.dataset.time);


        seconds = 0;



        updateDisplay();


    });


});








// Select break

breakButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        clearInterval(timer);


        isRunning = false;


        isBreak = true;



        minutes =
        Number(button.dataset.time);


        seconds = 0;



        updateDisplay();


    });


});









// Record completed study session

function recordStudySession(){


    let sessions =
        Number(localStorage.getItem("studySessions")) || 0;


    sessions++;


    localStorage.setItem(
        "studySessions",
        sessions
    );


}






// Record completed break

function recordBreak(){


    let breaks =
        Number(localStorage.getItem("breaks")) || 0;


    breaks++;


    localStorage.setItem(
        "breaks",
        breaks
    );


}






// Load timer

updateDisplay();