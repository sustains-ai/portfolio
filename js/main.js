// Log a message when the website loads
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully");
});

// Interactive effect for skill items on hover
document.querySelectorAll(".skill-item").forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.backgroundColor = "#3c8d99"; // Changes background color on hover
        item.style.color = "#ffffff"; // Ensures text is visible
    });
    item.addEventListener("mouseout", function() {
        item.style.backgroundColor = "#333"; // Reverts to original color on mouse out
        item.style.color = "#ffffff";
    });
});

// Click-to-shake effect on project cards
document.querySelectorAll("#projects .card").forEach(card => {
    card.addEventListener("click", function() {
        card.classList.add("shake");
        setTimeout(() => card.classList.remove("shake"), 500); // Removes the shake effect after 500ms
    });
});

// Tooltip Initialization for all elements with the `data-toggle="tooltip"` attribute
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
