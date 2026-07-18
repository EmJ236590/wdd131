// assignments.js

console.log("Assignments JS Loaded");


// ==============================
// Select HTML Elements
// ==============================

const form = document.querySelector("#assignmentForm");

const assignmentName =
    document.querySelector("#assignmentName");

const course =
    document.querySelector("#course");

const dueDate =
    document.querySelector("#dueDate");

const assignmentList =
    document.querySelector("#assignmentList");



// ==============================
// Load Saved Assignments
// ==============================

let assignments =
    JSON.parse(localStorage.getItem("assignments")) || [];




// ==============================
// Display Assignments
// ==============================

function displayAssignments() {


    assignmentList.innerHTML = "";



    if (assignments.length === 0) {


        assignmentList.innerHTML =
            "<li>No assignments added yet.</li>";


        return;

    }



    assignments.forEach((assignment, index) => {


        const li =
            document.createElement("li");



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




// ==============================
// Save Assignments
// ==============================

function saveAssignments() {


    localStorage.setItem(
        "assignments",
        JSON.stringify(assignments)
    );


}




// ==============================
// Add New Assignment
// ==============================

if (form) {


    form.addEventListener("submit", function(event) {


        event.preventDefault();



        const newAssignment = {


            name:
                assignmentName.value,


            course:
                course.value,


            date:
                dueDate.value,


            completed:
                false


        };



        assignments.push(newAssignment);



        saveAssignments();



        displayAssignments();



        form.reset();


    });


}






// ==============================
// Complete / Delete Assignment
// ==============================

if (assignmentList) {


assignmentList.addEventListener("click", function(event) {



    const index =
        event.target.dataset.index;



    // ==============================
    // Mark Assignment Complete
    // ==============================


    if(event.target.classList.contains("complete")) {



        // Prevent counting twice

        if(!assignments[index].completed) {



            assignments[index].completed = true;



            let completedAssignments =
                Number(localStorage.getItem("completedAssignments")) || 0;



            completedAssignments++;



            localStorage.setItem(
                "completedAssignments",
                completedAssignments
            );


        }



        saveAssignments();



        displayAssignments();


    }




    // ==============================
    // Delete Assignment
    // ==============================


    if(event.target.classList.contains("delete")) {



        assignments.splice(index, 1);



        saveAssignments();



        displayAssignments();


    }



});


}






// ==============================
// Load Assignments
// ==============================

displayAssignments();