// Ouverture de la modal
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  const input = document.querySelector("form input");
  const closeBtn = document.querySelector(".modal-close");
  input.focus();
  document.querySelectorAll(".formFocus").forEach((tab) => {
    if (tab.getAttribute("tabindex") == "0") {
      tab.removeAttribute("tabindex");
      tab.setAttribute("tabindex", "-1");
    }
    tab.setAttribute("tabindex", "-1");
  });
}

// Fermeture de la modal
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.querySelectorAll(".formFocus").forEach((tab) => {
    if (tab.getAttribute("tabindex") == "-1") {
      tab.removeAttribute("tabindex");
      tab.setAttribute("tabindex", "0");
    }
    tab.setAttribute("tabindex", "0");
  });
}

// Element DOM
const firstName = document.forms[0][0];
const lastName = document.forms[0][1];
const email = document.forms[0][2];
const message = document.forms[0][3];

// Regex
const mailregex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/;
const TextRegex =
  /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/;

// Envoie du formulaire
function formSend() {
  console.log(`Firstname: ${firstName.value}, Lastname: ${lastName.value}`);
  console.log(`Email: ${email.value}, Message: ${message.value}`);
  document.forms[0].reset();
  closeModal();
}

const closeBtn = document.querySelector(".modal-close");
// Fermeture de la modal
closeBtn.addEventListener("click", (e) => {
  closeModal();
});

// Fermeture de la modal avec le clavier
closeBtn.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    closeModal();
  }
});

// error message
const messagesErrors = {
  0: "Le prénom doit comporter au moins deux caractères",
  1: "Le nom doit comporter au moins deux caractères",
  2: "Veuillez entrer une adresse mail valide",
  3: "Le message doit comporter au moins deux caractères",
};

// validation of the data in the input
document.forms[0][0].addEventListener("input", isFirstNameValid);
document.forms[0][1].addEventListener("input", isLastNameValid);
document.forms[0][2].addEventListener("input", isEmailValid);
document.forms[0][3].addEventListener("input", isMessageValid);

// Vérifie si prenom est valide, retourne true si c'est valide ou false si ce n'est pas valide
function isFirstNameValid() {
  if (
    firstName.value.trim() == "" ||
    firstName.value.length < 2 ||
    TextRegex.test(firstName.value) == false
  ) {
    return showErrorMessage(0);
  } else {
    return hideErrorMessage(0);
  }
}

// Vérifie si nom est valide, retourne true si c'est valide ou false si ce n'est pas valide
function isLastNameValid() {
  if (
    lastName.value.trim() == "" ||
    lastName.value.length < 2 ||
    TextRegex.test(lastName.value) == false
  ) {
    return showErrorMessage(1);
  } else {
    return hideErrorMessage(1);
  }
}

// Vérifie si mail est valide, retourne true si c'est valide ou false si ce n'est pas valide
function isEmailValid() {
  if (mailregex.test(email.value) == true) {
    return hideErrorMessage(2);
  } else {
    return showErrorMessage(2);
  }
}

// Vérifie si message est valide, retourne true si c'est valide ou false si ce n'est pas valide
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

// vérification des données
function validate(e) {
  e.preventDefault();
  if (
    isFirstNameValid() == true &&
    isLastNameValid() == true &&
    isEmailValid() == true &&
    isMessageValid() == true
  ) {
    formSend();
  } else {
    isFirstNameValid(firstName);
    isLastNameValid(lastName);
    isEmailValid(email);
    isMessageValid(message);
  }
}
