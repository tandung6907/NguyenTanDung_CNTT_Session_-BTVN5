const squad = [
  ["Nguyen Van A", 10, "FW"],
  ["Tran Van B", 5, "MF"],
  ["Le Van C", 2, "DF"],
  ["Pham Van D", 12, "FW"],
  ["Hoang Van E", 0, "GK"],
  ["Dang Van F", 7, "MF"],
];

function viewPlayers() {
  let result = "=== DANH SÁCH CẦU THỦ ===\n";
  squad.forEach((player) => {
    result += `${player[0]} (${player[2]}): ${player[1]} bàn thắng\n`;
  });
  alert(result);
}

function findPlayers() {
  const name = prompt("Nhập tên cầu thủ cần tìm kiếm: ");
  if (name === null) return;

  const player = squad.find(
    (pler) => pler[0].toLowerCase() === name.toLowerCase(),
  );

  if (player) {
    alert(
      `Tìm thấy:\n Tên: ${player[0]}\n Vị trí: ${player[2]}\n Bàn thắng: ${player[1]}`,
    );
  } else {
    alert("Không tìm thấy cầu thủ!");
  }
}

function filerPostion() {
  const postion = prompt("Nhập vị trí cần lọc (FW/MF/DF/GK): ");
  if (postion === null) return;

  const filtered = squad.filter((pos) => pos[2] === postion.toUpperCase());

  if (filtered.length === 0) {
    alert("Không có cầu thủ nào đá vị trí này!!!");
    return;
  } else {
    let result = "--- KẾT QUẢ LỌC ---\n";
    filtered.forEach((fil) => {
      result += `- ${fil[0]} (${fil[1]} bàn)\n`;
    });
    alert(result);
  }
}

function totalGoals() {
  let total = squad.reduce((sum, g) => {
    return sum + g[1];
  }, 0);
  alert(`Tổng số bàn thắng của cả đội là: ${total} bàn`);
}

function checkPerformance() {
  const hasZero = squad.some((p) => p[1] === 0);
  const allScored = squad.every((p) => p[1] > 0);

  let message = "";
  if (hasZero) {
    message += "Có cầu thủ chưa ghi bàn\n";
  }
  if (allScored) {
    message += "Tất cả cầu thủ đều đã ghi bàn\n";
  }
  if (!hasZero && !allScored) {
    message += "Đội đang có tình trạng ghi bàn bình thường\n";
  }
  alert(message);
}

function printMenu() {
  let choice;
  do {
    choice = prompt(
      `--- QUẢN LÝ ĐỘI BÓNG ---
    1. Xem danh sách
    2. Tìm kiếm (Find)
    3. Lọc vị trí (Filter)
    4. Tổng bàn thắng (Reduce)
    5. Kiểm tra hiệu suất (Some/Every)
    0. Thoát
    Nhập vào lựa chọn của bạn: `,
    );

    switch (choice) {
      case "1":
        viewPlayers();
        break;
      case "2":
        findPlayers();
        break;
      case "3":
        filerPostion();
        break;
      case "4":
        totalGoals();
        break;
      case "5":
        checkPerformance();
        break;
      case "0":
        alert("Hẹn gặp lại!");
        break;
      default:
        alert("Vui lòng nhập lựa chọn từ 1 đến 5 hoặc 0 để thoát!!!");
        break;
    }
  } while (choice !== "0" && choice !== null);
}

printMenu();
