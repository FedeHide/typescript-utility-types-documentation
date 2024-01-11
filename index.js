const links = document.getElementsByClassName('nav-link');
const codes = document.getElementsByClassName('header-code');
const releaseBox = document.getElementsByClassName('release-box');
const toggle = document.getElementById('darkmode-container');
const body = document.querySelector('body');


// darkmode toggle

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        removeClass();
        this.classList.add('selected');
    });
}

function removeClass() {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
}




    
    toggle.onclick = () => {
        toggle.classList.toggle('active');
        body.classList.toggle('active');
        for (let i = 0; i < codes.length; i++) {
                codes[i].classList.toggle('active');
            }
        for (let i = 0; i < releaseBox.length; i++) {
            releaseBox[i].classList.toggle('active');
            }
        }

