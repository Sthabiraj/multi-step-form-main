// Add-on section
let addOn = document.querySelectorAll(".add-on");
let checkbox = document.querySelectorAll('.add-on input[type="checkbox"]');
let step = document.querySelectorAll(".number");

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
  const regex = [/^[A-Za-z\s'-]+$/, /^[^\s@]+@[^\s@]+\.[^\s@]+/, /^\d{10}$/];
  const errorMsg = [
    "Name should be valid",
    "Email should be valid",
    "Phone should be valid",
  ];
  let formValid = true; // Assume form is valid initially

  for (let i = 0; i < personalInfo.length; i++) {
    if (personalInfo[i] == "") {
      errorLabel[i].innerText = "This field is required";
      inputBox[i].classList.add("error");
      formValid = false; // Set formValid to false if any input is empty
    } else if (!personalInfo[i].match(regex[i])) {
      errorLabel[i].innerText = errorMsg[i];
      inputBox[i].classList.add("error");
      formValid = false; // Set formValid to false if any input is invalid
    } else {
      errorLabel[i].innerText = "";
      inputBox[i].classList.remove("error");
    }
  }

  if (formValid) {
    infoSection.classList.remove("active");
    planSection.classList.add("active");

    step[0].classList.remove("active");
    step[1].classList.add("active");
  } else {
    infoSection.classList.add("active");
    planSection.classList.remove("active");

    step[0].classList.add("active");
    step[1].classList.remove("active");
  }
};

// Select your plan section
let h2 = document.querySelectorAll(".toggle h2");
let toggle = document.querySelector(".toggle input[type='checkbox']");
let plan = document.querySelectorAll(".plan");
let freeMonths = document.querySelectorAll(".free-months");
let planOptions = document.querySelectorAll(".plan-options");

const monthlyPlan = [9, 12, 15];
const yearlyPlan = [90, 120, 150];

let planCost;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    h2[1].classList.add("active");
    h2[0].classList.remove("active");
    // Yearly plan pricing
    for (let i = 0; i < plan.length; i++) {
      plan[i].innerHTML = `$${yearlyPlan[i]}/yr`;
      freeMonths[i].innerHTML = "2 months free";
      // for plan
      if (planOptions[i].checked) {
        planCost = yearlyPlan[i];
      }
    }
  } else {
    h2[1].classList.remove("active");
    h2[0].classList.add("active");
    // Monthly Plan pricing
    for (let i = 0; i < plan.length; i++) {
      plan[i].innerHTML = `$${monthlyPlan[i]}/mo`;
      freeMonths[i].innerHTML = "";
      // for plan
      if (planOptions[i].checked) {
        planCost = monthlyPlan[i];
      }
    }
  }
});

// For back button
let backBtn = document.querySelector(".plan-section button:nth-child(1)");
backBtn.addEventListener("click", () => {
  infoSection.classList.add("active");
  planSection.classList.remove("active");
});
