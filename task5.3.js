let n = parseInt(prompt('Enter a number N:'));

if (!isNaN(n) && n > 0) {
    console.log(`Whole numbers from 1 to 100 whose square does not exceed ${n}:`);
    
    for (let i = 1; i <= 100; i++) {
        if (i * i <= n) {
            console.log(i);
        } else {
            break;
        }
    }
} else {
    console.log('Please enter a correct number.');
}