// ------------------------ BOUTTONS
var buttons = document.querySelectorAll(".boutton");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var targetPage = this.getAttribute("data-target");
        window.location.href = targetPage;
    });
}