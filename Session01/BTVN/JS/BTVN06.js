let nameBook = prompt("Nhập tên của sách: ");
let idBook = prompt("Nhập ID của sách: ");

let cleanNameBook = nameBook.trim().toUpperCase(); // trim() để bỏ khoảng trắng cả hai đầu
let bookCode = `LIB - ${cleanNameBook} - ${idBook}`

console.log("Tên sách gốc: " + nameBook);
console.log("Mã sách sau chuẩn hóa: " + bookCode);