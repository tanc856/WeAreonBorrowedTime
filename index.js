document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('BackgroundCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    const paragraph = "is a week-long documentation and is a reflection on hyperconsumerism in the digital age and visualizes our loss of time. It explores both passive and active notifications visually. This website mimics how digital notifications interrupt our lives and influence our behavior. The timing of each ad reflects real-life documentation.";

    const fontSize = 24;
    const fontFamily = '"plantin", sans-serif';
    const textColor = 'blue';

    function drawParagraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;
      
      let x = canvas.width - (time % (canvas.width + ctx.measureText(paragraph).width));
        let y = fontSize;
      
      // Draw the paragraph line by line
        let linesDrawn = 0;
        while (y < canvas.height) {
            ctx.fillText(paragraph, x, y);
            y += fontSize * 1.5; // Adjust line spacing as needed
            linesDrawn++;
        }

        // Increment time for continuous animation
        time += 1; // Adjust the speed of the animation

        // Reset time and clear the canvas when all lines are drawn
        if (linesDrawn * (fontSize * 1.5) >= canvas.height) {
            time = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
  
  // Initial drawing
    drawParagraph();

    // Start default animation
    setInterval(drawParagraph, 30); // Adjust the interval as needed

});
