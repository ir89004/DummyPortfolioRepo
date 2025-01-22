document.addEventListener("DOMContentLoaded", () => {
    const memoryCards = document.querySelectorAll(".memory-card");
    const titleElement = document.querySelector(".memory-card-title");

    memoryCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            titleElement.textContent = card.getAttribute("data-text");
        });

        card.addEventListener("mouseleave", () => {
            titleElement.textContent = "Hover over a Memory Card";
        });

        card.addEventListener("click", () => {
            const link = card.getAttribute("data-link");
            window.location.href = link;
        });
    });

    // Allow "Enter" key to select a card & "Escape" key to return to the intro
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const selectedCard = document.querySelector(".memory-card:hover");
            if (selectedCard) {
                const link = selectedCard.getAttribute("data-link");
                window.location.href = link;
            }
        } else if (event.key === "Escape") {
            console.log("Escape pressed. Returning to intro.");
            window.location.href = "src\index.html"; // Make sure this matches your actual intro page filename
        }
    });
});
