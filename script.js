const scrollSpeed = 0.5; //speed of automatic page scrolling
        const replacementWords = ["Free", "Sale!", "New items in!"];

        function autoScroll() {
            document.body.scrollTop += scrollSpeed;
            document.documentElement.scrollTop += scrollSpeed;

            setTimeout(autoScroll, 100);
        }

        function replaceWords() {
            const columns = document.querySelectorAll('.column');

            columns.forEach(column => {
                const words = column.innerHTML.split(' ');

                // Check if replacement should occur (randomly)
                if (Math.random() < 0.2) { // Adjust the probability as needed
                    // Replace a random word with the replacement words
                    const randomIndex = Math.floor(Math.random() * words.length);
                    const randomWord = replacementWords[Math.floor(Math.random() * replacementWords.length)];
                    words[randomIndex] = `<span class="highlight">${randomWord}</span>`;

                    // Update the column's content
                    column.innerHTML = words.join(' ');

                    // Restore original words after a short delay
                    setTimeout(() => {
                        column.innerHTML = words.join(' ');
                    }, 500); // Adjust the delay time as needed
                }
            });

            // Call the function recursively for continuous word randomization
            setTimeout(replaceWords, 700); // Adjust the interval as needed, the bigger the slower
        }

        window.onload = function () {
            autoScroll();
            replaceWords();
        };