const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click",() => {navbarLinks.classList.toggle("nav-active")});

let slideIndex = [1,1,1,1];
let slideId = ["project-slides-1","project-slides-2","project-slides-3","project-slides-4"]
let dotId = ["dot-1","dot-2","dot-3","dot-4"];
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);
showSlides(1,3);

// Next/previous controls
function plusSlides(n, no) {
    showSlides(slideIndex[no - 1] += n, no - 1);
}

// Thumbnail image controls
function currentSlide(n, no) {
    showSlides(slideIndex[no - 1] = n, no - 1);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);

    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no] - 1].className += " active";
}