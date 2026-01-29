let bookName = prompt("Nhập tên sách: ");
let bookCategory = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện): ");
let bookStatus = prompt("Nhập tình trạng sách (có sẵn / đã mượn): ");

bookCategory = bookCategory .trim().toUpperCase();
bookStatus  = bookStatus .trim().toUpperCase();

if (bookCategory === "KHOA HỌC" || bookCategory === "LỊCH SỬ") {
    if (bookStatus === "CÓ SẴN") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (bookCategory === "VĂN HỌC" || bookCategory === "TRUYỆN") {
    console.log("Sách này có thể đọc giải trí");
} else {
    console.log("Thể loại sách không hợp lệ");
}