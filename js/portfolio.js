// Define an array of projects with their information
const projects = [
    { title: "Project 1", description: "Description of project 1", imagePath: "/images/project1.jpg" },
    { title: "Project 2", description: "Description of project 2", imagePath: "/images/project2.jpg" },
    { title: "Project 3", description: "Description of project 3", imagePath: "/images/project3.jpg" }
];

let currentIndex = 0;

// Function to display the current project
function displayProject(index) {
    const project = projects[index];
    document.getElementById("project-image").style.backgroundImage = `url('${project.imagePath}')`;
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
}

// Function to navigate to the previous project
function goToPrevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    displayProject(currentIndex);
}

// Function to navigate to the next project
function goToNextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    displayProject(currentIndex);
}

// Add event listeners to the navigation buttons
document.getElementById("prev-button").addEventListener("click", goToPrevProject);
document.getElementById("next-button").addEventListener("click", goToNextProject);

// Display the initial project
displayProject(currentIndex);
// Function to display the current project with a fade transition
function displayProject(index) {
    const project = projects[index];
    const projectContainer = document.getElementById("project-container");
    
    // Fade out the project container
    projectContainer.style.opacity = 0;
    
    // Wait for the fade out transition to complete before updating the content
    setTimeout(function() {
        // Update the project content
        document.getElementById("project-image").style.backgroundImage = `url('${project.imagePath}')`;
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-description").textContent = project.description;
        
        // Fade in the project container
        projectContainer.style.opacity = 1;
    }, 500); // Adjust the timeout to match the transition duration
}