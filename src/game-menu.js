document.addEventListener("DOMContentLoaded", () => {
    const gameIcons = document.querySelectorAll(".game-icon");
    const titleElement = document.querySelector(".dynamic-title");

    gameIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            titleElement.textContent = icon.getAttribute("data-text");
        });

        icon.addEventListener("mouseleave", () => {
            titleElement.textContent = "Hover over an icon";
        });

        icon.addEventListener("click", () => {
            const link = icon.getAttribute("data-link");
            window.open(link, "_blank"); // ✅ Opens GitHub repo in a new tab
        });
    });

    // Allow "Enter" key to open the GitHub repo in a new tab & "Escape" key to return to the memory card menu
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const selectedIcon = document.querySelector(".game-icon:hover");
            if (selectedIcon) {
                const link = selectedIcon.getAttribute("data-link");
                window.open(link, "_blank"); // ✅ Opens GitHub repo in a new tab
            }
        } else if (event.key === "Escape") {
            console.log("Escape pressed. Returning to memory menu.");
            window.location.href = "memory-menu.html";
        }
    });
});
