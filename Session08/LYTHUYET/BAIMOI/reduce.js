/* 
TÍNH TOÁN
1. ĐẦU VÀO: 
    NHẬN VÀO 2 THAM SỐ
    1. HÀM
    2. GIÁ TRỊ KHỞI TẠO
2. ĐẦU RA: 

*/
let number = [4, 7, 8, 10, 11, 12];

let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);

let result = number.reduce((sum, p) => sum + p, 0);
console.log(result);