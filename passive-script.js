document.addEventListener("DOMContentLoaded", function() {
  const columns = document.querySelectorAll(".column");
  const replacementWords = ["Suggested for you", "Special promotional CD term marcus by GoldmanSachs", "Elevate your fitness game this winter plus a free shaker"];
  const maxReplacements = 10; // Maximum number of replacements
let currentIndex = 0;

  function replaceWords(column) {
    const words = column.textContent.split(" ");
    let replacementCounter = 0; // Reset replacement counter for each paragraph

    // Create an array to store the modified words
    const modifiedWords = words.map(word => {
      // Check if replacement should occur (randomly)
      if (Math.random() < 0.1 && replacementCounter < maxReplacements) {
        // Replace a random word with the replacement words
        const randomWord =
          replacementWords[Math.floor(Math.random() * replacementWords.length)];
        replacementCounter++; // Increment replacements counter
        return `<span class="highlight">${randomWord}</span>`;
      } else {
        return word; // Keep the original word
      }
    });

    // Update the column's content
    column.innerHTML = modifiedWords.join(" ");
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
