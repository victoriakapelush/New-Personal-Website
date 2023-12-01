window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("boom-icon");
    image.style.transform = "rotate(" + window.scrollY/2 + "deg)";
}

/*const contactBtn = document.getElementById('contact-button');

contactBtn.addEventListener('click', function() {
    document.getElementById('contact-form').style.display = "none";
    const contactBox = document.getElementById('contact-box')
    const para = document.createElement('p');
    contactBox.appendChild(para);
    para.textContent = "Thank you. Your submission has been received."
})*/

