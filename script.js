let index = 0;

const slides = document.querySelectorAll(".slides img");

function showSlide(i) {

    index = i;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    document.querySelector(".slides").style.transform =
        `translateX(-${index * 100}%)`;
}

setInterval(() => {
    showSlide(index + 1);
}, 4000);

showSlide(0);