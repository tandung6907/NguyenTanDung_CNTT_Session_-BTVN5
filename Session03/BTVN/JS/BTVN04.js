let totalBooks = 0;
let lostCount = 0;
let outOfStockCount = 0;
let highStockCount = 0;
let normalStockCount = 0;

while (true) {
  let continueCheck = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

  if (continueCheck === null || continueCheck.toLowerCase() === "không") {
    break;
  }

  if (continueCheck.toLowerCase() !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let bookCode = prompt("Nhập mã sách (không được để trống):");
  if (!bookCode) {
    console.log("Mã sách không hợp lệ. Bỏ qua cuốn này.");
    continue;
  }

  let bookName = prompt("Nhập tên sách:");
  let quantity = parseInt(prompt("Nhập số lượng thực tế trong kho (>= 0):"));
  let status = parseInt(
    prompt("Nhập tình trạng sách (1 - Bình thường, 2 - Mất):"),
  );

  if (isNaN(quantity) || quantity < 0 || (status !== 1 && status !== 2)) {
    console.log("Dữ liệu không hợp lệ. Bỏ qua cuốn này.");
    continue;
  }

  totalBooks++;

  if (status === 2) {
    console.log(`📕 Sách mất: ${bookName}`);
    lostCount++;
  } else if (status === 1 && quantity === 0) {
    console.log(`📙 Sách hết hàng: ${bookName}`);
    outOfStockCount++;
  } else if (status === 1 && quantity >= 10) {
    console.log(`📗 Sách tồn kho nhiều: ${bookName}`);
    highStockCount++;
  } else if (status === 1 && quantity >= 1 && quantity <= 9) {
    console.log(`📘 Sách tồn kho bình thường: ${bookName}`);
    normalStockCount++;
  }
}

console.log("===== BÁO CÁO KIỂM KÊ =====");
console.log("Tổng số sách đã kiểm kê:", totalBooks, "cuốn");
console.log("Số sách mất:", lostCount, "cuốn");
console.log("Số sách hết hàng:", outOfStockCount, "cuốn");
console.log("Số sách tồn kho nhiều:", highStockCount, "cuốn");
console.log("Số sách tồn kho bình thường:", normalStockCount, "cuốn");
