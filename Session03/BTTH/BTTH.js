let attempts = 0;
let loggedIn = false;

while (attempts < 3) {
  let password = prompt("Nhập mật khẩu:");

  if (password === "admin123") {
    console.log("Đăng nhập thành công");
    loggedIn = true;
    break;
  } else {
    attempts++;
    console.log("Sai mật khẩu! Số lần còn lại:", 3 - attempts);
  }
}

if (!loggedIn) {
  console.log("Hệ thống bị khóa");
} else {
  // MENU
  while (true) {
    let choice = prompt(
      "===== MENU =====\n" +
        "1. Nhập lô sách mới\n" +
        "2. Vẽ sơ đồ kệ sách\n" +
        "3. Thoát\n" +
        "Chọn chức năng (1-3):",
    );

    if (choice === null) break;

    switch (choice) {
      case "1":
        // NHẬP LÔ SÁCH
        let count = parseInt(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
        if (isNaN(count) || count <= 0) {
          console.log("Số lượng không hợp lệ!");
          break;
        }

        let totalCost = 0;

        for (let i = 1; i <= count; i++) {
          let price = parseFloat(
            prompt(`Nhập giá tiền của cuốn sách thứ ${i}:`),
          );

          if (isNaN(price) || price <= 0) {
            console.log("⚠ Giá không hợp lệ, bỏ qua cuốn này.");
            continue;
          }

          totalCost += price;
        }

        console.log("Tổng giá trị nhập kho đợt này là:", totalCost);
        break;

      case "2":
        // VẼ SƠ ĐỒ KỆ SÁCH
        for (let area = 1; area <= 3; area++) {
          for (let shelf = 1; shelf <= 5; shelf++) {
            if (area === 2 && shelf === 3) {
              console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
              continue;
            }
            console.log(`Khu vực ${area} - Kệ ${shelf}`);
          }
        }
        break;

      case "3":
        // THOÁT
        console.log("Hẹn gặp lại!");
        break;

      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn 1, 2 hoặc 3.");
    }

    if (choice === "3") break;
  }
}
