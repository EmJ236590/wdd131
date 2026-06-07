const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");

const form = document.querySelector("#eventForm");
const errors = document.querySelector("#errors");
const success = document.querySelector("#success");

typeSelect.addEventListener("change", function () {

    extraField.classList.remove("hidden");

    if (this.value === "student") {
        extraLabel.textContent = "Student I#";
        extraInput.value = "";
    }

    if (this.value === "guest") {
        extraLabel.textContent = "Access Code";
        extraInput.value = "";
    }

    if (this.value === "") {
        extraField.classList.add("hidden");
    }
});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    errors.innerHTML = "";
    success.innerHTML = "";

    let errorMessages = [];

    const eventName = document.querySelector("#eventName").value;
    const eventDate = document.querySelector("#eventDate").value;
    const type = typeSelect.value;
    const extraValue = extraInput.value.trim();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(eventDate);

    if (selectedDate <= today) {
        errorMessages.push("Event date must be after today.");
    }

    if (type === "student") {

        const studentPattern = /^\d{9}$/;

        if (!studentPattern.test(extraValue)) {
            errorMessages.push("Student I# must contain exactly 9 digits.");
        }
    }

    if (type === "guest") {

        if (extraValue !== "EVENT131") {
            errorMessages.push("Access Code must be EVENT131.");
        }
    }

    if (errorMessages.length > 0) {

        errors.innerHTML = "<p>" + errorMessages.join("<br>") + "</p>";
        return;
    }

    success.innerHTML =
        `<h2>Registration Successful!</h2>
         <p>Event: ${eventName}</p>
         <p>Date: ${eventDate}</p>
         <p>Type: ${type}</p>
         <p>Your ticket has been reserved.</p>`;

    form.reset();
    extraField.classList.add("hidden");
});