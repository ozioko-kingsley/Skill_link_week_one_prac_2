// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById("mobile-menu");
//     const navLinks = document.getElementById("nav-links");

//     // Toggle menu on click
//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//         menuToggle.classList.toggle("active");
//     });

//     // Close menu when a link is clicked
//     document.querySelectorAll(".nav-links a").forEach(link => {
//         link.addEventListener("click", function () {
//             navLinks.classList.remove("active");
//             menuToggle.classList.remove("active");
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});