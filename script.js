document.addEventListener('DOMContentLoaded', () => {
    let coins = 2000; // Starting coins
    const betCost = 25; // Cost per prediction

    // Get references to HTML elements
    const coinsDisplay = document.getElementById('coins');
    const makePredictionBtn = document.getElementById('makePrediction');
    const predictionResult = document.getElementById('predictionResult');

    // Set initial coin display
    coinsDisplay.textContent = coins;

    // Function to update the displayed coin balance
    function updateCoinsDisplay() {
        coinsDisplay.textContent = coins;
    }

    // Function to enable/disable the PREDICT button based on coin balance
    function updateButtonState() {
        if (coins < betCost) {
            makePredictionBtn.disabled = true; // Disable if not enough coins
            predictionResult.textContent = "Coins Finished! Game Over.";
            predictionResult.className = 'result-text result-finished'; // Apply finished style
        } else {
            makePredictionBtn.disabled = false; // Enable if enough coins
        }
    }

    // Event listener for the PREDICT button click
    makePredictionBtn.addEventListener('click', () => {
        if (coins >= betCost) {
            coins -= betCost; // Deduct coins
            updateCoinsDisplay(); // Update display

            // Generate a random number (1 to 100)
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            let resultText;
            let resultClass;

            // Determine if it's "BIG" or "SMALL" (50/50 chance)
            if (randomNumber <= 50) {
                resultText = `It's SMALL! (Number: ${randomNumber})`;
                resultClass = 'result-text result-lose'; // Using 'lose' style for 'Small' result
            } else {
                resultText = `It's BIG! (Number: ${randomNumber})`;
                resultClass = 'result-text result-win'; // Using 'win' style for 'Big' result
            }
            
            // Display the result
            predictionResult.textContent = resultText;
            predictionResult.className = resultClass; // Apply corresponding styling

        }
        updateButtonState(); // Check coin balance and update button state after prediction
    });

    // Initial check when the page loads to set the button state
    updateButtonState();
});
