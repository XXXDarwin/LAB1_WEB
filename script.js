const texts = ["3000+ студентов", "100+ преподавателей", "50+ партнеров"];
const sliderText = document.getElementById("slider-text");
let currentIndex = 0;

function changeText() {

    sliderText.classList.remove("active");
    setTimeout(() => {
        sliderText.textContent = texts[currentIndex];
        sliderText.classList.add("active");
        currentIndex = (currentIndex + 1) % texts.length;
    }, 500);
}

setInterval(changeText, 3000);
sliderText.classList.add("active");