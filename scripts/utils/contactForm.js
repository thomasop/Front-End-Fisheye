function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const input = document.querySelector('form input');
    const closeBtn = document.querySelector('.modal-close');
    input.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const firstName = document.forms[0][0];
const lastName = document.forms[0][1];
const email = document.forms[0][2];
const message = document.forms[0][3];

const mailregex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/;
const TextRegex = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;

function closeForm() {
    const modal = document.getElementById("contact_modal");
    console.log(`Firstname: ${firstName.value}, Lastname: ${lastName.value}`);
    console.log(`Email: ${email.value}, Message: ${message.value}`);
    document.forms[0].reset();
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        modal.style.display = 'none';
      });
    closeModal();
}

// error message
const messagesErrors = {
    0 : "Le prénom doit comporter au moins deux caractères",
    1 : "Le nom doit comporter au moins deux caractères",
    2 : "Veuillez entrer une adresse mail valide",
    3 : "Le message doit comporter au moins deux caractères"
  }

// validation of the data in the input
document.forms[0][0].addEventListener("input", isFirstNameValid);
document.forms[0][1].addEventListener("input", isLastNameValid);
document.forms[0][2].addEventListener("input", isEmailValid);
document.forms[0][3].addEventListener("input", isMessageValid);

// check if firstname data is valid, return true if valid or false if not valid
function isFirstNameValid() {
    if (firstName.value.trim() == "" || firstName.value.length < 2 || TextRegex.test(firstName.value) == false) {
      return showErrorMessage(0);
    } else {
      return hideErrorMessage(0);
    }
}

// check if lastname data is valid, return true if valid or false if not valid
function isLastNameValid() {
    if (lastName.value.trim() == "" || lastName.value.length < 2 || TextRegex.test(lastName.value) == false) {
        return showErrorMessage(1);
    } else {
        return hideErrorMessage(1);
    }
}

// check if email data is valid, return true if valid or false if not valid
function isEmailValid() {
    if (mailregex.test(email.value) == true) {
        return hideErrorMessage(2);
    } else {
        return showErrorMessage(2);
    }
}

function isMessageValid() {
    if (message.value.length >= 2) {
        return hideErrorMessage(3);
    } else {
        return showErrorMessage(3);
    }
}

// show error message
function showErrorMessage(n) {
    let errordiv = document.getElementsByClassName("errorform")[n];
    errordiv.innerHTML = messagesErrors[n];
    return false;
}
  
  // hide error message
function hideErrorMessage(l) {
    let errordiv = document.getElementsByClassName("errorform")[l];
    errordiv.innerHTML = "";
    return true;
}

const sendForm = document.querySelector(".send_button");
sendForm.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();
    if (isFirstNameValid() == true && isLastNameValid() == true && isEmailValid() == true && isMessageValid() == true) {
        closeForm();
      } else {
        isFirstNameValid(firstName);
        isLastNameValid(lastName);
        isEmailValid(email);
        isMessageValid(message);
        
      }

}