document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector('.header');
    let toggleBtn = document.querySelector('.header__toggle-btn');
    
    toggleBtn.addEventListener('click', function () {
        header.classList.toggle('header--active');
    });

    // 👉 Close nav when any nav link is clicked (for mobile)
    let navLinks = document.querySelectorAll('.header nav a'); // Adjust selector if needed
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            header.classList.remove('header--active');
        });
    });

    // 🌙 Dark Mode Toggle
    const modeToggle = document.getElementById("modeChange");
    const userPreference = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    if (userPreference === "dark" || (!userPreference && systemPreference === "dark")) {
        modeToggle.checked = true;
        document.body.classList.add("dark-mode");
    }

    modeToggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});