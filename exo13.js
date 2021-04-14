var titre = document.querySelector(".title"); // nouvelle méthode 
var modal = document.querySelector("#modal");
// console.log(titre);

titre.addEventListener("click", function(){

    titre.style.animation = "1s couleur linear infinite";
    modal.style.display ="flex";
});

var bouton = document.querySelector(".bouton");
var progressbar = document.querySelector("#barre");

bouton.addEventListener("click", function(){
    progressbar.style.display = "flex";
})

