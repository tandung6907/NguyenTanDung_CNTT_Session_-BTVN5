let arr = [];

for (let i = 0; i < 10; i++) {
    let inputValue = prompt("Nhập phần tử thứ " + (i + 1) + ":");
    let num = parseInt(inputValue);

    if (isNaN(num)) {
        alert("Vui lòng nhập số nguyên!");
        i--; 
    } else {
        arr[arr.length] = num;
    }
}

if (arr.length === 0) {
    console.log("Mảng rỗng");
} else {
    let maxValue = arr[0];
    let maxIndices = "0";

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = Arr[i];
            maxIndices = i + ""; 
        } else if (arr[i] === maxValue) {
            maxIndices = maxIndices + ", " + i;
        }
    }

    console.log("Số lớn nhất: " + maxValue);
    console.log("Vị trí xuất hiện: " + maxIndices);
}