/* 
FILTER: LỌC
1. ĐẦU VÀO: hàm
2. ĐẦU RA:
    + trả về mảng mới []
*/

let number = [3, 8, 4, 13, 12];
let scores = [
    ["đức", "C++", 5],
    ["bình", "C++", 4],
    ["linh", "C++", 6]
];
let result = number.filter((value, index, arr) => {
    return value > 11;
});

console.log(result);

let result1 = scores.filter((p) => {
    return p[2] >= 5;
})

console.log(result1);
