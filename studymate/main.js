document.addEventListener("DOMContentLoaded", () =>{
    console.log("StudyMate Loaded")
});
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();
const navLinks = document.querySelectorAll("nav a");

const currentPage = window.location.pathname.split("/").pop();


navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");


    if(linkPage === currentPage){

        link.classList.add("active");

    }

});
const cards = document.querySelectorAll(".quick-card");


cards.forEach(card => {


    card.addEventListener("click", () => {


        card.style.transform = "scale(.95)";


    });


});
//Hero Fade-In (W3 schools)
const hero = document.querySelector(".hero");


hero.style.opacity = "0";


setTimeout(() => {

    hero.style.transition = "1s";

    hero.style.opacity = "1";


}, 200);
//Upcoming Assignments Section
// Display upcoming assignments on homepage

const upcomingAssignments = document.querySelector("#upcomingAssignments");


if(upcomingAssignments){


    let assignments =
    JSON.parse(localStorage.getItem("assignments")) || [];



    // Only show incomplete assignments

    const incompleteAssignments =
    assignments.filter(assignment => !assignment.completed);



    if(incompleteAssignments.length === 0){


        upcomingAssignments.innerHTML =
        "<li>No upcoming assignments.</li>";


    }

    else {


        incompleteAssignments.forEach(assignment => {


            const li = document.createElement("li");


            li.innerHTML = `

            <strong>${assignment.name}</strong>

            <br>

            Course: ${assignment.course}

            <br>

            Due: ${assignment.date}

            `;


            upcomingAssignments.appendChild(li);


        });


    }


}