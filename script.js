
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. — Helen Keller",

    "I love hearing educated people speak and just shut everyone up. Knowledge is always the loudest voice. — Zendaya",

    "Perhaps some detours aren\’t detours at all. Perhaps they are actually the path. — Katherine Wolf",

    "Champions keep playing until they get it right. — Billie Jean King",

    "Develop enough courage so that you can stand up for yourself and then stand up for somebody else. — Maya Angelou",

    "I\’d rather regret the risks that didn\’t work out than the chances I didn\’t take at all. — Simone Biles",

    "I don't want to be better than you or her or him - I want to be better than I am right now. — Kerri Walsh",

    "If you don\’t see a clear path for what you want, sometimes you have to make it yourself. — Mindy Kaling",

    "Work hard every day. No matter what your strengths and weaknesses, there's no substitute for hard work. — Hope Solo",

    "I love challenging the status quo. — Sara Ramirez",

    "I can if I want to because it's my business. — Tabitha Brown",

    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell. — Amal Clooney",

    "True champions aren't always the ones that win, but those with the most guts. — Mia Hamm",

    "Being a strong woman is very important to me. But doing it all on my own is not. — Reba McEntire",

    "We might not be able to change our circumstances, but we CAN change our attitude. — Beth Moore"
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

newQuoteButton.addEventListener('click', () => {
    const randomQuote = generateRandomQuote();
    quoteElement.textContent = randomQuote;
});

const initialQuote = generateRandomQuote();
quoteElement.textContent = initialQuote;
