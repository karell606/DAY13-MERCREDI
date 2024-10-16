async function addQuote() {

    const quote = document.getElementById("quoteInput").value;
    const author = document.getElementById("authorInput").value;
    
    const data = {
        quote: {
            body: quote,
            author: author
        }
    };

    try {
        const response = await fetch('https://favqs.com/api/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '2aa0505b8b217d7ee96b17b8a4b2068f' // API key
            },
            body: JSON.stringify(data)
        });

        document.getElementById("result").innerText = `Response code: ${response.status}`;
    } catch (error) {
        console.error("Failed to add the quote", error);
        document.getElementById("result").innerText = "An error occurred while adding the quote.";
    }
}
