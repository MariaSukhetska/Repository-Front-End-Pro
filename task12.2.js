const container = document.getElementById('buttons-container');

container.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        alert(`Клікнуто на кнопці: ${event.target.textContent}`);
        //console.log(`Клікнуто на кнопці: ${event.target.textContent}`);
    }
});