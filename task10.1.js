const user = {
    name: "Anton",
    age: 27,
    location: "Kyiv",
    email: "anton@example.com",

    // метод для отримання та відображення даних
    getInfo: function () {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Location: ${this.location}`);
        console.log(`Email: ${this.email}`);
    }
};

// Виклик методу
user.getInfo();