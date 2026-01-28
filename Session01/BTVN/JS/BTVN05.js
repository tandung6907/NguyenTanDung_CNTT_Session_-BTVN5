let nameBook = prompt("Nhập vào tên sách: ");
let year_of_publication =+ prompt("Nhập năm xuất bản của sách: ");
let current_year =+ prompt("Nhập năm hiện tại của sách: ");

let old_of_book = current_year - year_of_publication;

console.log("Sách: " + nameBook);
console.log("Năm xuất bản: " + year_of_publication);
console.log("Tuổi của sách: " + old_of_book + " năm");