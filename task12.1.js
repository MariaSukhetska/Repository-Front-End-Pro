let savedLink = null;

const setLinkBtn = document.getElementById("setLinkBtn");
const goLinkBtn = document.getElementById("goLinkBtn");

setLinkBtn.addEventListener("click", () => {
    const userInput = prompt("Введіть посилання (URL):");
    if (userInput) {
        savedLink = userInput.trim();
        alert(`Посилання збережено: ${savedLink}`);
    } else {
        alert("Посилання не введене!");
    }
});

goLinkBtn.addEventListener("click", () => {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert("Спочатку введіть посилання!");
    }
});