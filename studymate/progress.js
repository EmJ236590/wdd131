// ===== STUDYMATE PROGRESS JS =====


// Select cards

const completedCard = 
    document.querySelector("#completed-count");


const sessionCard = 
    document.querySelector("#session-count");


const currentGoal = 
    document.querySelector("#current-goal");




// Get saved progress

let completedAssignments =
    Number(localStorage.getItem("completedAssignments")) || 0;


let studySessions =
    Number(localStorage.getItem("studySessions")) || 0;




// Display assignment progress

if (completedCard) {

    completedCard.textContent =
        completedAssignments;

}



// Display study sessions

if (sessionCard) {

    sessionCard.textContent =
        studySessions;

}



// Display current goal

let savedGoal =
    localStorage.getItem("currentGoal");



if (currentGoal) {


    if(savedGoal) {

        currentGoal.textContent =
            savedGoal;

    }

    else {

        currentGoal.textContent =
            "Stay Organized";

    }

}