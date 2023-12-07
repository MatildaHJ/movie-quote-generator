function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Frankly, my dear, I don't give a damn.",
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
