// ------------------------ SCROLL NAV
let navLinks = document.querySelectorAll('#header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement de lien par défaut

        // ID de la div cible associée au lien
        let targetId = link.getAttribute('href').substring(1);

        // div cible par son ID
        let targetDiv = document.getElementById(targetId);

        // défilement vers la div cible
        if (targetDiv) {
            targetDiv.scrollIntoView({
                behavior: 'smooth', // défilement fluide
                block: 'start',     // défilement vers le haut
            });
        }
    });
});



// ------------------------ SCROLL
const scroll = document.querySelector("#scroll");

scroll.addEventListener("click", function (){
    //window.scroll(0, 0);

    window.scroll({
        top:0,
        left: 0,
        behavior: "smooth"
    });
})


