let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Văn C",
  "Phạm Văn D",
  "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

function printTeamRoster() {
  console.log("--- DANH SÁCH CẦU THỦ HIỆN TẠI ---");
  for (let i = 0; i < playerIds.length; i++) {
    console.log(
      i +
        1 +
        ". Mã: " +
        playerIds[i] +
        " - Tên: " +
        playerNames[i] +
        " - Số áo: " +
        playerJerseyNumbers[i],
    );
  }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
  for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] === playerId) {
      playerNames[i] = newName;
      playerJerseyNumbers[i] = newJerseyNumber;
      return true;
    }
  }
  return false;
}

let idToUpdate = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let isExist = false;
for (let i = 0; i < playerIds.length; i++) {
  if (playerIds[i] === idToUpdate) {
    isExist = true;
    break;
  }
}

if (isExist) {
  let newName = prompt("Nhập tên mới cho cầu thủ:");
  let newJersey = parseInt(prompt("Nhập số áo mới (số nguyên từ 1-99):"));

  updatePlayerNameAndJersey(idToUpdate, newName, newJersey);

  alert("Cập nhật thành công!");
  printTeamRoster();
} else {
  alert("Không tìm thấy cầu thủ với mã này!");
}
