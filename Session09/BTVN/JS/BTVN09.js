function sortEvens(arr) {
  if (!Array.isArray(arr)) {
    console.log("Invalid parameter");
    return;
  }

  let evens = arr.filter((num) => num % 2 === 0);

  evens.sort((a, b) => a - b);

  let result = [];
  let evenIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(evens[evenIndex]);
      evenIndex++;
    } else {
      result.push(arr[i]);
    }
  }

  console.log(result);
}

let number = [5, 8, 6, 3, 4, 2, 7];
let number_1 = [5, 9, 6, 4, 1, 8, 3];
let number_2 = "abc";

sortEvens(number);
sortEvens(number_1);
sortEvens(number_2);
