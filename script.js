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



