let successCount = 0;
let failCount = 0;

while (true) {
  let hasRequest = prompt("Có yêu cầu gia hạn mới không? (có/không)");

  if (hasRequest === null || hasRequest.toLowerCase() === "không") {
    break;
  }

  if (hasRequest.toLowerCase() !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc:");
  let bookName = prompt("Nhập tên sách:");
  let borrowedDays = parseInt(prompt("Nhập số ngày đã mượn hiện tại (>=1):"));
  let extendDays = parseInt(prompt("Nhập số ngày muốn gia hạn thêm (>=1):"));

  if (
    isNaN(borrowedDays) ||
    isNaN(extendDays) ||
    borrowedDays < 1 ||
    extendDays < 1
  ) {
    console.log("Dữ liệu không hợp lệ. Vui lòng nhập số nguyên >= 1.");
    failCount++;
    continue;
  }

  let totalDays = borrowedDays + extendDays;

  if (totalDays > 60) {
    console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
    failCount++;
  } else if (borrowedDays > 45) {
    console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
    failCount++;
  } else {
    console.log("Gia hạn thành công");
    successCount++;
  }
}

console.log("Thống kê ca làm việc:");
console.log("Số lần gia hạn thành công:", successCount);
console.log("Số lần gia hạn không thành công:", failCount);
