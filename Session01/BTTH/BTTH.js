let nameBook = prompt("Tên sách: ");
let nameAuthor = prompt("Tên tác giả: ");
let yearOfPublication =+ prompt("Năm xuất bản: ");
let priceOfEachBook = prompt("Giá tiền một cuốn sách: ");
let quantityImported = prompt("Số lượng nhập kho: ");

let cleanNameBook = nameBook.trim().toUpperCase();
let cleanNameAuthor = nameAuthor.toUpperCase();
let bookId = cleanNameAuthor.slice(0,3) + yearOfPublication;
let randomNumber = (Math.floor(Math.random()*1000)+1);

let bookAge = 2026 - yearOfPublication; // lấy năm hiện tại tại thời gian thực
let total = priceOfEachBook*quantityImported;

console.log("---PHIẾU NHẬP KHO---");
console.log(`Mã sách: ${bookId} + ${randomNumber}`);
console.log("Tên sách: " + cleanNameBook);
console.log("Tác giả: " + cleanNameAuthor);
console.log("Năm xuất bản: " + yearOfPublication);
console.log("Tuổi sách: " + bookAge + " năm");
console.log("Tổng giá trị: " + total + "VND");
console.log("Ngăn kệ gợi ý: " + "Kệ số " + (Math.floor(Math.random()*5)+1));







