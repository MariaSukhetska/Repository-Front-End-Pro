const phoneBook = {
    contacts: [
        { name: "Anna", phone: "123-456-789", email: "anna@example.com" },
        { name: "Oleh", phone: "987-654-321", email: "oleh@example.com" }
    ],

    findContact(name) {
        return this.contacts.find(contact => contact.name === name) || null;
    },

    addContact(name, phone, email) {
        this.contacts.push({ name, phone, email });
        console.log(`Contact ${name} added successfully!`);
    }
};


console.log("Пошук Анни:");
console.log(phoneBook.findContact("Anna"));

console.log("Додаємо новий контакт:");
phoneBook.addContact("Iryna", "555-111-222", "iryna@example.com");

console.log("Всі контакти:");
console.log(phoneBook.contacts);