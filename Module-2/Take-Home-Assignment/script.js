function submitForm() {
    let name = document.getElementById("name").value;
    let result = document.getElementById("result");

    result.innerHTML = "Thank you, " + name + "! Your message has been sent.";

    return false;
}