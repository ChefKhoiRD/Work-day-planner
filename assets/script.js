// Date
function todayDate() {
 const hours = ['9, 10, 11, 12, 1, 2, 3, 4, 5'];
const dt = new Date();

const day = dt.getDate();
const year = dt.getFullYear();

// dt.getMonth gets the wrong month for some reason
let wrongMonth = dt.getMonth();
const month = (wrongMonth) + 1;

// Display current day
document.getElementById('currentDay').innerText = 
`${dt.toLocaleDateString('en-us', {month: 'long'})} ${day}, ${year}`;
   
};

// Save button and Textbox
const saveButtons = document.getElementsByClassName('save');

// Events DOM
const eventList =
    ['event0', 'event1', 'event2', 'event3', 'event4',
    'event5', 'event6', 'event7', 'event8'];

const eventsArray = document.querySelectorAll(eventList.map(id => `#${id}`).join(', '));

console.log(eventsArray);

//
function eventValues() {
    for (let i = 0; i < eventList.length; i++) {
        let eventArrayValues = eventsArray[i].value
        console.log(eventArrayValues)
    }
}

// Save button event listener
saveButtons[0].addEventListener('click', function() {

    localStorage.setItem('event', eventValues)
    
    console.log("saved")
});

for (const saveButton of saveButtons) {
    saveButton.addEventListener('click', function() {

        localStorage.setItem('event', eventValues)
        
        console.log("saved")
    })
};

// Load saved data
function loadEvents() {
    localStorage.getItem('event');
};

loadEvents();
todayDate();