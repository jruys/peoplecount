// DJ Uittenbogaard - duittenb@cisco.com
// v0.1       Info: Count maximum people, show notification when >max nr of people in the room
// v0.2       Changed text display method

const xapi = require('xapi');
const maxPeople = 1
console.log('MACRO STARTED - COVID-19 People Count');

// display text on screen - can also be replaced by play-message, show-image, call-security etc
function displayTextOnScreen(text, duration = 30) {
  xapi.command('UserInterface Message Alert Display', {
  Title: 'COVID-19 ALERT',
  Text: text, Duration: duration,
  });
}

// Process updated STATUS data
function postStatusCall(amount) {
   console.log('DEBUG - Detected: ' + amount + ', max: ' + maxPeople);
   if (amount > maxPeople) {
       console.log('DEBUG - Alerting');
       displayTextOnScreen("Too many people detected                       Room capacity = " + maxPeople)
   };
}

// Get dynamic PEOPLE COUNT STATUS updates
xapi.status.on('RoomAnalytics PeopleCount Current', (numberofpeople) => postStatusCall(numberofpeople));