let totalBorrows =+ prompt("Hôm nay có bao nhiêu lượt mượn sách?");

let count = 0;

while (count < totalBorrows) {
    let borrowerName = prompt("Nhập tên người mượn:");
    let bookName = prompt("Nhập tên sách:");
    let borrowDays =+ prompt("Nhập số ngày mượn (1 đến 30):");

    if (borrowDays > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
        console.log("Mượn thành công");
    }

    count++;
}

console.log("Tổng số lượt mượn:", totalBorrows);

