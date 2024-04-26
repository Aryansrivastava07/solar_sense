const nav = document.querySelector(".active");
const contact = document.querySelector(".nav_contact");
const heading = document.getElementById("heading");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            console.log("heading is intersecting");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const aos = document.querySelectorAll(".aos");
aos.forEach((element) => {
    observer.observe(element);
});