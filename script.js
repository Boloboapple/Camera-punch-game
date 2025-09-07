// Get the video element from our HTML
const webcam = document.getElementById('webcam');
const statusDiv = document.getElementById('status');

// Get the character shape elements
const playerCharacter = document.getElementById('player-character');
const opponentCharacter = document.getElementById('opponent-character');

// This function starts the camera feed
async function startWebcam() {
    try {
        // Ask the browser for access to the video camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Put the camera feed into our video element
        webcam.srcObject = stream;

        // Wait for the video to start playing
        await webcam.play();
        console.log("Webcam is active!");
        statusDiv.textContent = "Webcam is active! Click on the screen to punch!";
        
        // Add a click listener to the whole document to test the punch animation
        document.addEventListener('click', animatePunch);

    } catch (error) {
        // If there's an error (e.g., no camera found or permission denied)
        console.error("Error accessing the webcam:", error);
        statusDiv.textContent = "Error: Could not access the webcam. Make sure you allow camera access.";
    }
}

// This function animates the punch
function animatePunch() {
    // Player punch animation
    playerCharacter.style.transition = 'transform 0.2s ease-in-out';
    playerCharacter.style.transform = 'translateX(50px) scaleX(-1)';

    // Opponent flinch animation
    opponentCharacter.style.transition = 'transform 0.2s ease-in-out';
    opponentCharacter.style.transform = 'translateX(20px)';

    // Reset the positions after a short delay
    setTimeout(() => {
        playerCharacter.style.transform = 'translateX(0px) scaleX(-1)';
        opponentCharacter.style.transform = 'translateX(0px)';
    }, 200); // The time in milliseconds (1000ms = 1s)
}

// Start the webcam as soon as the page loads
window.addEventListener('load', startWebcam);
