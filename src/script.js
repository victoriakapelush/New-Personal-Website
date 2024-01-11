//rotate the little star-wheel on the index html page 

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("boom-icon");
    image.style.transform = "rotate(" + window.scrollY/2 + "deg)";
}

//show and hide navigation bar (mobile version)

const navBtn = document.getElementById('nav-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

navBtn.addEventListener("click", function() {
    if (dropdownMenu.classList.toggle("hideMenu")) {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.classList.remove("hideMenu");
        dropdownMenu.style.display = "block";
    }
})

// Scroll my works to left/right on "arrows" click

let currentIndex = 0;
const totalItems = document.querySelectorAll('.work-example').length;
const rightArrowBtn = document.getElementById('right-arrow-btn');
const leftArrowBtn = document.getElementById('left-arrow-btn');

function nextImage() {
    // Check if currentIndex is not already at the last image
    if (currentIndex < totalItems - 2) {
        showImage(currentIndex + 1);
    }
}

function prevImage() {
    // Check if currentIndex is not already at the first image
    if (currentIndex > 0) {
        showImage(currentIndex - 1);
    }
}

function showImage(index) {
    const carousel = document.getElementById('work-examples-carousel');
    const itemWidth = document.querySelector('.work-example').offsetWidth;

    // Ensure positive index and check if there are images left
    currentIndex = (index + totalItems) % totalItems;

    if (currentIndex < totalItems && currentIndex >= 0) {
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }
}

rightArrowBtn.addEventListener('click', nextImage);
leftArrowBtn.addEventListener('click', prevImage);

