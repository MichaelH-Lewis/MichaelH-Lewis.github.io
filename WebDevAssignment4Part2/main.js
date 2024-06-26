const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ["pic1", "pic2", "pic3", "pic4", "pic5"]
/* Declaring the alternative text for each image file */

/* Looping through images */
imageFileNames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function() {
        displayedImage.src = this.src;
        displayedImage.alt = this.alt;
    });

});

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    const overlay = document.querySelector('.overlay');
    if (currentClass == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'
    }
});