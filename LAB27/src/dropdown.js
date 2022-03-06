
let one = document.querySelector(".side1");

let two = document.querySelector(".side2");

let three = document.querySelector(".side3");

let icon = document.querySelector(".icon-up-open");

let icon2 = document.querySelector(".icon-up-open2");

let icon3 = document.querySelector(".icon-up-open3");

let open1 = document.querySelector(".side-op1");

let open2 = document.querySelector(".side-op2");

let open3 = document.querySelector(".side-op3");

let isopen = 0;

one.addEventListener("click", function(){
    open1.style.display = "block";
    if (isopen == 0){
        open1.style.display = "block";
        isopen = 1;
        icon.style.transform = 'rotate(0.1deg)';
    }
    else {
        open1.style.display = "none";
        isopen = 0;
        icon.style.transform = 'rotate(180deg)';
    }
    
});






two.addEventListener("click", function(){
    open2.style.display = "block";
    if (isopen == 0){
        open2.style.display = "block";
        isopen = 1;
        icon2.style.transform = 'rotate(0.1deg)';
    }
    else {
        open2.style.display = "none";
        isopen = 0;
        icon2.style.transform = 'rotate(180deg)';
    }
});

three.addEventListener("click", function(){
    open3.style.display = "block";
    if (isopen == 0){
        open3.style.display = "block";
        isopen = 1;
        icon3.style.transform = 'rotate(0.1deg)';
    }
    else {
        open3.style.display = "none";
        isopen = 0;
        icon3.style.transform = 'rotate(180deg)';
    }
});
