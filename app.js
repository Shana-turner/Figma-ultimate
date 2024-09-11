const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector("#menu");
const closeMenu = document.getElementById("closeBtn");
const flecheBas = document.querySelector('.fleche-menu');
const flecheHaut = document.querySelector(".fleche-haut");
const linkMenuFooter = document.querySelector('.footer-link');


openMenu.addEventListener('click', ()=>{
    menu.style.right= "0px";
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
});

closeMenu.addEventListener('click', ()=>{
    menu.style.right= "-100%";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});

flecheBas.addEventListener('click', ()=>{
    linkMenuFooter.style.display= "flex";
    flecheBas.style.display = "none";
    flecheHaut.style.display = "block";

});

flecheHaut.addEventListener('click', ()=>{
    linkMenuFooter.style.display= "none";
    flecheBas.style.display = "block";
    flecheHaut.style.display = "none";
});

const flecheBasService = document.querySelector('.fleche-service');
const flecheHautService = document.querySelector('.fleche-service-haut');
const serviceFooter = document.querySelector('.footer-link-service');

flecheBasService.addEventListener('click', ()=>{
    serviceFooter.style.display = "flex";
    flecheBasService.style.display = "none";
    flecheHautService.style.display = "block";
});

flecheHautService.addEventListener('click', ()=>{
    serviceFooter.style.display = "none";
    flecheBasService.style.display = "block";
    flecheHautService.style.display = "none";
});