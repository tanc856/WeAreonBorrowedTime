document.addEventListener('DOMContentLoaded', function() {
            const toggleButton = document.querySelector('.toggle-description');
            const descriptionContainer = document.querySelector('.description-container');

            toggleButton.addEventListener('click', function() {
                if (descriptionContainer.style.display === 'none') {
                    descriptionContainer.style.display = 'block';
                    toggleButton.textContent = 'Click here to hide the description';
                } else {
                    descriptionContainer.style.display = 'none';
                    toggleButton.textContent = 'Click here to read the description';
                }
            });
        });