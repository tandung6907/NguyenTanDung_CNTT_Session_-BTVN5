let n = parseInt(prompt("Nhập vào số lượng phần tử n:"));
let arr = [];

if (isNaN(n) || n <= 0) {
    console.log("Số lượng phần tử không hợp lệ!");
} else {
    for (let i = 0; i < n; i++) {
        let inputValue = prompt("Nhập phần tử thứ " + (i + 1) + ":");
        let num = parseInt(inputValue);

        if (isNaN(num)) {
            alert("Vui lòng nhập một số nguyên hợp lệ!");
            i--; 
        } else {
            arr[arr.length] = num;
        }
    }

    let countNeg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            countNeg = countNeg + 1;
        }
    }

    console.log("Mảng đã nhập:", arr);
    console.log("Số lượng số nguyên âm trong mảng là: " + countNeg);
}