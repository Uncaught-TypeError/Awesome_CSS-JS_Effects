let navbar = document.querySelector('.navbar');
let searchBox = document.querySelector('.search-box .bx-search');
// <i class='bx bx-x'></i>

searchBox.addEventListener('click', ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search", "bx-x");
    }else{
        searchBox.classList.replace("bx-x", "bx-search");
    }
})

// sidebar open close js Code

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener('click', ()=>{
    navLinks.style.left="0";
});
closeOpenBtn.addEventListener('click', ()=>{
    navLinks.style.left="-100%";
});

//sidebar sub menu open close js Code

let htmlArrow = document.querySelector(".html-arrow");
htmlArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});