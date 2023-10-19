document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("sign-up");
    const submitButton = document.querySelector(".submit button");
    const emailError = document.getElementById("email-error");
    const subscribeContent = document.querySelector(".subscribe-content");
    const container = document.querySelector(".container");
    const dismissButton = document.querySelector(".subscribe-button button");

    emailInput.addEventListener("input", function () {
        if (emailInput.validity.valid) {
            emailError.style.display = "none";
            emailInput.classList.remove("invalid");
        } else {
            emailError.style.display = "block";
            emailInput.classList.add("invalid");
        }
    });

    submitButton.addEventListener("click", function (event) {
        if (!emailInput.validity.valid) {
            event.preventDefault();
            emailError.style.display = "block";
            emailInput.classList.add("invalid");
        } else {
            event.preventDefault();
            container.style.display = "none";
            subscribeContent.style.display = "block";
        }
    });

    dismissButton.addEventListener("click", function () {
        location.reload();
    });

});
