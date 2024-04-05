// Retrieves the "random" class from the HTML file
const randomize = document.querySelector('.randomize'); 
// Retrieves the "Custom Name" element ID from the HTML file
const customName = document.getElementById('customname');
// Retrieves the "story" class from the HTML file
const story = document.querySelector('.story')
// Function that returns a random element from an array
function randomValueFromArray (array) {
    const random = Math.floor(Math.random()* array.length);
    return array[random];
}