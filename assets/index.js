
// For navigating to myResume page.
$("#myResume").on("click",function(){
    window.open("./assets/resumeShow.html", '_blank');
});
// For droping down the menu when burger icon clicked.
function toggleMenu() {
    const navMenu = document.querySelector('.navMenu');
    navMenu.classList.toggle('show');
    const plate1 = document.querySelector('.plate1');
    plate1.classList.toggle('active');
}


// For closing dropdown menu with clicking.
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.navMenu');
    const plate1 = document.querySelector('.plate1');
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnBurger = plate1.contains(event.target);

   
    if (navMenu.classList.contains('show') && !isClickInsideMenu && !isClickOnBurger) {
        navMenu.classList.remove('show');
        plate1.classList.remove('active');
    }
});

const navItems = document.querySelectorAll('.navMenu li');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        const navMenu = document.querySelector('.navMenu');
        const plate1 = document.querySelector('.plate1');
        navMenu.classList.remove('show');
        plate1.classList.remove('active');
    });
});



