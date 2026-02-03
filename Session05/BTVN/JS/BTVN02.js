let lateReturnedBook = [];

let totalLateReturnedBook = Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));
if (isNaN(totalLateReturnedBook) || totalLateReturnedBook <= 0) {
    console.log("Vui lòng nhập số nguyên dương!");
}
let bookName;
let lengthNameBook = 0;
for (let i=0 ; i<totalLateReturnedBook ; i++) {
    bookName = prompt("Nhập lần lượt tên từng cuốn sách: ");
    lateReturnedBook.push(bookName);
    if (bookName.length > 20) {
        lengthNameBook++;
    }
}

console.log(`Tổng số sách bị trả muộn là: ${totalLateReturnedBook}`);
console.log("Danh sách bị trả muộn: ");
for (let i=0 ; i<lateReturnedBook.length ; i++) {
    console.log(`${i+1}. ${lateReturnedBook[i]}`);
}
console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${lengthNameBook}`);


