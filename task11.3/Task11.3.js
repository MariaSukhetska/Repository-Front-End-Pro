const img = document.getElementById("randomImage");
const button = document.getElementById("newImageBtn");
const info = document.getElementById("info");
const errorBox = document.getElementById("error");

function showRandomImage() {
    errorBox.textContent = "";
    const number = Math.floor(Math.random() * 9) + 1;
    const src = `images/${number}.jpg`;
    info.textContent = `Пробую завантажити: ${src}`;
    console.log("Loading:", src);

    img.onerror = () => {
        errorBox.textContent = `Помилка завантаження: ${src}. Перевір назву файлу та шлях.`;
        console.error("Image load error:", src);
    };

    img.onload = () => {
        errorBox.textContent = "";
    };

    img.src = src;
}

showRandomImage();

button.addEventListener("click", showRandomImage);