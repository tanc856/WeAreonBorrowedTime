document.addEventListener('mousemove', function(e) {
    const container = document.querySelector('.background-container');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const containerRect = container.getBoundingClientRect();
    const backgroundX = ((mouseX - containerRect.left) / containerRect.width) * 100;
    const backgroundY = ((mouseY - containerRect.top) / containerRect.height) * 100;
    container.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
});
