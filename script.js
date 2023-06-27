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
