let number = prompt("Enter a 5-digit number:");

if (number.length === 5 && !isNaN(number)) {
  let digits = number.split('').join(' ');
  console.log(digits);
  //alert(digits); // можна також показати в alert
} else {
  alert("Please enter a valid 5-digit number.");
}