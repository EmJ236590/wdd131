// timer.js

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




// Timer variables

let minutes = 25;

let seconds = 0;

let timer;

let isRunning = false;





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


    // Record completed study session
    recordStudySession();


    alert("Study session complete! Great job!");


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
    recordStudySession();


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


    updateDisplay();


});







// Select study session

sessionButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        clearInterval(timer);


        isRunning = false;



        minutes =
        Number(button.dataset.time);


        seconds = 0;



        updateDisplay();


    });


});


/* Recorded to Progress Page */
function recordStudySession(){


    let sessions =
        Number(localStorage.getItem("studySessions")) || 0;


    sessions++;


    localStorage.setItem(
        "studySessions",
        sessions
    );


}



// Load timer

updateDisplay();