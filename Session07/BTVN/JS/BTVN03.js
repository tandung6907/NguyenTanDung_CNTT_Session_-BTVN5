let players = [];

function printTeamRoster() {
  console.log("--- DANH SÁCH CẦU THỦ ---");
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

function pushPlayer(id, name, position) {
  let playerString = id + "-" + name + "-" + position;
  players.push(playerString);
}

let numPlayers = parseInt(
  prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"),
);

let positionNames = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

for (let i = 0; i < numPlayers; i++) {
  console.log("Nhập thông tin cho cầu thủ thứ " + (i + 1) + ":");

  let id;
  let isDuplicate = true;
  while (isDuplicate) {
    id = prompt("Nhập mã cầu thủ (duy nhất):");
    isDuplicate = false;
    for (let j = 0; j < players.length; j++) {
      let existingId = players[j].split("-")[0];
      if (existingId === id) {
        isDuplicate = true;
        alert("Mã này đã tồn tại! Vui lòng nhập mã khác.");
        break;
      }
    }
  }

  let name = "";
  while (name === "") {
    name = prompt("Nhập tên cầu thủ (không được để trống):");
  }

  let posChoice = parseInt(
    prompt("Chọn vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"),
  );
  let position = positionNames[posChoice - 1];

  pushPlayer(id, name, position);
}

printTeamRoster();
