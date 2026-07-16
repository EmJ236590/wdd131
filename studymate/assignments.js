// assignments.js

console.log("Assignments JS Loaded");


// Select HTML elements

const form = document.querySelector("#assignmentForm");

const assignmentName = document.querySelector("#assignmentName");

const course = document.querySelector("#course");

const dueDate = document.querySelector("#dueDate");

const assignmentList = document.querySelector("#assignmentList");



// Load saved assignments

let assignments =
    JSON.parse(localStorage.getItem("assignments")) || [];




// Display assignments

function displayAssignments() {


    assignmentList.innerHTML = "";



    // If no assignments exist

    if (assignments.length === 0) {


        assignmentList.innerHTML =
            "<li>No assignments added yet.</li>";


        return;

    }





    assignments.forEach((assignment, index) => {


        const li = document.createElement("li");



        li.innerHTML = `

            <strong class="${assignment.completed ? "finished" : ""}">
                ${assignment.name}
            </strong>

            <br>

            Course: ${assignment.course}

            <br>

            Due Date: ${assignment.date}

            <br><br>


            ${
                assignment.completed

                ?

                `

                <p class="completed-text">
                    Completed ✓
                </p>


                <button 
                    class="delete" 
                    data-index="${index}">
                    Delete
                </button>

                `


                :

                `

                <button 
                    class="complete" 
                    data-index="${index}">
                    Mark Completed
                </button>

                `

            }


        `;



        assignmentList.appendChild(li);


    });


}







// Save assignments

function saveAssignments() {


    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );


}







// Add new assignment

form.addEventListener("submit", function(event) {


    event.preventDefault();



    const newAssignment = {


        name: assignmentName.value,


        course: course.value,


        date: dueDate.value,


        completed: false


    };



    assignments.push(newAssignment);



    saveAssignments();



    displayAssignments();



    form.reset();


});







// Complete or delete assignments

assignmentList.addEventListener("click", function(event) {



    const index = event.target.dataset.index;



    // Mark completed

    if(event.target.classList.contains("complete")) {



        assignments[index].completed = true;



        saveAssignments();



        displayAssignments();


    }





    // Delete completed assignment

    if(event.target.classList.contains("delete")) {



        assignments.splice(index, 1);



        saveAssignments();



        displayAssignments();


    }



});
/* When marked it updates in progress page*/

function completeAssignment(){


    let completed =
        Number(localStorage.getItem("completedAssignments")) || 0;


    completed++;


    localStorage.setItem(
        "completedAssignments",
        completed
    );


}




// Load assignments when page opens

displayAssignments();