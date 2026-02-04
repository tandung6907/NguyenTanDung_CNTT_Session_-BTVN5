let attempts = 0;
let loggedIn = false;

while (attempts < 3) {
  let username = prompt("Nhập tên người dùng: ");
  let password = prompt("Nhập mật khẩu: ");

  if (username === "admin" && password === "12345") {
    console.log("Đăng nhập thành công");
    loggedIn = true;
    break;
  } else {
    attempts++;
    let relogin = 3 - attempts;

    if (username !== "admin" && password !== "12345") {
      console.log(
        `Bạn nhập sai tài khoản và mật khẩu, còn ${relogin} lượt nhập`,
      );
    } else if (username !== "admin") {
      console.log(`Bạn nhập sai tài khoản, còn ${relogin} lượt nhập`);
    } else {
      console.log(`Bạn nhập sai mật khẩu, còn ${relogin} lượt nhập`);
    }
  }
}

if (!loggedIn) {
  console.log("Bạn đã hết lần đăng nhập. Chương trình tự động kết thúc");
}
let choice;
do {
  let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
  menu += "1. Phân loại mã số sách (Chẵn/Lẻ)\n";
  menu += "2. Thiết kế sơ đồ kho sách (Dạng lưới)\n";
  menu += "3. Dự toán phí bảo trì sách theo năm\n";
  menu += "4. Tìm mã số sách may mắn\n";
  menu += "5. Thoát\n";
  menu += "Vui lòng nhập lựa chọn của bạn (1-5):";

  choice = +prompt(menu);

  switch (choice) {
    case 1:
      // Phân loại chẵn lẻ
      let totalBook = 0;
      let oddBook = 0;
      let evenBook = 0;
      let bookId;

      console.log("Nhập mã số sách (Nhập 0 để dừng lại)");
      while (true) {
        bookId = +prompt("Nhập mã số sách: ");

        if (isNaN(bookId)) {
          console.log("Vui lòng nhập số nguyên hợp lệ!");
          continue;
        }
        if (bookId === 0) {
          break;
        }

        totalBook++;
        if (bookId % 2 == 0) {
          evenBook++;
        } else {
          oddBook++;
        }
      }

      console.log("--- Kết quả phân loại mã sách ---");
      console.log(`- Tổng số lượng mã sách đã nhập: ${totalBook}`);
      console.log(`- Số mã chẵn (Sách khoa học): ${evenBook}`);
      console.log(`- Số mã lẻ (Sách nghệ thuật): ${oddBook}`);
      break;
    case 2:
      // In kệ sách
      let enterRows = +prompt("Nhập số hàng: ");
      let enterColumns = +prompt("Nhập số cột: ");

      for (let rows = 1; rows <= enterRows; rows++) {
        let line = "";
        for (let columns = 1; columns <= enterColumns; columns++) {
          let square = `[${rows}-${columns}]`;
          if (rows === columns) {
            square += " (Kệ ưu tiên)";
          }
          line += square + " ";
        }
        console.log(line);
      }
      break;
    case 3:
      // Dự toán phí sách bảo trì
      let quantityBook = +prompt("Nhập số lượng sách hiện có: ");
      let currentCostPerBook = +prompt("Nhập phí bảo trì cho 1 quyển (VNĐ): ");
      let years = +prompt("Nhập số năm dự toán: ");

      if (isNaN(quantityBook) || isNaN(currentCostPerBook) || isNaN(years)) {
        console.log("Dữ liệu nhập vào phải là số!");
      } else {
        console.log("--- Dự toán phí bảo trì sách theo năm ---");
        let totalCost;

        for (let i = 1; i <= years; i++) {
          totalCost = quantityBook * currentCostPerBook;

          console.log(
            `Năm ${i}: ${totalCost.toLocaleString()} VNĐ (Đơn giá: ${currentCostPerBook.toFixed(0)}/cuốn)`,
          );

          currentCostPerBook = currentCostPerBook * 1.1;
        }
        console.log("Thống kê đã hoàn thành!");
      }
      break;
    case 4:
      // Mã số may mắn
      let luckyNumber = +prompt("Nhập số N bất kỳ: ");
      if (isNaN(luckyNumber) || luckyNumber <= 0) {
        console.log("Vui lòng nhập số N dương!");
        break;
      }

      let luckyCount = 0;
      let luckyList = "";

      console.log(
        `--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---`,
      );
      for (let i = 1; i <= luckyNumber; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
          luckyList += i + " ";
          luckyCount++;
        }
      }

      console.log(luckyList || "Không có mã nào thỏa mãn.");
      console.log(`--> Có tổng ${luckyCount} mã may mắn.`);
      console.log(`Tìm thấy ${luckyCount} mã may mắn!!`);
      break;
    case 5:
      console.log("Hệ thống đang đăng xuất... Hẹn gặp lại");
      break;
    default:
      console.log("Vui lòng nhập lựa chọn từ 1-5!");
  }
} while (choice !== 5);

