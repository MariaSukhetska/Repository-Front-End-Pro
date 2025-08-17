let length = parseInt(prompt("Enter length of Array:"));

if (isNaN(length) || length <= 0) {
  document.write("Incorrect length of Array!");
} else {
  let arr = [];

  // вводимо елементи масиву
  for (let i = 0; i < length; i++) {
    let value = parseInt(prompt("Enter number №" + (i + 1) + ":"));
    arr.push(value);
  }

  // зберігаємо копію масиву
  let originalArr = arr.slice();

  // виводимо початковий масив
  document.write("<p><strong>First Array:</strong> " + originalArr.join(",") + "</p>");

  // сортування масиву
  arr.sort(function(a, b) {
    return a - b;
  });
  document.write("<p><strong>Sorted Array:</strong> " + arr.join(",") + "</p>");

  // видалення з 2-го по 4-й елементи
  arr.splice(1, 3);
  document.write("<p><strong>Array after removing 2nd to 4th elements:</strong> " + arr.join(",") + "</p>");
}