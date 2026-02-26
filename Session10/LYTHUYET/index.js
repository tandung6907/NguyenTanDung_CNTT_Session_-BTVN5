/*
Object(đối tượng): mô phỏng một đối tượng trong thực tế
VD: đối tượng con mèo, cái xe ô tô, con người, cái bàn, ...
Gồm 2 thành phần chính: 
    1. THUỘC TÍNH (PROPERTIES)
    2. PHƯƠNG THỨC (METHODS)

Con mèo: thuộc tính (màu mắt, màu lông, cân nặng,...)
         phương thức (bắt chuột, kêu, ...)

TẠI SAO LẠI SINH RA OBJECT?
giúp gom các nhóm thuộc tính, phương thức, chung cho đối tượng để dễ quản lý, thao tác
CÁCH KHAI BÁO ĐÔI TƯỢNG
Bên trong đối tượng bao gồm các cặp KEY và VALUE được ngăn cách bởi dấu phẩy

*/

let students = {
    name: "Tan Dung",
    email: "tdung@gmail.com"
}

let products = {
    id: 1, 
    prices: 500,
    image: "",
    name: "Iphone 15",
    sayHello: function name(params) {
        console.log("Xin chào !!!");
    },
}

/* 
THAO TÁC VỚI ĐỐI TƯỢNG
CRUD
1. C_CREATE
2. R_READ
3. U_UPDATE
4. D_DELETE
*/

// tạo đối tượng sách
let books = {};

books.id = "001";
books.author = "Nguyễn Tấn Dũng";
books["book-name"] = "HIHIHAHA";
books["prices"] = 69;
console.log(books);

books.id = "002";
books.bookName = "HIHIHAHA";

delete books["book-name"];

for (const key in books) {
    console.log("KEY: " + books[key]);
}

// KIỂU ĐƠN GIẢN_KIỂU THAM TRỊ
let a = 5; //tạo a
let b = a;//gán b = a (GÁN GIÁ TRỊ)
a = 11; //cập nhật a
console.log("B: ", b); //hiển thị b: 5

// KIỂU THAM CHIẾU
let objA = {
    email: "123" //tạo objA
}
let objB = objA; // gán objA = objB (GÁN ĐỊA CHỈ)
objA.email = "456"; // cập nhật objA
console.log("obj: ", objB); //hiển thị objB