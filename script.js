// Add-on section
let addOn = document.querySelectorAll(".add-on");
let checkbox = document.querySelectorAll('.add-on input[type="checkbox"]');

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", (event) => {
    if (event.target.checked) {
      addOn[i].classList.add("active");
    } else {
      addOn[i].classList.remove("active");
    }
  });
}

// Getting information from Personal info
const errorLabel = document.querySelectorAll(".info-head .error");
const inputBox = document.querySelectorAll(".info-item input");
const infoSection = document.querySelector(".info-section");
const planSection = document.querySelector(".plan-section");
const checkPersonalInfo = () => {
  const personalInfo = [
    document.querySelector("#name").value,
    document.querySelector("#email").value,
    document.querySelector("#phone").value,
  ];
  let condition = false;
  // Condition for null input
  for (let i = 0; i < personalInfo.length; i++) {
    if (personalInfo[i] == "") {
      errorLabel[i].innerText = "This field is required";
      inputBox[i].classList.add("error");
    } else {
      errorLabel[i].innerText = "";
      inputBox[i].classList.remove("error");
      condition = true;
    }
  }
  // Name validation
  const regex = [/^[A-Za-z\s'-]+$/, /^[^\s@]+@[^\s@]+\.[^\s@]+/, /^\d{10}$/];
  const errorMsg = [
    "Name should be valid",
    "Email should be valid",
    "Phone should be valid",
  ];
  for (let i = 0; i < personalInfo.length; i++) {
    if (personalInfo[i] != "") {
      if (!personalInfo[i].match(regex[i])) {
        errorLabel[i].innerText = errorMsg[i];
        inputBox[i].classList.add("error");
      } else {
        errorLabel[i].innerText = "";
        inputBox[i].classList.remove("error");
        condition = true;
      }
    }
  }
  if (condition == true) {
    infoSection.classList.remove("active");
    planSection.classList.add("active");
  } else {
    infoSection.classList.add("active");
    planSection.classList.remove("active");
  }
};
