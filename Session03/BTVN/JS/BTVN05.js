let totalRequests = 0;
let successCount = 0;
let rejectedCount = 0;
let pendingCount = 0;

while (true) {
  let hasRequest = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

  if (hasRequest === null || hasRequest.toLowerCase() === "không") {
    break;
  }

  if (hasRequest.toLowerCase() !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc:");
  let bookCode = prompt("Nhập mã sách muốn đặt trước:");
  let bookName = prompt("Nhập tên sách (chỉ để tham khảo):");
  let waitDays = parseInt(prompt("Nhập số ngày dự kiến chờ (>=1):"));
  let priority = parseInt(
    prompt("Nhập mức ưu tiên (1 = SV, 2 = GV/NCS, 3 = Đặc cách):"),
  );

  if (
    !readerName ||
    !bookCode ||
    !bookName ||
    isNaN(waitDays) ||
    waitDays < 1 ||
    (priority !== 1 && priority !== 2 && priority !== 3)
  ) {
    console.log("Dữ liệu không hợp lệ. Bỏ qua yêu cầu này.");
    continue;
  }

  totalRequests++;

  if (waitDays > 45) {
    console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
    rejectedCount++;
  } else if (priority === 3) {
    console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
    successCount++;
  } else if (priority === 2 && waitDays <= 30) {
    console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    successCount++;
  } else if (priority === 1 && waitDays <= 21) {
    console.log("Đặt trước thành công");
    successCount++;
  } else {
    console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
    pendingCount++;
  }
}

console.log("===== BÁO CÁO CA LÀM VIỆC =====");
console.log("Tổng số yêu cầu đã xử lý:", totalRequests);
console.log("Số yêu cầu được đặt trước thành công:", successCount);
console.log("Số yêu cầu bị từ chối:", rejectedCount);
console.log("Số yêu cầu chờ xét duyệt:", pendingCount);
