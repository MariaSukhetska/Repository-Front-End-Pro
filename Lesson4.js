/*1
let a = parseInt(prompt('Enter first number:'));
let b = parseInt(prompt('Enter second number:'));
if (a > b) {
    console.log('a bigger than b');
}
else if (a < b) {
    console.log ('a less than b');
} else {
    console.log ('a and b are equals');
}*/


/*2
let km = parseInt(prompt('Enter number in km:'));
let feet = parseInt(prompt('Enter number in feet:'));
let kmNumber = km * 1000;
let feetNumber = feet * 0.305;
if (kmNumber < feetNumber) {
    console.log ('Number in km is less');
} else if (kmNumber > feetNumber) {
    console.log('Number in feet is less');
} else {
    console.log('Number are equals');
}*/


/*3
let a = parseInt(prompt('Enter number a:'));
let b = parseInt(prompt('Enter number b:'));
if (b % a ===0) {
    console.log('a is divisor of b');
} else {
    console.log('a is not divisor of b');
}
if (a > b) {
    if (a % b ===0) {
        console.log('b is divisor of a');
    } else {
        console.log('b is not divisor of a');
    }
}*/


/*4
let a = parseInt(prompt('Enter number a:'));
let lastDigit = a % 10;
console.log('Last digit of number:', lastDigit);
if(a % 2 ===0) {
    console.log('Last digit is even.');
} else {
    console.log('Last digit is odd');
}*/


/*5
let num = parseInt(prompt('Enter a 2-digit number:'));
if (num >= 10 && num <= 99) {
    let firstDigit = Math.floor(num / 10);
    let secondDigit = num % 10;

    console.log('First digit:', firstDigit);
    console.log('Second digit:', secondDigit);
    if (firstDigit > secondDigit) {
        console.log('The first digit is bigger.');
    } else if (secondDigit > firstDigit) {
        console.log('The second digit is less.');
    } else {
        console.log('Both digits are equal.');
    }
} else {
    console.log('Please enter a valid 2-digit number.');
}*/

/*6
let num = parseInt(prompt('Enter a 3-digit number:'));
if (num >= 100 && num <= 999) {
    let firstDigit = Math.floor(num / 100);
    let secondDigit = Math.floor((num % 100) / 10);
    let thirdDigit = num % 10;
    console.log('Digits:', firstDigit, secondDigit, thirdDigit);

    let sum = firstDigit + secondDigit + thirdDigit;
    let product = firstDigit * secondDigit * thirdDigit;

    // 1. Визначити, чи є сума його цифр парною
    if (sum % 2 === 0) {
        console.log('The sum of the digits is even.');
    } else {
        console.log('The sum of the digits is odd.');
    }

    // 2. Визначити, чи кратна сума його цифр п’яти
    if (sum % 5 === 0) {
        console.log('The sum of the digits is divisible by 5.');
    } else {
        console.log('The sum of the digits is NOT divisible by 5.');
    }

    // 3. Визначити, чи є добуток його цифр більшим за 100
    if (product > 100) {
        console.log('The product of the digits is greater than 100.');
    } else {
        console.log('The product of the digits is not greater than 100.');
    }

    // 4. Чи вірно, що всі його цифри однакові?
    if (firstDigit === secondDigit && secondDigit === thirdDigit) {
        console.log('All digits are the same.');
    } else {
        console.log('Not all digits are the same.');
    }

    // 5. Чи є серед його цифр однакові?
    if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
        console.log('Some digits are the same.');
    } else {
        console.log('All digits are different.');
    }

} else {
    console.log('Please enter a correct 3-digit number.');
}*/

/*7
let num = parseInt(prompt('Enter a 6-digit number:'));

if (num >= 100000 && num <= 999999) {
    let digit1 = Math.floor(num / 100000) % 10;
    let digit2 = Math.floor(num / 10000) % 10;
    let digit3 = Math.floor(num / 1000) % 10;
    let digit4 = Math.floor(num / 100) % 10;
    let digit5 = Math.floor(num / 10) % 10;
    let digit6 = num % 10;

    console.log('Digits:', digit1, digit2, digit3, digit4, digit5, digit6);

    if (digit1 === digit6 && digit2 === digit5 && digit3 === digit4) {
        console.log('The number is a mirror number.');
    } else {
        console.log('The number is NOT a mirror number.');
    }

} else {
    console.log('Please enter a correct 6-digit number.');
}*/