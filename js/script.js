document.addEventListener("DOMContentLoaded", function() {
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

    document.addEventListener("mousemove", function(event) {
        targetX = event.clientX;
        targetY = event.clientY;

        if (!requestId) {
            moveCursor();
        }
    });

    var requestId = requestAnimationFrame(moveCursor);
});
