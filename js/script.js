document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector('.header');
    let toggleBtn = document.querySelector('.header__toggle-btn');
    toggleBtn.addEventListener('click', function(){
        header.classList.toggle('header--active');
    });

    const modeToggle = document.getElementById("modeChange");
    const userPreference = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    // Apply saved preference or system default
    if (userPreference === "dark" || (!userPreference && systemPreference === "dark")) {
        modeToggle.checked = true;
        document.body.classList.add("dark-mode");
    }

    // Toggle theme and save preference
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
