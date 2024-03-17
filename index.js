document.querySelector('.clicker').addEventListener('hover', function() {
    document.querySelector('.title').style.display = 'none';
});

document.addEventListener('mousemove', function(event) { // Added 'event' parameter
    const container = document.querySelector('.background-container');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const containerRect = container.getBoundingClientRect();
    const backgroundX = ((mouseX - containerRect.left) / containerRect.width) * 100;
    const backgroundY = ((mouseY - containerRect.top) / containerRect.height) * 100;
    container.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
});

function toggleElements(event) { // Added 'event' parameter
    const windowWidth = window.innerWidth;
    const cursorX = event.clientX;
    const threshold = 400; // Adjust this value as needed

    // Check if cursor is on the left side of the canvas
    if (cursorX <= threshold) {
        document.querySelector('.passive').style.display = 'block';
    } else {
        document.querySelector('.passive').style.display = 'none';
    }

    // Check if cursor is on the right side of the canvas
    if (cursorX >= (windowWidth - threshold)) {
        document.querySelector('.active').style.display = 'block';
    } else {
        document.querySelector('.active').style.display = 'none';
    }
}

document.addEventListener('mousemove', toggleElements);
