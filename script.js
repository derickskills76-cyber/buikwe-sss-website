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







// ================= DOCUMENT PREVIEW =================


function previewFile(inputId, previewId){

const fileInput = document.getElementById(inputId);

const preview = document.getElementById(previewId);


if(fileInput){

fileInput.addEventListener("change", function(){


const file = this.files[0];


if(file){


if(file.type.startsWith("image/")){


const reader = new FileReader();


reader.onload = function(e){


preview.innerHTML = `

<img src="${e.target.result}"

style="width:150px;height:150px;object-fit:cover;border-radius:10px;">


<p>${file.name}</p>

`;

}


reader.readAsDataURL(file);


}

else{


preview.innerHTML = `

<p>

📄 ${file.name}

<br>

Size: ${(file.size/1024).toFixed(2)} KB

</p>

`;

}


}


});


}


}



previewFile("passport_photo","passport_preview");

previewFile("results_slip","results_preview");

previewFile("report_form","report_preview");




// ===== TAB FUNCTION =====
function showBlock(blockId, button) {
    // Hide all blocks
    var blocks = document.querySelectorAll('.admission-block');
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].classList.remove('active');
    }
    
    // Show selected block
    document.getElementById(blockId).classList.add('active');
    
    // Remove active class from all buttons
    var buttons = document.querySelectorAll('.tab-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-btn');
    }
    
    // Add active class to clicked button
    button.classList.add('active-btn');
    
    // Auto-select the corresponding radio button
    if (blockId === 'block-s1') {
        document.getElementById('s1_radio').checked = true;
    } else if (blockId === 'block-s5') {
        document.getElementById('s5_radio').checked = true;
    } else if (blockId === 'block-transfer') {
        document.getElementById('transfer_radio').checked = true;
    }
}








// ---------- WELCOME SLIDER (3 IMAGES) ----------
let welcomeSlideIndex = 0;
const welcomeSlides = document.querySelectorAll('.welcome-slide');
const dots = document.querySelectorAll('.dot');

function showWelcomeSlide(n) {
    // Remove active from all slides and dots
    welcomeSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active to current slide and dot
    welcomeSlides[n].classList.add('active');
    dots[n].classList.add('active');
}

function changeWelcomeSlide(direction) {
    welcomeSlideIndex = (welcomeSlideIndex + direction + welcomeSlides.length) % welcomeSlides.length;
    showWelcomeSlide(welcomeSlideIndex);
}

function currentWelcomeSlide(n) {
    welcomeSlideIndex = n;
    showWelcomeSlide(welcomeSlideIndex);
}

// Auto-slide every 4 seconds
let welcomeAutoSlide = setInterval(() => {
    changeWelcomeSlide(1);
}, 4000);

// Pause on hover
const welcomeSlider = document.querySelector('.welcome-slider');
if (welcomeSlider) {
    welcomeSlider.addEventListener('mouseenter', () => {
        clearInterval(welcomeAutoSlide);
    });
    welcomeSlider.addEventListener('mouseleave', () => {
        welcomeAutoSlide = setInterval(() => {
            changeWelcomeSlide(1);
        }, 4000);
    });
}
