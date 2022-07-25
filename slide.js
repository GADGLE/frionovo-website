let n = 0
let slides = document.getElementsByClassName("main__img")
let dots = document.getElementsByClassName("slide__button")

showSlide(0)
autoSlide()

function showSlide(number) {
    slides[number].style.display = "block"
    dots[number].className += " active"
}

function autoSlide() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }
    if (n === 3) {
        n = 0
    }
    slides[n].style.display = "block"
    dots[n].className += " active"
    n++
    setTimeout(autoSlide, 5000);
}

function selectSlide(number) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    dots[number].className += " active"
    slides[number].style.display = "block"
}
