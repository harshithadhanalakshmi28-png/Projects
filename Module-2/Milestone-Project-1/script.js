function registerEvent() {

    let name = document.getElementById("studentName").value;
    let event = document.getElementById("event").value;
    let message = document.getElementById("registrationMessage");

    message.innerHTML =
        "Thank you, " + name + "! You have successfully registered for " + event + ".";

    return false;
}