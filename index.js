 function toggleDescription() {
        var description = document.getElementById("description");
        if (description.style.display === "none") {
          description.style.display = "block";
          document.querySelector('.description-toggle').textContent = "-";
        } else {
          description.style.display = "none";
          document.querySelector('.description-toggle').textContent = "+";
        }
      }