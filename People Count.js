// DJ Uittenbogaard - duittenb@cisco.com
// JW Ruys - jruys@cisco.com
//
// v0.1       Info: Count maximum people, show notification when >max nr of people in the room
// v0.2       Changed text display method
// v0.3       Moved maxPeople display to alert header

const xapi = require('xapi');
const maxPeople = 1
const alertDuration = 30
console.log('Debug: init - max = '+maxPeople);

// display text on screen - can also be replaced by play-message, show-image, call-security etc
function displayTextOnScreen(header,text) {
  xapi.command('UserInterface Message Alert Display', {
  Title: header,
  Text: text, 
  Duration: alertDuration,
  });
}

// Process updated STATUS data
function postStatusCall(amount) {
   console.log('DEBUG - Detected: ' + amount + ', max: ' + maxPeople);
   if (amount > maxPeople) {
       console.log('DEBUG - Alerting');
       displayTextOnScreen("Current room capacity: " + maxPeople, "To comply with social distancing guidelines this room's capacity is limited." )
   }
}

// Get dynamic PEOPLE COUNT STATUS updates
xapi.status.on('RoomAnalytics PeopleCount Current', (numberofpeople) => postStatusCall(numberofpeople));
