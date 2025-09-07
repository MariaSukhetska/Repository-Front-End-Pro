/*const orders = [
    { user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }] },
    { user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }, { name: "SSD 1TB", price: 150 }] },
    { user: "Bob", items: [{ name: "Wireless Keyboard", price: 80 }] },
    { user: "Charlie", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }] },
    { user: "David", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }, { name: "SSD 1TB", price: 150 }] },
    { user: "Emma", items: [{ name: "Wireless Keyboard", price: 80 }] },
    { user: "Frank", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }] },
    { user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }, { name: "SSD 1TB", price: 150 }] },
    { user: "Hannah", items: [{ name: "Wireless Keyboard", price: 80 }] },
    { user: "Ian", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }] },
    { user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }, { name: "SSD 1TB", price: 150 }] },
    { user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }] },
    { user: "Bob", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }] },
    { user: "Charlie", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }, { name: "SSD 1TB", price: 150 }] },
    { user: "David", items: [{ name: "Wireless Keyboard", price: 80 }] },
    { user: "Emma", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }] },
    { user: "Frank", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }, { name: "SSD 1TB", price: 150 }] },
    { user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }] },
    { user: "Hannah", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }] },
    { user: "Ian", items: [{ name: "Wireless Keyboard", price: 80 }, { name: "Monitor", price: 300 }, { name: "SSD 1TB", price: 150 }] },
    { user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }] },
// ];*/

const orders = [
    { user: "Alice", items: [{ name: "Keyboard", price: 200 }, { name: "Mouse", price: 120 }, { name: "Monitor", price: 300 }] },
    { user: "Bob", items: [{ name: "Laptop", price: 1200 }, { name: "Mouse", price: 100 }, { name: "Headphones", price: 400 }] },
    { user: "Charlie", items: [{ name: "Monitor", price: 300 }] },
    { user: "Alice", items: [{ name: "SSD 1TB", price: 150 }] },
    { user: "Bob", items: [{ name: "Keyboard", price: 200 }] },
];

// 1. Кількість замовлень кожного користувача
const userOrdersCount = orders.reduce((acc, order) => {
    acc[order.user] = (acc[order.user] || 0) + 1;
    return acc;
}, {});
console.log("Завдання 1 (Object):", userOrdersCount);

const userOrdersMap = orders.reduce((map, order) => {
    map.set(order.user, (map.get(order.user) || 0) + 1);
    return map;
}, new Map());
console.log("Завдання 1 (Map):", userOrdersMap);

// 2. Сума замовлень кожного користувача
const userTotals = orders.reduce((acc, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
    acc[order.user] = (acc[order.user] || 0) + orderTotal;
    return acc;
}, {});
console.log("Завдання 2 (Object):", userTotals);

const userTotalsMap = orders.reduce((map, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
    map.set(order.user, (map.get(order.user) || 0) + orderTotal);
    return map;
}, new Map());
console.log("Завдання 2 (Map):", userTotalsMap);

// 3. Унікальні товари
const uniqueProducts = new Set(
    orders.flatMap(order => order.items.map(item => item.name))
);
console.log("Завдання 3 (Set):", uniqueProducts);

// 4. Хто витратив більше за всіх?
const richestUser = Object.entries(userTotals).reduce((max, [user, total]) => {
    return total > max.total ? { user, total } : max;
}, { user: null, total: 0 });
console.log(`Завдання 4: ${richestUser.user} витратив більше за всіх: $${richestUser.total}`);