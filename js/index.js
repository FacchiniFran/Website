window.onload = function() {
    var checkboxes = document.querySelectorAll(".cArrow");
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });

    var burger = document.querySelector(".mBurger");
    if (burger) {
        burger.checked = false;
    }
};