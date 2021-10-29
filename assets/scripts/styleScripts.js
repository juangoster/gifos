/*----------------------toggle burguer menu-----------------------*/
const navBar = document.querySelector(".navbar");
const hamburguer = document.querySelector(".burguer");
const menuLinks = document.querySelectorAll(".menuLink");


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

/*--------------------MODO NOCTURNO------------------------------*/
const btnNight = document.querySelector("#switchNight");
const containerResult = document.querySelector(".resultContainer");
const blueFont = document.querySelectorAll(".fontBlue");
const nightBurguer = document.querySelector(".burguer");
const nightLogo = document.querySelector(".logo");
const nightClose = document.querySelector(".menuClose");
const nightSearch = document.querySelector(".btnSearch");
const nightSearchControl = document.querySelector(".searchControl");

btnNight.addEventListener("click", toggleNight);

function toggleNight(){
    document.body.classList.toggle("nightMode");
    containerResult.classList.toggle("nightGifosArea");
    nightBurguer.classList.toggle("nightBurguer");
    nightLogo.classList.toggle("nightLogo");
    nightSearch.classList.toggle("nightSearch");
    nightSearchControl.classList.toggle("nightSearchControl");

    blueFont.forEach(font =>{
        font.classList.toggle("nightFont")
    })

       
    
        

    

}
