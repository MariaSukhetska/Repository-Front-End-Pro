const textBlock = document.getElementById("textBlock");
const button = document.getElementById("toggleBtn");

let isBlack = true;

button.addEventListener("click", () => {
    if (isBlack) {
        textBlock.style.color = "green";
    } else {
        textBlock.style.color = "black";
    }
    isBlack = !isBlack;
});