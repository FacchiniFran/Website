window.onload = function () {
    let checkboxes = document.querySelectorAll('.cArrow');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    let burger = document.querySelector('.mBurger');
    if (burger) {
        burger.checked = false;
    }
};