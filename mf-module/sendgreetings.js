
sendingRandGreeting = (function()
{
    var randomNumber
    var sendGreetings = {

        greetings: [ "Welcome to our website", "أهلا بك في موقعنا", "Bienvenue sur notre site",
            "Willkommen auf unserer Webseite", "Bienvenido a nuestro sitio web", "私たちのウェブサイトへようこそ",
            "Bine ati venit pe site-ul nostru", "Benvenuti sul nostro sito web", "Welcome to our website",
            "أهلا بك في موقعنا", "Καλώς ήρθατε στην ιστοσελίδα μας", "Welkom by ons webwerf"
        ],
        anArrayOfLanguages: ["English","Arabic","French","German", "Spanish",
        "Japanese", "Romanian","Italian", "English","Arabic", "Greek","Afrikaans"],
        
        greeting: function() {
            randomNumber = Math.floor( Math.random() * this.greetings.length );
            return this.greetings[ randomNumber ];
        },

        lang: function() {
            return this.anArrayOfLanguages[ randomNumber ];
        }
    }

    return sendGreetings;

})();

module.exports = sendingRandGreeting;