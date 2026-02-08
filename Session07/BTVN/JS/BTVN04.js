let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];

function printTeamRoster() {
  console.log("--- DANH SÁCH ĐỘI BÓNG ---");
  for (let i = 0; i < players.length; i++) {
    let details = players[i].split("-");
    let id = details[0];
    let name = details[1];
    let position = details[2];
    console.log(
      i + 1 + ". Mã: " + id + " | Tên: " + name + " | Vị trí: " + position,
    );
  }
}

function countPlayerByPostion(players) {
  let countGK = 0;
  let countDF = 0;
  let countMF = 0;
  let countFW = 0;

  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];

    if (position === "Thủ môn") {
      countGK++;
    } else if (position === "Hậu vệ") {
      countDF++;
    } else if (position === "Tiền vệ") {
      countMF++;
    } else if (position === "Tiền đạo") {
      countFW++;
    }
  }

  return (
    "Thủ môn: " +
    countGK +
    ", Hậu vệ: " +
    countDF +
    ", Tiền vệ: " +
    countMF +
    ", Tiền đạo: " +
    countFW
  );
}

function hasGoalkeeper() {
  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];
    if (position === "Thủ môn") {
      return true;
    }
  }
  return false;
}

printTeamRoster();

console.log("\n--- THỐNG KÊ VỊ TRÍ ---");
console.log(countPlayerByPostion(players));

console.log("\n--- KIỂM TRA THỦ MÔN ---");
if (hasGoalkeeper()) {
  console.log("Đội bóng đã có thủ môn.");
} else {
  console.log("Đội bóng chưa có thủ môn!");
}
