let headerToggleBtn = document.querySelector('.header__toggle-btn');
let headerNav = document.querySelector('.header__nav-wrapper');

headerToggleBtn.addEventListener('click', function(){
    headerNav.classList.toggle('header__nav-wrapper--active');
});