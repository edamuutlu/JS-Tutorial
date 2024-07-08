// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0; /* Şu anki slaytın indeksini tutar. */
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        /* Eğer slides elemanlarının uzunluğu 0'dan büyükse, ilk slaytı gösterir ve her 5 saniyede bir nextSlide fonksiyonunu çağıracak şekilde bir zamanlayıcı ayarlar. */
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}