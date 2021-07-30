//This is my local module to  random greetings with different languages 

let anArrayOfGreetings = [
    "Welcome to our website",
    "أهلا بك في موقعنا",
    "Bienvenue sur notre site",
    "Welcome to our website",
    "Willkommen auf unserer Webseite",
    "Bienvenido a nuestro sitio web",
    "私たちのウェブサイトへようこそ",
    "Welcome to our website",
    "Bine ati venit pe site-ul nostru",
    "Benvenuti sul nostro sito web",
    "Καλώς ήρθατε στην ιστοσελίδα μας",
    "Welkom by ons webwerf"
];
let anArrayOfLanguages = ["English","Arabic","French","English","German","Spanish","Japanese","English","Romanian","Italian","Greek","Afrikaans"];
let anArrayOfUniqueNumbers = [];
let newNumber = 0;
let numberGenerator = function () {
    if (anArrayOfUniqueNumbers.length >= 13) return;
    newNumber = Math.floor(Math.random() * 10 + 1);
    if (anArrayOfUniqueNumbers.indexOf(newNumber) < 0) {
        anArrayOfUniqueNumbers.push(newNumber);
    }
    numberGenerator(anArrayOfUniqueNumbers);
    return  anArrayOfUniqueNumbers;
};

numberGenerator();

function sendGreeting() {
    newNumber = anArrayOfUniqueNumbers[1];
    randGreeting = anArrayOfGreetings[newNumber];
    randLanguage = anArrayOfLanguages[newNumber];
    document.getElementById('greeting').innerHTML = randGreeting;
    document.getElementById('greetingLang').innerHTML = randLanguage;
    return randGreeting;
}


function sendLanguage() {
    newNumber = anArrayOfUniqueNumbers[1];
    randLanguage = anArrayOfLanguages[newNumber];
    document.getElementById('greetingLang').innerHTML = randLanguage;
    return randLanguage;
}

module.exports.sendGreeting = sendGreeting;
module.exports.sendLanguage  = sendLanguage;