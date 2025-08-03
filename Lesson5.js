/*let a = "";
for (let i = 10; i <= 20; i++) {
    a += i;
    if (i < 20) {
        a += ", ";
    }
}
console.log(a);

let result = "";
for (let i = 10; i <= 20; i++) {
    result += i * i;
    if (i < 20) {
        result += ", ";
    }
}
console.log(result);

let result = "";
for (let i = 1; i <= 10; i++) {
    result += `${i}*7=${i * 7}`;
    if (i < 10) {
        result += "; ";
    }
}
console.log(result);

let sum = 0;
for (let i = 1; i <=15; i++) {
sum += i;
}
console.log (sum);

let result = 1;
for (let i = 15; i <=35; i++) {
    result *=i;
}
console.log (result);

let sum = 0;
for(let i = 1; i <=500; i++) {
    sum +=i; 
}
console.log (sum); //вивела суму ддя самоперевірки
let count = 500 ; //всього чисел
let number = sum / count;
console.log (number);

let sum = 0;
for ( let i = 30; i <=80; i++){
    if (i % 2===0) {
    sum +=i;
    }
}
console.log (sum);

let result = ``;
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        result += i + ` `;
    }
}
    console.log (result);

let number = parseInt(prompt("Enter a number (>0):"));
if (isNaN(number) || number <= 0) {
console.log("Incorrect number!");
} else {
console.log("Divisors of a number " + number + ":");
let evenCount = 0;
let evenSum = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
    console.log(i);
    if (i % 2 === 0) {
        evenCount++;
        evenSum += i;
    }
    }
}
console.log("Number of even divisors: " + evenCount);
console.log("Sum of even divisors: " + evenSum);
}*/

for (let i = 1; i <= 10; i++) {
let row = '';
for (let j = 1; j <= 10; j++) {
    row += (i * j) + ' ';
}
console.log(row);
}


