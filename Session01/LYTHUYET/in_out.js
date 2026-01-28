/*
Nhập xuất: 
1. Nhập
+ dùng prompt: mặc định là string nếu nhập, nếu không nhập giá trị sẽ là null
2. Xuất
    + alert()
    + console.log()
    + document.write()
3. chuyển đổi kiểu dữ liệu 
    + string -> number: 
        - dùng Number
        - dùng toán tử +
        - dùng parseInt
        - dùng parseFloat
*/
let number1 = Number(prompt("Nhập vào số thứ nhất: "));
let number2 =+ prompt("Nhập vào số thứ hai: ");

let total = number1 + number2;

let a = parseInt(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));

let c = a + b;

console.log(total);
console.log(c);

