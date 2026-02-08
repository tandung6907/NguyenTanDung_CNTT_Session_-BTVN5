let playerIds = [];
let playerPositions = [];

let manyPlayers;
while (true) {
  manyPlayers = parseInt(
    prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"),
  );
  if (manyPlayers < 0 || isNaN(manyPlayers)) {
    alert("Vui lòng nhập số nguyên dương!!");
  } else if (manyPlayers === 0) {
    break;
  } else {
    for (let i = 0; i < manyPlayers; i++) {
      alert(`Nhập thông tin của cầu thủ thứ: ${i + 1}`);
      let id, pos;
      // mã
      while (true) {
        id = prompt(`Nhập mã cầu thủ thứ ${i + 1}: `);
        if (!playerIds.includes(id)) {
          playerIds.push(id);
          break;
        } else {
          alert("Mã cầu thủ đã tồn tại! Vui lòng nhập lại!");
        }
      }
      // vị trí chơi bóng
      while (true) {
        pos = parseInt(
          prompt(
            `Nhập vị trí của cầu thủ thứ ${i + 1} (chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo)`,
          ),
        );
        if (pos >= 1 && pos <= 4) {
          alert("Đã chọn vị trí thành công");
          playerPositions.push(pos);
          break;
        } else {
          alert("Vui lòng chọn vị trí từ 1 đến 4!!");
        }
      }
    }
    break;
  }
}

function printTeamRoster() {
  if (manyPlayers === 0) {
    console.log("Không có cầu thủ nào được thêm vào đội bóng!");
  } else {
    for (let i = 0; i < playerIds.length; i++) {
      console.log(
        `${i + 1} - Mã cầu thủ: ${playerIds[i]} - Vị trí: ${playerPositions[i]}`,
      );
    }
  }
}

function findPlayersByPosition(position) {
    let indices = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indices.push(i);
        }
    }
    return indices;
}

printTeamRoster();

let searchPos = parseInt(prompt("Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"));
let searchName = positionNames[searchPos - 1];
let resultIndices = findPlayersByPosition(searchName);

console.log("Số cầu thủ ở vị trí " + searchName + ": " + resultIndices.length);
console.log("Các chỉ số cầu thủ ở vị trí " + searchName + ": " + resultIndices.join(", "));
