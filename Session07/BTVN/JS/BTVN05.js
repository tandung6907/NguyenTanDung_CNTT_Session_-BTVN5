let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];

function getAllPositions() {
  let positions = [];
  for (let i = 0; i < players.length; i++) {
    let currentPos = players[i].split("-")[2];

    let isExist = false;
    for (let j = 0; j < positions.length; j++) {
      if (positions[j] === currentPos) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      positions.push(currentPos);
    }
  }
  return positions;
}

function findPlayersWithLongestName() {
  let longestName = "";
  for (let i = 0; i < players.length; i++) {
    let currentName = players[i].split("-")[1];

    if (currentName.length > longestName.length) {
      longestName = currentName;
    }
  }
  return longestName;
}

function countPlayersStartingWithLetter(letter) {
  let count = 0;
  let searchLetter = letter.toLowerCase();

  for (let i = 0; i < players.length; i++) {
    let name = players[i].split("-")[1];
    if (name.charAt(0).toLowerCase() === searchLetter) {
      count++;
    }
  }
  return count;
}

let allPositions = getAllPositions();
console.log("Các vị trí duy nhất trong đội:", allPositions);

let longestName = findPlayersWithLongestName();
console.log("Cầu thủ có tên dài nhất:", longestName);

let letterToSearch = "N";
let count = countPlayersStartingWithLetter(letterToSearch);
console.log(
  "Số cầu thủ có tên bắt đầu bằng chữ '" + letterToSearch + "':",
  count,
);
