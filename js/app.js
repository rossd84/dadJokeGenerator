const joke = document.getElementById('joke');
const button = document.getElementById('button');

const jokes = [
    'Son: I\'m bored<br>Dad: Nice to meet you bored',

    'How do you make holy water?<br>You boil the hell out of it.',

    'Did you know the first French fries weren\'t actually cooked in France?<br>They were cooked in Greece.',

    'If a child refuses to sleep during nap time, are they guilty of resisting a rest?',

    'I ordered a chicken and an egg from Amazon... I\'ll let you know.',

    'Justice is a dish best served cold, if it were served warm it would be justwater.',

    'If you see a robbery at an Apple Store does that make you an iWitness?',

    'What did the pirate say on his 80th birthday?<br>AYE MATEY',

    'Cashier: "Would you like the milk in a bag, sir?"<br>Dad: "No, just leave it in the carton!"',

    'Why couldn\'t the bike standup by itself?<br>It was two tired.',

    'Grandpa: I have a \'dad bod\', Dad: To me it\'s more like a father figure.',

    'What time did the man go to the dentist? Tooth hurt-y.',

    'Two guys walk into a bar, the third one ducks.',

    'Can February March? No, but April May!',

    'What is Beethoven’s favorite fruit? A ba-na-na-na.',

    'Son: Did you get a haircut?<br>Dad: No, I got them all cut!',

    'Cashier: Paper or plastic?<br>Dad: Either, I\'m bisacktual.',

    'What noise does a 747 make when it bounces? Boeing, Boeing, Boeing.',

    'Did you hear about the circus fire? It was in tents!',

    'Waitress: Soup or salad? Dad: I don\’t want a SUPER salad, I want a regular salad.',

    'What do you get when you cross an elephant with a rhino? Elephino.',

    'How do you make a Kleenex dance? Put a little boogie in it!'
];


button.addEventListener('click', () => {
    // function generator() {
    // }
    
    $('#joke').fadeOut(500);
    
    setTimeout(function() {
        let num = Math.floor(Math.random() * jokes.length);
        joke.innerHTML = jokes[num];
        $('#joke').fadeIn(500);
    }, 500);
});

console.log(Math.random());
