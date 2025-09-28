const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    ['name', 'message', 'phone', 'email'].forEach(field =>
        document.getElementById(`err-${field}`).textContent = ''
    );

    let valid = true;

    const nameVal = nameInput.value.trim();
    if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{2,}$/.test(nameVal)) {
        document.getElementById('err-name').textContent = 'Введіть ваше ім’я (мін. 2 символи, тільки букви).';
        valid = false;
    }

    const msgVal = messageInput.value.trim();
    if (msgVal.length < 5) {
        document.getElementById('err-message').textContent = 'Повідомлення має містити мінімум 5 символів.';
        valid = false;
    }
    const phoneVal = phoneInput.value.trim();
    if (!/^\+380\d{9}$/.test(phoneVal)) {
        document.getElementById('err-phone').textContent = 'Телефон має бути у форматі +380XXXXXXXXX.';
        valid = false;
    }

    const emailVal = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        document.getElementById('err-email').textContent = 'Введіть коректний email.';
        valid = false;
    }

    if (valid) {
        console.log('Дані користувача:', {
            name: nameVal,
            message: msgVal,
            phone: phoneVal,
            email: emailVal,
        });
        alert('Повідомлення надіслано успішно!');
        form.reset();
    }
});
