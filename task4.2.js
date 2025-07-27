let number = prompt("Enter a 3-digit number:");

if (number.length === 3 && !isNaN(number)) {
  let a = number[0];
  let b = number[1];
  let c = number[2];

  if (a === b && b === c) {
    alert(" All digits are the same.");
  } else if (a === b, a === c, b === c) {
    alert(" Some digits are the same.");
  } else {
    alert("All digits are different.");
  }
} else {
  alert("Please enter a valid 3-digit number.");
}