let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveSum = 0;
let positiveCount = 0;
let positiveProduct = 1;
let min = arr[0];
let minIndex = 0;
let max = arr[0];
let maxIndex = 0;
let negativeCount = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let evenPositiveSum = 0;
let oddPositiveSum = 0;


for (let i = 0; i < arr.length; i++) {
let el = arr[i];

if (el > 0) {
    positiveSum += el;
    positiveCount++;
    positiveProduct *= el;

    if (el % 2 === 0) {
    evenPositiveCount++;
    evenPositiveSum += el;
    } else {
    oddPositiveCount++;
    oddPositiveSum += el;
    }
}
if (el < 0) {
    negativeCount++;
}
if (el < min) {
    min = el;
    minIndex = i;
}
if (el > max) {
    max = el;
    maxIndex = i;
}
}

console.log("Сума додатних елементів:", positiveSum);
console.log("Кількість додатних елементів:", positiveCount);
console.log("Добуток додатних елементів:", positiveProduct);
console.log("Мінімальний елемент:", min, "Індекс:", minIndex);
console.log("Максимальний елемент:", max, "Індекс:", maxIndex);
console.log("Кількість від’ємних елементів:", negativeCount);
console.log("Кількість непарних додатних елементів:", oddPositiveCount);
console.log("Кількість парних додатних елементів:", evenPositiveCount);
console.log("Сума парних додатних елементів:", evenPositiveSum);
console.log("Сума непарних додатних елементів:", oddPositiveSum);

for (let i = 0; i < arr.length; i++) { //Заміна всіх елементів на 0, крім найбільшого
if (i !== maxIndex) {
    arr[i] = 0;
}
}
console.log("Масив після заміни всіх елементів на 0, крім найбільшого:", arr);