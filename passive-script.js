document.addEventListener("DOMContentLoaded", function() {
  const columns = document.querySelectorAll(".column");
  const replacementWords = ["New Arrivals", "Sale Ends Soon!", "Freebie Frenzy", "Your Exclusive Offer Awaits", "New Markdowns Added", "Don't Miss Out", "Act Fast!"];
  let currentIndex = 0;
  let replacementCounter = 0;
  const maxReplacements = 10; // Maximum number of replacements

  function replaceWords(column) {
  const words = column.textContent.split(" ");
  let replacementsMade = 0;

  // Check if replacement should occur (randomly)
  words.forEach((word, index) => {
    if (Math.random() < 0.5 && replacementsMade < maxReplacements) {
      // Replace a random word with the replacement words
      const randomWord =
        replacementWords[Math.floor(Math.random() * replacementWords.length)];
      words[index] = `<span class="highlight">${randomWord}</span>`;
      replacementsMade++; // Increment replacements counter
    }
  });

  // Update the column's content
  column.innerHTML = words.join(" ");
}

  columns.forEach((column, index) => {
    column.style.opacity = 0; // Initially hide paragraphs
    column.dataset.index = index; // Set data-index attribute to keep track of the index
    column.addEventListener("click", () => {
      if (column.style.opacity === "1") {
        replaceWords(column);
      }
    });
  });

  function showNextParagraph() {
    if (currentIndex < columns.length) {
      columns[currentIndex].style.opacity = 1; // Show next paragraph
      currentIndex++;
    }
  }

  window.onload = function () {
    showNextParagraph(); // Show the first paragraph initially
  };

  document.addEventListener("click", showNextParagraph);
});
