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
randomize.addEventListener('click', result);
// Function that's executed whenever the 'click' event occurs
function result() {
    // Let statement that sets the newStory to be equal to the initial story text
    let newStory = storyText
    // Selects a random item from the insertX array
    const xItem = randomValueFromArray (insertX)
    // Selects a random item from the insertY array
    const yItem = randomValueFromArray (insertY)
    // Selects a random item from the insertZ array
    const zItem = randomValueFromArray (insertZ)
    // Replaces all occurrences of ":insetx:" with the selected item from the array
    newStory = newStory.replaceAll(':insertx:', xItem)
    // Replaces all occurrences of ":insety:" with the selected item from the array
    newStory = newStory.replaceAll(':inserty:', yItem)
    // Replaces all occurrences of ":insetz:" with the selected item from the array
    newStory = newStory.replaceAll(':insertz:', zItem)
    // If statement that checks if a custom name is provided, and if it is, replaces the value "Bob" with the custom name
    if (customName.value !== '') {
        const name = customName.value
        newStory = newStory.replaceAll('Bob', name)
    }
    // If statement that checks if the values should be converted into UK measurements
    if (document.getElementById ("uk").checked) {
        // Converting weight from lbs to stone
        const weight = `${Math.round(300*0.0714286)} stone`;
        // Convert temperature from F to C
        const temperature = `${Math.round((94-32) * 5 / 9)} centigrade`;
        // Replacing "94 Fahrenheit" with the converted temperature
        newStory = newStory.replaceAll('94 Fahrenheit', temperature)
        // Replacing "300 pounds" with the converted weight
        newStory = newStory.replaceAll('300 pounds', weight)    
    }
    // Setting the content of the story element to be the modified story text
    story.textContent = newStory;
    // Making the story element visible
    story.style.visiblity = 'visible';
}