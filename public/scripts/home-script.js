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

   

    let atRegex = /@/g;
    let periodRegex = /\./g;
    let email = document.getElementById("email").value.trim();
    // Checks whether the email entered has a @ or . entered.
    // If it does not display error message.
    if (email != "" && email.search(atRegex) == -1 || email != "" && email.search(periodRegex) == -1) {
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

    // Regex to find whether the string contains https://linkedin.com/in/
    let linkedinRegex = /^(https?:\/\/)?((www\.)?([a-z]{2,3}\.)?linkedin\.com\/)(in)\/?$/
    let linkedin = document.getElementById("linkedin").value.trim();
    // If the text box contains something but doesn't contain https://linkedin.com/in/ error time.
    if (linkedin != "" && linkedin.search(linkedinRegex) == -1) {
        document.getElementById("err-linkedin").style.display = "block";
        isValid = false;
    }
    // Validate Where we met
    let whereMet = document.getElementById("meet").value;
    if (whereMet == "none") {
        document.getElementById("err-meet").style.display = "block";
        isValid = false
    }

    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}