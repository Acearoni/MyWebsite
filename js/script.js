document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.querySelector(".cursor");
    var currentX = 0;
    var currentY = 0;
    var targetX = 0;
    var targetY = 0;
    var easing = 0.04; // Adjust the easing value as needed
    var cursorSize = 10; // Adjust the size of the cursor ball

    function moveCursor() {
        var diffX = targetX - currentX;
        var diffY = targetY - currentY;

        currentX += diffX * easing;
        currentY += diffY * easing;

        cursor.style.left = (currentX - cursorSize / 2) + "px"; // Adjust the position to center the cursor ball
        cursor.style.top = (currentY - cursorSize / 2) + "px"; // Adjust the position to center the cursor ball

        requestAnimationFrame(moveCursor);
    }

    document.addEventListener("mousemove", function (event) {
        targetX = event.clientX;
        targetY = event.clientY;

        if (!requestId) {
            moveCursor();
        }
    });

    var requestId = requestAnimationFrame(moveCursor);

    // Add active class to HOME link when on index.html or /
    if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
        document.querySelector('.home-link').classList.add('active');
        console.log("Active Window INDEX");
    }

    // Get the current URL path and remove the leading slash
    var path = window.location.pathname.substr(1);
    // Adjust path for GitHub Pages deployment
    if (window.location.hostname == 'acearoni.github.io') {
        path = '/MyWebsite/' + path;
    }

    // Loop through all nav-box elements
    document.querySelectorAll(".nav-box a").forEach(function (element) {
        // Get the href attribute value
        var href = element.getAttribute("href").substr(1);

        // Check if the href matches the current URL path
        if (href == path) {
            // Add the active class to the parent nav-box element
            element.parentElement.classList.add("active");
        }
    });

    // Check if on aboutme.html page and add active class to About Me link
    if (path == 'aboutme.html') {
        document.querySelector('.nav-box a[href="aboutme.html"]').parentElement.classList.add('active');
        document.querySelector('.container').style.backgroundImage = "url('https://acearoni.github.io/MyWebsite/images/AboutMe.png')";
        console.log(path);
    }

    // Check if on portfolio.html page and add active class to Portfolio link
    if (path == 'portfolio.html') {
        document.querySelector('.portfolio-link').classList.add('active')
        document.querySelector('.container').style.backgroundImage = "url('https://acearoni.github.io/MyWebsite/images/folio.png')";
    }

    if (path == 'contact.html') {
        document.querySelector('.contact-link').classList.add('active')
        document.querySelector('.container').style.backgroundImage = "url('https://acearoni.github.io/MyWebsite/images/contact.png')";
    }

    // Add event listeners to handle image swap on hover for email images
    var emailImg = document.getElementById('email-img');
    emailImg.addEventListener('mouseover', function () {
        emailImg.src = './images/emailAfter.png';
    });
    emailImg.addEventListener('mouseout', function () {
        emailImg.src = './images/emailBefore.png';
    });

    // Add event listeners to handle image swap on hover for soon images
    var soonImg = document.getElementById('soon-img');
    soonImg.addEventListener('mouseover', function () {
        soonImg.src = './images/soonAfter.png';
    });
    soonImg.addEventListener('mouseout', function () {
        soonImg.src = './images/soonBefore.png';
    });

    var discordImg = document.getElementById('discord-img');
    discordImg.addEventListener('mouseover', function () {
        discordImg.src = './images/discordAfter.png';
    });
    discordImg.addEventListener('mouseout', function () {
        discordImg.src = './images/discordBefore.png';
    });
});
