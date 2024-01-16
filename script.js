const scrollSpeed = 0.6;
        const randomWords = ["Free", "Sale", "New"];

        function autoScroll() {
            document.body.scrollTop += scrollSpeed;
            document.documentElement.scrollTop += scrollSpeed;

            setTimeout(autoScroll, 50);
        }

        function randomizeWords() {
            const columns = document.querySelectorAll('.column');

            columns.forEach(column => {
                const words = column.textContent.split(' ');
                const randomIndex = Math.floor(Math.random() * randomWords.length);
                const randomWord = randomWords[randomIndex];
                const randomWordIndex = Math.floor(Math.random() * words.length);

                words[randomWordIndex] = randomWord;
                column.textContent = words.join(' ');
            });

            setTimeout(randomizeWords, 1000); //speed of word change
        }

        window.onload = function () {
            autoScroll();
            randomizeWords();
        };