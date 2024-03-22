document.addEventListener("DOMContentLoaded", function() {
  const columns = document.querySelectorAll(".column");
  
  columns.forEach((column, index) => {
    column.style.opacity = 0; // Initially hide paragraphs
    column.dataset.index = index; // Set data-index attribute to keep track of the index
  });

  let currentIndex = 0;

  function showNextParagraph() {
    if (currentIndex < columns.length) {
      columns[currentIndex].style.opacity = 1; // Show next paragraph
      currentIndex++;
    }
  }

  document.addEventListener("click", showNextParagraph);
});
