let userName = prompt("Nhập tên của bạn: ");
let role = prompt("Nhập vai trò của bạn (admin / student / guest): ");
let balance =+ prompt("Nhập số dư tài khoản thẻ: ");
let cardStatus = prompt("Nhập trạng thái thẻ thư viện (nhập true nếu còn hoạt động): ");
let overdueDays =+ prompt("Nhập số ngày quá hạn trả sách: ");

role = role ? role.trim().toLowerCase() : "";
cardStatus = cardStatus === "true";

let accessMessage = "";

if (role === "admin") {
    accessMessage = "Chào Admin, bạn có toàn quyền hệ thống";
} else if (role === "student") {
    accessMessage = "Chào sinh viên, bạn có thể mượn sách";
} else if (role === "guest") {
    accessMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ";
} else {
    accessMessage = "Vai trò không hợp lệ, vui lòng nhập lại!";
}

let borrowResult = "";
let borrowReason = "";

if (!userName) {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
    borrowReason = "Tên người dùng không được để trống";
} else if (!(role === "student" || role === "admin")) {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
    borrowReason = "Vai trò không có quyền mượn sách";
} else if (!(balance > 0 && cardStatus)) {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
    borrowReason = "Số dư không đủ hoặc thẻ thư viện không hoạt động";
} else {
    borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
}

let fineMessage = "";
let fineAmount = 0;
let returnStatus = "";

if (overdueDays <= 0) {
    returnStatus = "Cảm ơn bạn đã trả đúng hạn";
    fineAmount = 0;
} else if (overdueDays >= 1 && overdueDays <= 5) {
    returnStatus = `Quá hạn ${overdueDays} ngày`;
    fineAmount = overdueDays * 5000;
} else if (overdueDays >= 6 && overdueDays <= 10) {
    returnStatus = `Quá hạn ${overdueDays} ngày`;
    fineAmount = overdueDays * 10000;
} else {
    returnStatus = `Quá hạn ${overdueDays} ngày`;
    fineAmount = 200000;
    fineMessage = "TÀI KHOẢN BỊ KHÓA";
}

console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---

Người dùng: ${userName ? userName.toUpperCase() : "KHÔNG XÁC ĐỊNH"}

Quyền hạn: ${accessMessage}

Kết quả mượn: ${borrowResult}${borrowReason ? " (" + borrowReason + ")" : ""}

Tình trạng trả sách: ${returnStatus}

Tiền phạt: ${fineAmount} VNĐ${fineMessage ? " - " + fineMessage : ""}
`);
