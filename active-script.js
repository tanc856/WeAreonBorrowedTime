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
  const replacementWords = ["New Arrivals", "Sale Ends Soon!", "Freebie Frenzy", "Your Exclusive Offer Awaits", "New Markdowns Added", "Don't Miss Out", "Act Fast!"];

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
        words[randomIndex] = `<span class="highlight">${randomWord}</span>`;

        // Update the column's content
        column.innerHTML = words.join(" ");

        replacementCounter++; // Increment replacement counter
      }
    });

    // Call the function recursively if the replacement counter is less than the maximum
    if (replacementCounter < maxReplacements) {
      setTimeout(replaceWords, 1000); // Adjust the interval as needed, the bigger the slower
    }
  }

  autoScroll();
  replaceWords();
});
