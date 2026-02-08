let players = [];
let goals = [];

function addPlayer(name, goal) {
  players.push(name);
  goals.push(goal);
  console.log("=> Đã thêm " + name + " thành công.");
}

function showSquad() {
  console.log("--- DANH SÁCH ĐỘI HÌNH ---");
  for (let i = 0; i < players.length; i++) {
    console.log(i + 1 + ". " + players[i] + " - " + goals[i] + " bàn");
  }
}

const getTotalGoals = function () {
  let sum = 0;
  for (let i = 0; i < goals.length; i++) {
    sum += goals[i];
  }
  return sum;
};

function findMostGoals(goalsArray) {
  if (goalsArray.length === 0) return 0;

  let max = goalsArray[0];
  for (let i = 1; i < goalsArray.length; i++) {
    if (goalsArray[i] > max) {
      max = goalsArray[i];
    }
  }
  return max;
}

let choice;
do {
  let menu =
    "--- QUẢN LÝ ĐỘI BÓNG ---\n" +
    "1. Nhập cầu thủ mới\n" +
    "2. Xem danh sách đội hình\n" +
    "3. Xem thành tích toàn đội\n" +
    "4. Tìm Vua phá lưới\n" +
    "0. Thoát\n" +
    "Người dùng chọn:";
  choice = Number(prompt(menu));
  switch (choose) {
    case 1:
      let name = prompt("Nhập tên:");
      let goal = parseInt(prompt("Nhập số bàn thắng:"));
      addPlayer(name, goal);
      break;
    case 2:
      showSquad();
      break;
    case 3:
      let total = getTotalGoals();
      console.log("=> Tổng số bàn thắng của cả đội là: " + total + " bàn.");
      break;
    case 4:
      let maxGoal = findMostGoals(goals);
      console.log("=> Vua phá lưới hiện tại ghi được: " + maxGoal + " bàn.");
      for (let i = 0; i < goals.length; i++) {
        if (goals[i] === maxGoal) {
          console.log("(Cầu thủ: " + players[i] + ")");
        }
      }
      break;
    case 0:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
  }
} while (choice !== 0);
