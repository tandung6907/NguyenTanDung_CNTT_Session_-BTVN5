let bookName = prompt("Nhập tên sách: ");
let borrowerName = prompt("Nhập tên người mượn: ");
let bookStatus = prompt("Nhập tình trạng sách (đã mượn/có sẵn/không có sẵn): ");
let libraryCard = prompt("Đã có thẻ thư viện chưa (có/chưa): ");
let borrowDays =+ prompt("Nhập số ngày mượn: ");

bookStatus = bookStatus.trim().toLowerCase();
libraryCard = libraryCard.trim().toLowerCase();

if (bookStatus === "có sẵn") {
    if (libraryCard === "có") {
        console.log("Chúc mừng, bạn có thể mượn sách này");
    } else {
        console.log("Xin lỗi, bạn không thể mượn sách nếu không có thẻ thư viện");
    }
} else if (bookStatus === "đã mượn") {
    if (borrowDays < 30) {
        if (libraryCard === "có") {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        } else {
            console.log("Xin lỗi, bạn không thể mượn sách nếu không có thẻ thư viện");
        }
    } else {
        console.log("Cuốn sách này đã được mượn từ lâu.");
    }
} else if (bookStatus === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}