document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('BackgroundCanvas');
    const ctx = canvas.getContext('2d');
  
  canvas.width= window.innerWidth;
canvas.height = window.innerHeight;
  
  console.log('Window inner width:', window.innerWidth);
    console.log('Window inner height:', window.innerHeight);

    let time = 0.05;
    const paragraph = "is a week-long documentation and is a reflection on hyperconsumerism in the digital age and visualizes our loss of time. It explores both passive and active notifications visually. This website mimics how digital notifications interrupt our lives and influence our behavior. The timing of each ad reflects real-life documentation.";
    let frequency = 100;
    let amplitude = 1400;
  
  const fontSize = 24;
    const fontFamily = 'GTAlpinaTypewriter';
    const textColor = 'blue';

    function drawControlledSineWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const depth = 400; // Depth of the 3D effect
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;

        for (let x = 0; x < canvas.width; x += fontSize) {
            const y = amplitude * Math.sin(frequency * x + time) + canvas.height / 2;
            const z = depth * Math.sin(frequency * x + time); // Add depth variation

            const paragraphIndex = Math.floor((y - z) / amplitude * paragraphs.length);
            const paragraphs = paragraph.charAt(paragraphIndex);

            ctx.fillText(paragraph, x, y);
        }

        time += 0.02; // Adjust the speed of the animation
    }

    function handleMouseMove(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Update frequency based on mouse horizontal position
        frequency = (mouseX / canvas.width) * 0.5;

        // Update amplitude based on mouse movement speed
        const movementSpeed = Math.abs(event.movementX) + Math.abs(event.movementY);
        time = movementSpeed;

        drawControlledSineWave();
    }

    // Add event listener for mousemove
    document.addEventListener('mousemove', handleMouseMove);

    // Initial drawing
    drawControlledSineWave();

    // Start default animation
    setInterval(drawControlledSineWave, 30); // Adjust the interval as needed
});
