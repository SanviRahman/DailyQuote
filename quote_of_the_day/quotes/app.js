const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");

// Function to get a random quote
const getRandomQuote = async () => {
  const response = await fetch('http://localhost:8000/api/quote/');
  const data = await response.json();
  quoteText.innerText = `"${data.quote}"`;
  quoteAuthor.innerText = `- ${data.author}`;
};

// Function to search quotes by author
const searchQuotes = async () => {
  const author = searchInput.value.trim();
  if (author) {
    const response = await fetch(`http://localhost:8000/api/quotes/search/?author=${author}`);
    const data = await response.json();
    if (data.results.length > 0) {
      searchResults.innerHTML = data.results.map(quote => `<p>"${quote.quote}" - ${quote.author}</p>`).join('');
    } else {
      searchResults.innerHTML = `<p>No quotes found for "${author}".</p>`;
    }
  }
};

// Event listeners
newQuoteButton.addEventListener("click", getRandomQuote);
searchButton.addEventListener("click", searchQuotes);

// Initial load
getRandomQuote();
