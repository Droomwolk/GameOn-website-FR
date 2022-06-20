function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const formulaire = document.querySelector(".formulaire");
const validation = document.querySelector("#validation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal close
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formulaire.style.display = "block";
  validation.style.display = "none";
}

// launch modal mercy
function launchMercy() {
  validation.style.display = "block";
  formulaire.style.display = "none";
  let p = document.createElement("p");
  document.getElementById("validation").innerHTML = "";
  document.getElementById("validation").appendChild(p);
  p.innerHTML = "Merci ! Votre réservation a été reçue.";
  p.classList.add("important");
  // p.style.color = "red";
  p.style.padding = "200px 0";
  let button = document.createElement("input");
  document.getElementById("validation").appendChild(button);
  button.value = "Fermer";
  button.classList.add("btn-submit");
  button.classList.add("button");
  button.setAttribute("type", "submit");
  button.addEventListener("click", closeModal);
  formulaire.reset();
}

// launch modal close
function closeModal() {
  modalbg.style.display = "none";
}

//CHAMP Prénom
formData[0].children[2].addEventListener(
  "change",
  function () {
    updateNameValue(0);
  },
  false
);

//Factorisation FIRST ET LAST VALUE
function updateNameValue(indexInput) {
  console.log("first name change");
  const regex = new RegExp("^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$");
  // const str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  // if (regex.test(str)) {
  //   return true;
  // }
  if (
    !regex.test(formData[indexInput].children[2].value) ||
    formData[indexInput].children[2].value.length <= 2
  ) {
    formData[indexInput].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[indexInput].setAttribute("data-error-visible", "false");
    return true;
  }
}

//CHAMP Nom
formData[1].children[2].addEventListener(
  "change",
  function () {
    updateNameValue(1);
  },
  false
);

// function updateLastValue() {
//   console.log("last name change");
//   if (formData[1].children[2].value.length <= 2) {
//     formData[1].setAttribute("data-error-visible", "true");
//     return false;
//   } else {
//     formData[1].setAttribute("data-error-visible", "false");
//     return true;
//   }
// }

//CHAMP Email
formData[2].children[2].addEventListener("change", updateEmailValue);

function updateEmailValue() {
  console.log("email change");

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      formData[2].children[2].value
    )
  ) {
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  } else {
    formData[2].setAttribute("data-error-visible", "true");
    return false;
  }
}

//CHAMP Date
formData[3].children[2].addEventListener("change", updateDateValue);

function updateDateValue() {
  console.log("date change");

  // const regex = new RegExp(
  //   "s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19d{2}|20[01][0-9]|2022)\b"
  // );

  // let regexDate =
  //   "^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(/|-|.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)0?2\3(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]d)?d{2})$";

  // let regexDateFr = new RegExp("[0-9]{1,2}(/|-)[0-9]{1,2}(/|-)[0-9]{4}");

  let regexfr = new RegExp(
    "((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])"
  );

  if (
    !regexfr.test(formData[3].children[2].value) ||
    formData[3].children[2].value.length <= 1
  ) {
    formData[3].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  }
}

//CHAMP Quantity
formData[4].children[2].addEventListener("change", updateQuantityValue);

function updateQuantityValue() {
  console.log("quantity change");

  // const regex = new RegExp("^[0-9]$");

  let pattern = /^\d+\.?\d*$/;

  // let numberRegex = "^(d)*(.)?([0-9]{1})?$";

  if (
    !pattern.test(formData[4].children[2].value) ||
    formData[4].children[2].value.length <= 0 ||
    parseInt(formData[4].children[2].value) > 50
  ) {
    formData[4].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
}

//CHECKBOX Input
const selectElement = document.querySelector(".checkbox-input");
const radioButtons = document.querySelectorAll('input[name="location"]');
selectElement.addEventListener("click", () => {
  let selecteLocation;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selecteLocation = radioButton.value;
      break;
    }
  }
});

function updateCityValue() {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      formData[5].setAttribute("data-error-visible", "false");
      return true;
    }
  }
  formData[5].setAttribute("data-error-visible", "true");
  return false;
}

//Validate FUNCTION
const validate = () => {
  // updateFirstValue();
  // updateLastValue();
  updateNameValue(0);
  updateNameValue(1);
  updateEmailValue();
  updateDateValue();
  updateQuantityValue();
  updateCityValue();
  if (
    // updateFirstValue ||
    // updateLastValue ||
    updateNameValue(0) &&
    updateNameValue(1) &&
    updateEmailValue() &&
    updateDateValue() &&
    updateQuantityValue() &&
    updateCityValue()
  ) {
    launchMercy();
  }
};

//SUBMIT
// const form = document.getElementById("reserve");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   validate();
// });
