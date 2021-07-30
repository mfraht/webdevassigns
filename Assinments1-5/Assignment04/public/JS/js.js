const greeting = require('./mfModule')


//This line to call the greeting function whenever the page is loaded
function sendGreeting() {
    greeting.sendGreeting();
    greeting.sendLanguage();
    }

sendGreeting()