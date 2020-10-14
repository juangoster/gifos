/*----------------------toggle burguer menu-----------------------*/
const navBar = document.querySelector(".navbar");
const hamburguer = document.querySelector(".burguer");
const menuLinks = document.querySelectorAll(".menuLink")

hamburguer.addEventListener("click", toggleBurguer);

function toggleBurguer(){
    navBar.classList.toggle("showMenu");
    hamburguer.classList.toggle("menuClose");
}

menuLinks.forEach(
    function (menuLink){
    menuLink.addEventListener("click", toggleBurguer);
}
)