let returnedBook = [];

let totalReturnBook =+ prompt("Bạn muốn trả bao nhiêu cuốn sách?");
if (isNaN(totalReturnBook) || totalReturnBook <= 0) {
    console.log("Vui lòng nhập số nguyên dương");
} 
let bookName;
for (let i=0 ; i<totalReturnBook ; i++) {
    bookName = prompt("Nhập lần lượt tên từng cuốn sách: ");
    returnedBook.push(bookName);
}
console.log(`Tổng số sách đã được trả: ${totalReturnBook}`);
console.log("Danh sách sách được trả: ");
for (let i=0 ; i<returnedBook.length ; i++) {
    console.log(`${i + 1}. ${returnedBook[i]}`);
}
