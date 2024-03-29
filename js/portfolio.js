document.addEventListener("DOMContentLoaded", function () {
    // Define an array of project image paths
    const projectImages = [
        "images/vendored.png",
        "images/project2.jpg",
        "images/project3.jpg"
    ];

    // Define an array of project video URLs corresponding to each project image
    const projectVideos = [
        "videos/vendored.mp4",
        "https://www.youtube.com/watch?v=Vn4m1dWy4n8&ab_channel=xQc",
        "https://www.youtube.com/watch?v=j3y55VIAdX8&ab_channel=xQcReacts"
    ];

    let currentIndex = 0;
    let isVideoPlaying = false;

    // Function to display the current project with a fade transition
    function displayProject(index) {
        const projectImagePath = projectImages[index];
        const projectContainer = document.getElementById("project-container");

        // Fade out the project container
        projectContainer.style.opacity = 0;

        // Wait for the fade out transition to complete before updating the content
        setTimeout(function () {
            // Update the project container background image
            projectContainer.style.backgroundImage = `url('${projectImagePath}')`;

            // Fade in the project container
            projectContainer.style.opacity = 1;
        }, 500); // Adjust the timeout to match the transition duration
    }

    // Function to navigate to the previous project
    function goToPrevProject() {
        if (isVideoPlaying) {
            closeVideoPlayer();
        }
        currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
        displayProject(currentIndex);
    }

    // Function to navigate to the next project
    function goToNextProject() {
        if (isVideoPlaying) {
            closeVideoPlayer();
        }
        currentIndex = (currentIndex + 1) % projectImages.length;
        displayProject(currentIndex);
    }

    // Add event listeners to the navigation buttons
    document.getElementById("prev-button").addEventListener("click", goToPrevProject);
    document.getElementById("next-button").addEventListener("click", goToNextProject);

    // Display the initial project
    displayProject(currentIndex);

    // Function to display the video player with the selected project video
    function displayProjectVideo(index) {
        const videoPlayer = document.getElementById("video-player");
        const videoUrl = projectVideos[index];

        // Set the video source
        videoPlayer.src = videoUrl;

        // Play the video
        videoPlayer.play();
        isVideoPlaying = true;

        // Show the video player container
        document.getElementById("video-player-container").style.display = "block";

        // Show the overlay
        document.getElementById("overlay").style.display = "block";
    }

    // Get the project container element
    const projectContainer = document.getElementById("project-container");

    // Add event listener to the project container to display the video when clicked
    projectContainer.addEventListener("click", function () {
        if (!isVideoPlaying) {
            // Assuming currentIndex holds the index of the currently displayed project
            displayProjectVideo(currentIndex);
        }
    });

    // Function to close the video player
    function closeVideoPlayer() {
        const videoPlayer = document.getElementById("video-player");
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        isVideoPlaying = false;
        document.getElementById("video-player-container").style.display = "none";
        // Hide the overlay
        document.getElementById("overlay").style.display = "none";
    }

    // Add event listener to the close button
    document.getElementById("close-button").addEventListener("click", closeVideoPlayer);
});
