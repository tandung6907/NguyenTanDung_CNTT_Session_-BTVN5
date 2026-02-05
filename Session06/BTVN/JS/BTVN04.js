let n = parseInt(prompt("Nhập vào số lượng phần tử n:"));
let arr = [];

if (isNaN(n) || n <= 0) {
    console.log("Mảng không có phần tử hoặc số lượng không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập ký tự thứ " + (i + 1) + ":");
        if (input !== null && input !== "") {
            arr[arr.length] = input[0];
        } else {
            arr[arr.length] = " ";
        }
    }

    let result = "";
    let hasDigit = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            hasDigit = true;
            result = result + arr[i] + " ";
        }
    }

    if (hasDigit === true) {
        console.log("Các ký tự số tìm thấy: " + result.trim());
    } else {
        console.log("Không có ký tự số");
    }
}