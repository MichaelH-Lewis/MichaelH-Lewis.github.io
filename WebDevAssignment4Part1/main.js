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

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
// An array that contains potential character names to be inserted into the story text
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
// An array containting potential story locations to be inserted into the story text
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
// An array containing potential actions to be inserted into the story text
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

