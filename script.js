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
const checkPersonalInfo = () => {
  const personalInfo = [
    document.querySelector("#name").value,
    document.querySelector("#email").value,
    document.querySelector("#phone").value,
  ];
  const validInfo = [];
  // Condition for null input
  for (let i = 0; i < personalInfo.length; i++) {
    if (personalInfo[i] == "") {
      errorLabel[i].innerText = "This field is required";
      inputBox[i].classList.add("error");
    } else {
      errorLabel[i].innerText = "";
      inputBox[i].classList.remove("error");
    }
  }
  // Name validation
  if (personalInfo[0] != "") {
    let nameRegex = /^[A-Za-z\s'-]+$/;
    if (!personalInfo[0].match(nameRegex)) {
      errorLabel[0].innerText = "Name should be valid";
      inputBox[0].classList.add("error");
    } else {
      errorLabel[0].innerText = "";
      inputBox[0].classList.remove("error");
      validInfo[0] = personalInfo[0];
    }
  }
  // Email validation
  if (personalInfo[1] != "") {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!personalInfo[1].match(emailRegex)) {
      errorLabel[1].innerText = "Email should be valid";
      inputBox[1].classList.add("error");
    } else {
      errorLabel[1].innerText = "";
      inputBox[1].classList.remove("error");
      validInfo[1] = personalInfo[1];
    }
  }
  // Phone number validation
  if (personalInfo[2] != "") {
    let phoneRegex = /^\d{10}$/;
    if (!personalInfo[2].match(phoneRegex)) {
      errorLabel[2].innerText = "Phone number should be valid";
      inputBox[2].classList.add("error");
    } else {
      errorLabel[2].innerText = "";
      inputBox[2].classList.remove("error");
      validInfo[2] = personalInfo[2];
    }
  }
  return validInfo;
};
