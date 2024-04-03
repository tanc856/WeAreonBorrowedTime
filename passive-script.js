document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  const clicker = document.querySelector('.clicker');
  const flexContainer = document.querySelector('.flex-container');
  const clickerDesc = document.querySelector('.clicker-desc');

  clicker.addEventListener('mouseenter', () => {
    flexContainer.classList.add('hovered');
    clickerDesc.style.display = 'block';
  });

  clicker.addEventListener('mouseleave', () => {
    flexContainer.classList.remove('hovered');
    clickerDesc.style.display = 'none';
  });

  const scrollSpeed = 0.3; //speed of automatic page scrolling
  const replacementWords = ["Yakult 25 25", "8 platforms to find entry level creative", "jobs Looking for the new role to start the year? we've got just the thing for you.", , "threads", "blogto", "RUN TO TARGET", "suggested for you", "want long want strong equinox", "Afterlife Paris", "goldman sachs ad", "Our new design is live!", "Postage stamp design", "Want vigor, want it all", "Suggested for you", "A must after have dinner", "Tarifa de envio", "Get your free year in strava",  "BPN nutrition we fuel for performance", "My roman empire is how I join the barebell community", "lemon meringue bars nyt cooking", "Evolve you new year's promo, 30% off", "Polar usa amtrak. $1 join fee"];

  let replacementCounter = 0;
  const maxReplacements = 40; // Maximum number of replacements

  function autoScroll() {
    document.body.scrollTop += scrollSpeed;
    document.documentElement.scrollTop += scrollSpeed;

    setTimeout(autoScroll, 100);
  }

  function replaceWords() {
    const columns = document.querySelectorAll(".column");

    columns.forEach((column) => {
      const words = column.textContent.split(" ");

      // Check if replacement should occur (randomly)
      if (Math.random() < 0.2 && replacementCounter < maxReplacements) {
        // Adjust the probability as needed
        // Replace a random word with the replacement words
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord =
          replacementWords[Math.floor(Math.random() * replacementWords.length)];
        words[randomIndex] = `<em class="highlight">${randomWord}</em>`;

        // Update the column's content
        column.innerHTML = words.join(" ");

        replacementCounter++; // Increment replacement counter
      }
    });

    // Call the function recursively if the replacement counter is less than the maximum
    if (replacementCounter < maxReplacements) {
      setTimeout(replaceWords, 800); // Adjust the interval as needed, the bigger the slower
    }
  }

  autoScroll();
  replaceWords();
});
