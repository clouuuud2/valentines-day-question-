// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        console.log("Yes button clicked. Flashing rainbow colors...");

        // Flash rainbow colors before displaying card-heart.gif
        flashRainbowColors(() => {
            console.log("Rainbow animation finished. Hiding question and displaying card-heart.gif...");
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCardHeart(); // Show the card-heart.gif
        });
    } else if (option === 'no') {
        console.log("No button clicked. Changing text and increasing Yes button size.");

        // Change "No" button text to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 

        // Increase font size of "Yes" button
        let yesButton = document.getElementById('yes-button');
        let currentFontSize = parseFloat(window.getComputedStyle(yesButton).getPropertyValue('font-size'));
        yesButton.style.fontSize = (currentFontSize * 2) + 'px'; // Double the font size
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and execute a callback afterward
function flashRainbowColors(callback) {
    console.log("Flashing rainbow colors...");
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;

    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200ms

    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        console.log("Rainbow effect completed.");
        if (callback) callback();
    }, 2000); // Stop after 2 seconds
}

// Function to display the initial dog.gif
function displayDog() {
    console.log("Displaying dog.gif...");
    let imageContainer = document.getElementById('image-container');

    if (!imageContainer) {
        console.error("Error: 'image-container' not found in the document.");
        return;
    }

    let dogImage = new Image();
    dogImage.src = './dog.gif';  // Adjust path if needed
    dogImage.alt = 'Dog';

    dogImage.onload = () => {
        imageContainer.appendChild(dogImage);
        console.log("dog.gif successfully loaded.");
    };

    dogImage.onerror = () => {
        console.error("Error loading dog.gif. Check the file path.");
    };
}

// Function to display the card-heart.gif
function displayCardHeart() {
    console.log("Attempting to display card-heart.gif...");
    let imageContainer = document.getElementById('image-container');

    if (!imageContainer) {
        console.error("Error: 'image-container' not found in the document.");
        return;
    }

    // Use a short delay before clearing and replacing the image
    setTimeout(() => {
        imageContainer.innerHTML = ''; // Clear existing content
        let cardHeartImage = new Image();
        cardHeartImage.src = './card-heart.gif'; // Adjust path if needed
        cardHeartImage.alt = 'Card Heart';

        cardHeartImage.onload = () => {
            imageContainer.appendChild(cardHeartImage);
            document.getElementById('options').style.display = 'none'; // Hide options
            console.log("card-heart.gif successfully loaded.");
        };

        cardHeartImage.onerror = () => {
            console.error("Error loading card-heart.gif. Check the file path.");
        };
    }, 500); // Short delay (0.5s) before clearing the container
}

// Display the initial dog.gif when the page loads
displayDog();
