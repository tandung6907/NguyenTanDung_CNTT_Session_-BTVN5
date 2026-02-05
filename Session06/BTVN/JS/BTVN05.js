let n = parseInt(prompt("Nhập vào số lượng phần tử n:"));
let arr = [];

if (isNaN(n) || n < 0) {
    if (n < 0) {
        console.log("Số lượng phần tử không được âm");
    } else {
        console.log("Số lượng phần tử không hợp lệ");
    }
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        arr[arr.length] = prompt("Nhập phần tử thứ " + (i + 1) + ":");
    }

    let sum = 0;
    let hasNumber = false;

    for (let i = 0; i < arr.length; i++) {
        let val = Number(arr[i]); 
        
        if (!isNaN(val) && arr[i] !== "" && arr[i] !== null) {
            hasNumber = true;
            sum = sum + val;
        }
    }

    if (hasNumber === true) {
        console.log(sum);
    } else {
        console.log("Không có phần tử nào là số");
    }
}