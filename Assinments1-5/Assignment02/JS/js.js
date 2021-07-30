// var greeting = require('mf-module');
var greeting = require('./mfModule');
// const greetings = greeting.greeting()
console.log(greeting.greeting())
console.log(greeting.lang())


//This line to call the greeting function whenever the page is loaded
function sendGreeting() {
    greeting.sendGreeting();
    greeting.sendLanguage();
    }

sendGreeting()