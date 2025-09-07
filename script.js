// Get the video element from our HTML
const webcam = document.getElementById('webcam');
const statusDiv = document.getElementById('status');

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
        statusDiv.textContent = "Webcam is active! You're good to go.";
    } catch (error) {
        // If there's an error (e.g., no camera found or permission denied)
        console.error("Error accessing the webcam:", error);
        statusDiv.textContent = "Error: Could not access the webcam.";
    }
}

// Start the webcam as soon as the page loads
window.addEventListener('load', startWebcam);
