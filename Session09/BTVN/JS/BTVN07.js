function findTheMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Invalid parameter!!");
        return;
    }
    let result = [];
    let check = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== check) {
            result.push(arr[i - 1] + check);
        }
    }
    console.log(result);
}

let number = [1, 2, 3, 5];
let number_1 = [1, 3, 5, 7, 11, 15, 17];
let number_2 = "abc";
findTheMissingNumber(number);
findTheMissingNumber(number_1);
findTheMissingNumber(number_2);