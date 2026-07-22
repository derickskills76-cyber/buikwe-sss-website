/* ==========================================
   BUIKWE SENIOR SECONDARY SCHOOL WEBSITE
   MAIN JAVASCRIPT FILE
========================================== */



// ================================
// MOBILE NAVIGATION MENU
// ================================


function toggleMenu(){

    const nav = document.getElementById("navLinks");


    if(nav.style.display === "flex"){

        nav.style.display = "none";

    }

    else{

        nav.style.display = "flex";
        nav.style.flexDirection = "column";

    }

}


window.addEventListener("load", function(){

    document.body.classList.add("loaded");

    const sections = document.querySelectorAll(
        "section, .card, .welcome-container"
    );

    sections.forEach(function(section){
        section.classList.add("show");
    });

});







// ================================
// HERO IMAGE SLIDESHOW
// (Works on homepage only)
// ================================


let slides = document.querySelectorAll(".hero-slide");


let currentSlide = 0;



if(slides.length > 0){



function changeSlide(){


    slides[currentSlide].classList.remove("active");



    currentSlide++;



    if(currentSlide >= slides.length){

        currentSlide = 0;

    }



    slides[currentSlide].classList.add("active");


}



setInterval(changeSlide,5000);



}








// ================================
// ANIMATED STATISTICS COUNTER
// ================================


let counters = document.querySelectorAll(".counter");



counters.forEach(counter =>{


    counter.innerText="0";


    function updateCounter(){


        const target = Number(counter.dataset.target);


        const current = Number(counter.innerText);



        const increment = target / 100;



        if(current < target){


            counter.innerText = Math.ceil(current + increment);


            setTimeout(updateCounter,30);


        }

        else{


            counter.innerText = target;


        }


    }



    updateCounter();


});








// ================================
// SCROLL REVEAL EFFECT
// ================================


const revealElements = document.querySelectorAll(
"section, .card, .welcome-container"
);



function revealOnScroll(){


    revealElements.forEach(element=>{


        let position =
        element.getBoundingClientRect().top;



        let screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){


            element.classList.add("show");


        }


    });



}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();








// ================================
// ACTIVE MENU HIGHLIGHT
// ================================


let currentPage =
window.location.pathname.split("/").pop();



let menuLinks =
document.querySelectorAll("#navLinks a");



menuLinks.forEach(link=>{


    let linkPage =
    link.getAttribute("href");



    if(linkPage === currentPage){


        link.classList.add("active");


    }


});








// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================


menuLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        let nav =
        document.getElementById("navLinks");



        if(window.innerWidth <= 1000){


            nav.style.display="none";


        }


    });



});








// ================================
// PAGE LOADING EFFECT
// ================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});






window.addEventListener("load", function(){

    document.body.classList.add("loaded");

    document.querySelectorAll("section, .card, .welcome-container")
    .forEach(function(item){

        item.classList.add("show");

    });

});






// Clear contact form after successful submission
const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(){

        setTimeout(function(){

            contactForm.reset();

        }, 1000);

    });

}
