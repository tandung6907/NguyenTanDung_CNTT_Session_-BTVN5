let arr = ["", false, 0, 5, 10, "Hello world!"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        result[result.length] = arr[i];
    }
}

console.log(result); 