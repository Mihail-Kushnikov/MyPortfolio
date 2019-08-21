var link = document.querySelector(".header__messages");
var help = document.querySelector(".header__avatar");
var messages = document.querySelector(".messages");
var accaunt = document.querySelector(".accaunt");

link.addEventListener ("click", function (evt) {
    evt.preventDefault();
    messages.classList.toggle("open");
    accaunt.classList.remove ("open");
});

help.addEventListener ("click", function (evt) {
    evt.preventDefault();
    accaunt.classList.toggle("open");
    messages.classList.remove ("open");
});
