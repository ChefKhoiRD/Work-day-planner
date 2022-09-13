// Date
const dt = new Date();
function todayDate() {
    const day = dt.getDate();
    const year = dt.getFullYear();

    // dt.getMonth gets the wrong month for some reason
    let wrongMonth = dt.getMonth();
    const month = (wrongMonth) + 1;

    // Display current day
    document.getElementById('currentDay').innerText = 
    `${dt.toLocaleDateString('en-us', {month: 'long'})} ${day}, ${year}`;
   
};

// Change color based on time
const rows = document.getElementsByClassName("row");
let currentHour = dt.getHours();

function setColor(element, color) {
  element.style.backgroundColor = color;
}

Array.from(rows).forEach(row => {
    let rowId = row.id;
    let rowHour;
    if (rowId) {
        rowHour = parseInt(rowId);
    }
    if (rowHour) {
        if (currentHour === rowHour) {
        setColor(row, "#ff6161");
        } else if (currentHour < rowHour) {
        setColor(row, "#77dd77");
        } else if (currentHour > rowHour) {
        setColor(row, "#d3d3d3");
        } else {

        }
    }
});

// Save button and Textbox
const saveButtons = document.getElementsByClassName('save');

// Events DOM
const eventList =
    ['event0', 'event1', 'event2', 'event3', 'event4',
    'event5', 'event6', 'event7', 'event8'];

const eventsArray = document.querySelectorAll(eventList.map(id => `#${id}`).join(', '));

// Save button event listener
saveButtons[0].addEventListener('click', function() {
    let eventArrayValues0 = eventsArray[0].value
    localStorage.setItem('event0', JSON.stringify(eventArrayValues0))
});

for (const saveButton of saveButtons) {
    saveButton.addEventListener('click', function() {
        let eventArrayValues1 = eventsArray[1].value
        localStorage.setItem('event1', JSON.stringify(eventArrayValues1))

        let eventArrayValues2 = eventsArray[2].value
        localStorage.setItem('event2', JSON.stringify(eventArrayValues2))

        let eventArrayValues3 = eventsArray[3].value
        localStorage.setItem('event3', JSON.stringify(eventArrayValues3))

        let eventArrayValues4 = eventsArray[4].value
        localStorage.setItem('event4', JSON.stringify(eventArrayValues4))

        let eventArrayValues5 = eventsArray[5].value
        localStorage.setItem('event5', JSON.stringify(eventArrayValues5))

        let eventArrayValues6 = eventsArray[6].value
        localStorage.setItem('event6', JSON.stringify(eventArrayValues6))

        let eventArrayValues7 = eventsArray[7].value
        localStorage.setItem('event7', JSON.stringify(eventArrayValues7))

        let eventArrayValues8 = eventsArray[8].value
        localStorage.setItem('event8', JSON.stringify(eventArrayValues8))
    })
};

// Load saved data
let value0 = JSON.parse(localStorage.getItem('event0'))
eventsArray[0].value = value0

let value1 = JSON.parse(localStorage.getItem('event1'))
eventsArray[1].value = value1

let value2 = JSON.parse(localStorage.getItem('event2'))
eventsArray[2].value = value2

let value3 = JSON.parse(localStorage.getItem('event3'))
eventsArray[3].value = value3

let value4 = JSON.parse(localStorage.getItem('event4'))
eventsArray[4].value = value4

let value5 = JSON.parse(localStorage.getItem('event5'))
eventsArray[5].value = value5

let value6 = JSON.parse(localStorage.getItem('event6'))
eventsArray[6].value = value6

let value7 = JSON.parse(localStorage.getItem('event7'))
eventsArray[7].value = value7

let value8 = JSON.parse(localStorage.getItem('event8'))
eventsArray[8].value = value8

todayDate();