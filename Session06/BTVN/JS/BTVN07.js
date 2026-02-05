let n = parseInt(prompt("Nhập vào số lượng phần tử n:")); 
let arr = [];

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0"); 
} else if (n === 0) {
    console.log("Mảng không có phần tử nào"); 
} else {
    for (let i = 0; i < n; i++) {
        arr[arr.length] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    }

    if (arr.length < 2) {
        console.log("Mảng phải có ít nhất 2 phần tử");
    } else {
        let maxValue = arr[0];
        let secondMax = null; 

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                secondMax = maxValue;
                maxValue = arr[i];
            } else if (arr[i] < maxValue) {
                if (secondMax === null || arr[i] > secondMax) {
                    secondMax = arr[i];
                }
            }
        }

        if (secondMax === null) {
            console.log("Không có số lớn thứ hai (tất cả các số bằng nhau)");
        } else {
            console.log(secondMax); 
        }
    }
}