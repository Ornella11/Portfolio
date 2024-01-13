// ------------------------ BOUTTONS
var buttons = document.querySelectorAll(".boutton");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var targetPage = this.getAttribute("data-target");
        window.location.href = targetPage;
    });
}


// ------------------------ LIEN
/*var buttons = document.querySelectorAll(".boutton-lien");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var targetPage = this.getAttribute("data-target");
        window.location.href = targetPage;
    });
}*/

var buttons = document.querySelectorAll(".boutton-lien");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var targetPage = this.getAttribute("data-target");
        window.open(targetPage, "_blank");
    });
}
