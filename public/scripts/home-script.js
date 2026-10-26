document.getElementById("contact-form").onsubmit = () => {
    clearErrors();

    let isValid = true;

    let fname = document.getElementById("fname").value.trim();
    if (fname === "") {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    let lname = document.getElementById("lname").value.trim();
    if (lname === "") {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

   

    let regex1 = /@/g;
    let regex2 = /\./g;
    let email = document.getElementById("email").value.trim();
    // Checks whether the email entered has a @ or . entered.
    // If it does not display error message.
    if (email != "" && email.search(regex1) == -1 || email != "" && email.search(regex2) == -1) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    // Checks whether the checkbox for email is checked.
    // Email is required if checked.
    let emailMethodBtn = document.getElementById("mailing-list");
    if (emailMethodBtn.checked) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}