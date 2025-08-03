let number = parseInt(prompt("Enter a 5-digit number:"));

if (isNaN(number) || number < 10000 || number > 99999) {
  console.log("It is not a 5-digit number!");
} else {
  let digit1 = parseInt(number / 10000);       // перша цифра
  let digit2 = parseInt(number / 1000) % 10;   // друга
  let digit3 = parseInt(number / 100) % 10;    // третя
  let digit4 = parseInt(number / 10) % 10;     // четверта
  let digit5 = number % 10;                    // п’ята

  console.log(digit1, digit2, digit3, digit4, digit5);
}