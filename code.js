
const myBurger = document.querySelector(".burger");
const openBurger = document.querySelector(".openburger");
const closeBurger = document.querySelector(".closeburger");
const myAccueil = document.querySelector(".accueil");
const myServices = document.querySelector(".services");
const myContacte = document.querySelector(".contacte");

openBurger.addEventListener("click", ()=>{
myBurger.style.transform = "translateX(370px)";
myBurger.style.transition = "0.9s";
});
closeBurger.addEventListener("click", ()=>{
myBurger.style.transform = "translateX(-400px)";
myBurger.style.transition = "0.9s";
});

myAccueil.addEventListener("click", ()=>{
 myAccueil.style.background = "black";   
 myAccueil.style.height=  "50px";
 myAccueil.style.width = "50px";
 myAccueil.style.borderRadius = "50px";
 myAccueil.style.transform = "scale(1.2,1.2)";
 myContacte.style.background = "none";  
 myContacte.style.height=  "none";
 myContacte.style.width = "none";
 myContacte.style.borderRadius = "none";
 myContacte.style.transform = "none";
 myServices.style.background = "none";  
 myServices.style.height=  "none";
 myServices.style.width = "none";
 myServices.style.borderRadius = "none";
 myServices.style.transform = "none";
window.scroll({
    top: 0,
    behavior:"smooth"
})});


myServices.addEventListener("click", ()=>{
    myServices.style.background = "black";  
    myServices.style.height=  "50px";
    myServices.style.width = "50px";
    myServices.style.borderRadius = "50px";
    myServices.style.transform = "scale(1.2,1.2)";
    myAccueil.style.background = "none";   
    myAccueil.style.height=  "none";
    myAccueil.style.width = "none";
    myAccueil.style.borderRadius = "none";
    myAccueil.style.transform = "none";
    myContacte.style.background = "none";  
    myContacte.style.height=  "none";
    myContacte.style.width = "none";
    myContacte.style.borderRadius = "none";
    myContacte.style.transform = "none";
    window.scroll({
        top: 1000,
        behavior:"smooth"
    })
});


myContacte.addEventListener("click", ()=>{
    myContacte.style.background = "black";  
    myContacte.style.height=  "50px";
    myContacte.style.width = "50px";
    myContacte.style.borderRadius = "50px";
    myContacte.style.transform = "scale(1.2,1.2)";
    myAccueil.style.background = "none";   
    myAccueil.style.height=  "none";
    myAccueil.style.width = "none";
    myAccueil.style.borderRadius = "none";
    myAccueil.style.transform = "none";
    myServices.style.background = "none";  
    myServices.style.height=  "none";
    myServices.style.width = "none";
    myServices.style.borderRadius = "none";
    myServices.style.transform = "none";
    window.scroll({
        top: 2000,
        behavior:"smooth"
    })
});