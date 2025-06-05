const slideWrapper = document.querySelector('.slide-wrapper');
const slideImg1 = document.getElementById('slider-image1');
const slideImg2 = document.getElementById('slider-image2');

const images = ['/r1.jpg' , '/r2.jpg' , '/r3.jpg' , '/r4.jpg']

let index = 0;
let isFirst = true;
setInterval(() => {

    // Slide to next image

    slideWrapper.style.transform = "translateX(-100%)";

    setTimeout(() => {

        // After slide, update hidden image

        index = (index + 1) % images.length;

        if (isFirst) {

            slideImg1.src = images[index];

        } else {

            slideImg2.src = images[index];

        }

        // Reset slider back to start

        slideWrapper.style.transition = "none";

        slideWrapper.style.transform = "translateX(0)";

        // Force reflow

        void slideWrapper.offsetWidth;

        slideWrapper.style.transition = "transform 1s ease-in-out";

        isFirst = !isFirst;

    }, 1000); // 1s matches the CSS transition

}, 4000);