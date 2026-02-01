let totalFeedback = 0;
let severeComplaints = 0;
let mediumComplaints = 0;
let lightComplaints = 0;
let improvementSuggestions = 0;
let positiveFeedback = 0;

while (true) {
  let hasFeedback = prompt(
    "Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)",
  );

  if (hasFeedback === null || hasFeedback.toLowerCase() === "không") {
    break;
  }

  if (hasFeedback.toLowerCase() !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc (không được để trống):");
  let cardCode = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");
  let feedbackType = parseInt(
    prompt(
      "Nhập loại phản hồi:\n1 = Phàn nàn / Khiếu nại\n2 = Đề xuất cải thiện\n3 = Phản hồi tích cực / Khen ngợi",
    ),
  );
  let severity = null;
  if (feedbackType === 1) {
    severity = parseInt(
      prompt(
        "Nhập mức độ nghiêm trọng:\n1 = Nhẹ\n2 = Trung bình\n3 = Nghiêm trọng",
      ),
    );
  }
  let content = prompt("Nhập nội dung ngắn gọn (chỉ để tham khảo):");

  if (
    !readerName ||
    (feedbackType !== 1 && feedbackType !== 2 && feedbackType !== 3) ||
    (feedbackType === 1 && severity !== 1 && severity !== 2 && severity !== 3)
  ) {
    console.log("Dữ liệu không hợp lệ. Bỏ qua phản hồi này.");
    continue;
  }

  totalFeedback++;

  if (feedbackType === 1 && severity === 3) {
    console.log("-> Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
    severeComplaints++;
  } else if (feedbackType === 1 && severity === 2) {
    console.log("-> Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
    mediumComplaints++;
  } else if (feedbackType === 1 && severity === 1) {
    console.log("-> Xử lý ngay tại quầy - Khiếu nại nhẹ");
    lightComplaints++;
  } else if (feedbackType === 2) {
    console.log("-> Cảm ơn! Đề xuất đã được ghi nhận");
    improvementSuggestions++;
  } else if (feedbackType === 3) {
    console.log("-> Cảm ơn bạn đã phản hồi tích cực!");
    positiveFeedback++;
  }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số phản hồi/khiếu nại đã xử lý:", totalFeedback);
console.log("Số khiếu nại nghiêm trọng (mức 3):", severeComplaints);
console.log("Số khiếu nại trung bình (mức 2):", mediumComplaints);
console.log("Số khiếu nại nhẹ (mức 1):", lightComplaints);
console.log("Số đề xuất cải thiện:", improvementSuggestions);
console.log("Số phản hồi tích cực:", positiveFeedback);
