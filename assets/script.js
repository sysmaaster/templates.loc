var slideIndex = 1;
showSlides(slideIndex);

function plusSliedes(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
 function showSlides(n) {
    var slides = document.getElementsByClassName("br__slider");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0; i<slides.length ; i++){
        slides[i].style.display= "none";
    }
    slides[slideIndex-1].style.display = "block"
 }