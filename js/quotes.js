const quotes = [
    {
        quote:"Don't put your finger in my heart",
        author:"Tite Kubo",
    },
    {
        quote:"We fear what does not exist.",
        author:"Clinton Richard Dawkins",
    },
    {
        quote:"The only true fear is to become a warrior that does not know fear.",
        author:"Homer",
    },
    {
        quote:"That's right, nothing else can change my world.",
        author:"Albert Einstein",
    },
    {
        quote:"Do not live bowing down. Die standing up.",
        author:"Martin Luther King Jr.",
    },
    {
        quote:"Beauty is nothing being there",
        author:"Andrew Warhola Jr.",
    },
    
];

const quote= document.querySelector("#quote>span:first-child"),
     author= document.querySelector("#quote>span:last-child");

function ranQuote(){
    const todayQuote=quotes[parseInt(Math.floor(Math.random()*quotes.length))];
    author.innerText=`${todayQuote.author}`;
    quote.innerText=`${todayQuote.quote}`;
}
ranQuote();