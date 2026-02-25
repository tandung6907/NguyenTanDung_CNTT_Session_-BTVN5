function maxNumber(num) {
  if (!Number.isInteger(num)) {
    return "Invalid input";
  }

  let isNegative = num < 0;

  let digits = Math.abs(num)
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return isNegative ? -Number(digits) : Number(digits);
}

let input = prompt("Nhập một số nguyên:");
let number = Number(input);

let result = maxNumber(number);

alert("Số lớn nhất có thể tạo được là: " + result);
