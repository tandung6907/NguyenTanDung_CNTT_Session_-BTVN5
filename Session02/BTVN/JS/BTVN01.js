let nameBook = prompt("Nhập tên sách: ");
let nameAuthor = prompt("Nhập tên tác giả: ");
let publicationYear =+ prompt("Nhập năm xuất bản: ");

const currentYear = new Date().getFullYear();

if (publicationYear === currentYear) {
    console.log("Đây là sách mới xuất bản");
} else if (currentYear - publicationYear <= 5) {
    console.log("Sách còn khá mới");
} else {
    console.log("Đây là sách cũ");
}