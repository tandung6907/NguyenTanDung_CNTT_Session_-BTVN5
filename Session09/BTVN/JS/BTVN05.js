let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8];

function splitArr(arr, n) {
    if (!Array.isArray(arr) || n <= 0 || !Number.isInteger(n)) {
        alert("Tham số không hợp lệ");
        return;
    }

    let newArr = [];
    for (let i = 0; i < arr.length; i += n) {
        let chunk = arr.slice(i, i + n);
        newArr.push(chunk);
    }

    return newArr;
}

let n = Number(prompt("Nhập kích thước mảng mới: "));
if (!isNaN(n) && n > 0) {
    let result = splitArr(arrNumber, n);
    console.log("Mảng sau khi được chia là: \n", result);
    alert("Đã chia mảng thành công - Xem ở F12!!");
} else {
    alert("Kích thước mảng không hợp lệ!!!");
}