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

function phoneHoverOn() {
    document.getElementById("contact-phone-img").src = "images/icons/phone-filled.png";
    document.getElementById("contact-phone-text").style.color = "#fef303";
}

function phoneHoverOff() {
    document.getElementById("contact-phone-img").src = "images/icons/phone-outlined.png";
    document.getElementById("contact-phone-text").style.color = "#ffffff";
}

function emailHoverOn() {
    document.getElementById("contact-email-img").src = "images/icons/email-filled.png";
    document.getElementById("contact-email-text").style.color = "#fef303";
}

function emailHoverOff() {
    document.getElementById("contact-email-img").src = "images/icons/email-outlined.png";
    document.getElementById("contact-email-text").style.color = "#ffffff";
}