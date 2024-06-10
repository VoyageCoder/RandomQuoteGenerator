//Static Array Quotes
document.addEventListener("DOMContentLoaded", (event) => {
    const quotes = ["Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. — Martin Luther King Jr.",
        "The only way to do great work is to love what you do. - Steve Jobs", "The best way to predict the future is to invent it. - Alan Kay",
        "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama"]
    const Q_button = document.getElementById("generate_quote");
    const DisplayQ = document.getElementById("quote_display");

    Q_button.addEventListener('click', () => {
        const random = Math.floor(Math.random() * quotes.length);
        DisplayQ.innerHTML = (random, quotes[random]);
    });

    //Fetch Endpoint Quotes
    const Quote_button = document.getElementById("generate_quote-ep");
    const Display_Quote = document.getElementById("quote_display-ep");

    Quote_button.addEventListener('click', () => {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                Display_Quote.innerHTML = `${data.content} - ${data.author}`;
            })
            .catch(error => Display_Quote.innerHTML = `There was an error with getting your quote:`, error)
    });
});
