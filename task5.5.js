let number = parseInt(prompt("Enter an integer:"));

if (!isNaN(number) && number > 0) {
    let power = 0;
    let result = 1;
    let isPowerOfThree = false;

    while (result <= number) {
        if (result === number) {
            isPowerOfThree = true;
            break;
        }
        power++;
        result = Math.pow(3, power);
    }

    if (isPowerOfThree) {
        console.log(`${number} is 3 raised to the power of ${power}.`);
    } else {
        console.log(`${number} CANNOT be obtained as a power of 3.`);
    }
} else {
    console.log("Please enter a correct positive integer.");
}