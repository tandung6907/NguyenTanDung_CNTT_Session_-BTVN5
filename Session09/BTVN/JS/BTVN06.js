function checkArithmeticProgression(arr) {
    if (!Array.isArray(arr)) {
        alert("Invlid parameter!!");
        return;
    }
    if (arr.length < 2) return true;
    let check = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== check) {
            return false
        }
    }

    return true
}
let numbers_1 = [1, 3, 4, 5, 7, 9];
let numbers_2 = [2, 4, 6, 8, 10, 12];
let numbers_3 = "abc";
console.log(checkArithmeticProgression(numbers_1));
console.log(checkArithmeticProgression(numbers_2));
console.log(checkArithmeticProgression(numbers_3));