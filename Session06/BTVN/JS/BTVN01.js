let arr = [];

for (let i = 0; i < 10; i++) {
    let inputValue = prompt("Nhập số nguyên thứ " + (i + 1) + ":");
    let num = parseInt(inputValue);

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên hợp lệ!");
        i--; 
    } else {
        arr[arr.length] = num;
    }
}

let hasGreaterThan10 = false;
let result = "";

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        hasGreaterThan10 = true;
        result = result + arr[i] + " ";
    }
}

if (hasGreaterThan10 === true) {
    console.log(result.trim());
} else {
    console.log("Không có số nào lớn hơn hoặc bằng 10");
}