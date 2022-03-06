let menu = document.querySelector(".sidenav");
   
let hideInfo = document.querySelector(".exit");

let showInfo = document.querySelector('.icon-menu');
 
showInfo.addEventListener("click", function(){
    menu.style.transform = "translateX(0%)";
    menu.style.transition = "ease-in 0.5s";
    
});

hideInfo.addEventListener("click", function(){
    menu.style.transform = "translateX(110%)";
    menu.style.transition = "ease-in 0.5s";
});

