/*let number = parseInt(prompt("Enter an integer:"));

if (!isNaN(number)) {
    if (number <= 1) {
        console.log(`${number} is NOT a prime number.`);
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number.`);
        } else {
            console.log(`${number} is NOT a prime number.`);
        }
    }
} else {
    console.log("Please enter a correct number.");
}*/
let number = parseInt(prompt("Enter an integer:"));

if (!isNaN(number)) {
    if (number <= 1) {
        console.log(`${number} is NOT a prime number.`);
    } else if (number === 2) {
        console.log("2 is a prime number.");
    } else if (number % 2 === 0) {
        console.log(`${number} is NOT a prime number.`);
    } else {
        let isPrime = true;

        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number.`);
        } else {
            console.log(`${number} is NOT a prime number.`);
        }
    }
} else {
    console.log("Please enter a valid integer.");
}