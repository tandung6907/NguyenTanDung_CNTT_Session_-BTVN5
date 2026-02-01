let totalReturns = parseInt(prompt("Hôm nay có bao nhiêu lượt trả sách?"));

while (isNaN(totalReturns) || totalReturns <= 0) {
  totalReturns = parseInt(
    prompt("Vui lòng nhập một số nguyên dương cho lượt trả sách: "),
  );
}

let lateCount = 0;

for (let i = 1; i <= totalReturns; i++) {
  console.log(`--- Lượt trả thứ ${i} ---`);

  let name = prompt(`Nhập tên người trả (Lượt ${i}): `);
  let bookTitle = prompt(`Nhập tên sách (Lượt ${i}): `);
  let daysBorrowed;

  while (true) {
    daysBorrowed = parseInt(
      prompt(`Nhập số ngày đã mượn thực tế cho cuốn "${bookTitle}": `),
    );
    if (!isNaN(daysBorrowed) && daysBorrowed >= 1) {
      break;
    }
    console.log("Số ngày không hợp lệ! Vui lòng nhập số nguyên ≥ 1.");
  }

  let status = "";
  let penalty = "";

  if (daysBorrowed <= 14) {
    status = "Trả đúng hạn";
  } else if (daysBorrowed <= 21) {
    status = "Trả muộn nhẹ";
    penalty = "Phạt nhắc nhở";
    lateCount++; // Tăng biến đếm muộn
  } else {
    status = "Quá hạn nghiêm trọng";
    penalty = "Cần ghi biên bản phạt";
    lateCount++; // Tăng biến đếm muộn
  }

  console.log(`Người trả: ${name}`);
  console.log(`Sách: ${bookTitle}`);
  console.log(`Số ngày mượn: ${daysBorrowed} ngày`);
  console.log(`Tình trạng: ${status} ${penalty ? "-> " + penalty : ""}`);
}

console.log("================================");
console.log(`TỔNG KẾT HÔM NAY:`);
console.log(`- Tổng số lượt trả sách: ${totalReturns}`);
console.log(`- Số lượt trả muộn (≥ 15 ngày): ${lateCount}`);
