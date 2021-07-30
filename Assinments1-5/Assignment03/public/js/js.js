const greeting = require('./mf-module')


//This line to call the greeting function whenever the page is loaded
function sendGreeting() {
    greeting.greeting();
    greeting.lang();
    }

sendGreeting()