function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "bf3o0930bd56bb8b43fbe8a4cftca0a1";
  let prompt = `User instructions: Generate a quote from the movie ${instructionsInput.value}`;
  let context =
    "You are a polite AI assistant that has seen every movie ever made and remember them fully. Please provide a short quote. After the quote with - before, write which charachter said the qoute and then add one appropriate emoji next to the name. Make sure to follow the user instructions an don't add more than one emoji.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteContainerElement = document.querySelector(".quote-container");
  quoteContainerElement.classList.remove("hidden");

  let quoteElement = document.querySelector("#quote");

  quoteElement.innerHTML = `<div class="blink">Generating a quote from ${instructionsInput.value}, please wait..🎬</div>`;
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
