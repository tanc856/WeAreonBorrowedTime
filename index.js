document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('BackgroundCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log('Window inner width:', window.innerWidth);
    console.log('Window inner height:', window.innerHeight);

    let time = 0;
    const paragraph = "is a week-long documentation and is a reflection on hyperconsumerism in the digital age and visualizes our loss of time. It explores both passive and active notifications visually. This website mimics how digital notifications interrupt our lives and influence our behavior. The timing of each ad reflects real-life documentation.";

    const fontSize = 24;
    const fontFamily = 'Arial';
    const textColor = 'blue';

    function drawParagraph() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;

        // Calculate the position for the paragraph
        const x = canvas.width - (time % (canvas.width + ctx.measureText(paragraph).width));

        // Draw the paragraph at the calculated position
        ctx.fillText(paragraph, x, canvas.height / 2);

        // Increment time for continuous animation
        time += 1; // Adjust the speed of the animation
    }

    // Initial drawing
    drawParagraph();

    // Start default animation
    setInterval(drawParagraph, 30); // Adjust the interval as needed
});
