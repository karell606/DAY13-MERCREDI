async function fetchQuoteOfTheDay() {

    try {
        const response = await fetch('https://favqs.com/api/qotd');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        document.getElementById("quote").innerText = data.quote.body;
        document.getElementById("author").innerText = `— ${data.quote.author}`;
    } catch (error) {
        console.error("Failed to fetch the quote of the day", error);
        document.getElementById("quote").innerText = "An error occurred. Please try again.";
    }
}

window.onload = fetchQuoteOfTheDay;
