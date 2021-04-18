const navSlide = function(){
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");

    // Apparition barre de navigation
    burger.addEventListener('click', function(){
        nav.classList.toggle("nav-active");

        // Apparition des liens animés
        navLinks.forEach(function(link, index){
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger animation
        burger.classList.toggle("toggle");
    });
}

navSlide();