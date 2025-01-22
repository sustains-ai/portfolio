document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully");

    // Interactive hover effect for skill items
    document.querySelectorAll(".skill-item").forEach(item => {
        item.addEventListener("mouseover", function() {
            item.style.backgroundColor = "#283F3B";
            item.style.color = "#ffffff";
        });
        item.addEventListener("mouseout", function() {
            item.style.backgroundColor = "#659B5E";
            item.style.color = "#ffffff";
        });
    });

//     // Click-to-shake effect on project cards
//     const projectCards = document.querySelectorAll("#projects .card");
//     if (projectCards.length > 0) {
//         projectCards.forEach(card => {
//             card.addEventListener("click", function() {
//                 card.classList.add("shake");
//                 setTimeout(() => card.classList.remove("shake"), 500);
//             });
//         });
//     }
//
    // Tooltip Initialization
    if (typeof $ !== "undefined") {
        $('[data-toggle="tooltip"]').tooltip();
    } else {
        console.warn("jQuery is not loaded. Tooltips will not work.");
    }
});
