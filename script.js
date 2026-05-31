const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.querySelector(".booking-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Appointment Booked Successfully!");
    form.reset();
});