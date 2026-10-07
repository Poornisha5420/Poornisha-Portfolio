// Contact Form

let form = document.getElementById("contactform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("formMessage");


    if (name === "" || email === "" || message === "") {

        formMessage.innerHTML = "Please fill in all the fields.";
        formMessage.style.color = "red";

    } 
    else {

        formMessage.innerHTML = "Message sent successfully!";
        formMessage.style.color = "green";

        form.reset();
    }

});