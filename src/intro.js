import "./intro.scss";

// Generate the Cubes
document.addEventListener("DOMContentLoaded", () => {
    const innerDiv = document.querySelector('.inner');

    for (let i = 0; i < 112; i++) {
        let boxContainer = document.createElement('div');
        boxContainer.className = 'box-container';
        let box = document.createElement('div');
        box.className = 'box';
        
        // Create cube faces (ensuring 3D effect)
        ["top", "bottom", "left", "right"].forEach(face => {
            let faceDiv = document.createElement('div');
            faceDiv.className = face;
            box.appendChild(faceDiv);
        });

        boxContainer.appendChild(box);
        innerDiv.appendChild(boxContainer);
    }

    // Ensure PS2 Audio Plays on First Click
    document.addEventListener("click", function () {
        const audio = document.getElementById("ps2-audio");
        if (audio && audio.paused) {  
            audio.play().catch(error => console.error("Error playing audio:", error));
        }
    }, { once: true });

    // Redirect to Memory Card Menu after animation
    setTimeout(() => {
        window.location.href = "/memory-menu.html";
    }, 16000); // 16 seconds (match animation duration)
});
