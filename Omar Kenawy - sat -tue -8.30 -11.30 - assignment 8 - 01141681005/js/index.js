



var quotes = ['Be yourself; everyone else is already taken.', 'So many books, so little time.', 'Be the change that you wish to see in the world.',
    'you only live once, but if you do it right, once is enough'];



function getNewQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('my-quote').innerHTML = quotes[randomIndex];

}