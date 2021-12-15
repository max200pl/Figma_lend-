const burgerMenu = document.getElementById("burgerMenu");
const closeModalMenu = document.getElementById("close_modal")
const nav = document.getElementById("nav");

burgerMenu.addEventListener("click", () =>
{
     nav.classList.toggle("show_menu")
     if (nav.classList.contains("show_menu")) closeModalMenu.classList.add("show")

});

closeModalMenu.addEventListener("click", () =>
{
     nav.classList.toggle("show_menu")
     closeModalMenu.classList.remove("show")
});


