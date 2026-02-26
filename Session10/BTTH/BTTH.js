let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];

function main() {
  let choice;
  do {
    choice = prompt(` --- MENU ---
1. Football Club's List (READ)
2. Adding new player (CREATE)
3. Finding the player by ID (READ/FIND) 
4. Updating Goal (UPDATE)
5. Selling the player (DELETE)
0. Exit programming 
Please entering ur the choice: `);

    if (choice === null) return;

    switch (choice) {
      case "1":
        viewPlayer(squad);
        break;
      case "2":
        inputNewPlayer(squad);
        break;
      case "3":
        findPlayerById(squad);
        break;
      case "4":
        updateGoal(squad);
        break;
      case "5":
        sellPlayer(squad);
        break;
      case "0":
        alert("Programming's exitting... See u later!!!");
        break;
      default:
        alert("Please enter the choice from 1 to 5 || 0 to exit!!!");
        break;
    }
  } while (choice !== "0");
}

function viewPlayer(obj) {
  let display = "==> DANH SÁCH: \n";
  obj.forEach((p) => {
    display += `MÃ: ${p.id} - ${p.name} (${p.position}): ${p.goals} bàn\n`;
  });
  alert(display);
}

function inputNewPlayer(obj) {
  let newPlayerName = prompt("Enter the name of new player: ");
  let position = prompt(
    "Enter the player's current playing position: ",
  ).toUpperCase();
  let goal = Number(prompt("Enter the player's current goal: "));
  let id = obj.length + 1;

  let newPlayer = {
    id: id,
    name: newPlayerName,
    goals: goal,
    position: position,
  };
  obj.push(newPlayer);
  alert("You have added successfully!!!");
}

function findPlayerById(obj) {
  let searchId = Number(prompt("Enter the player's ID need to search: "));
  let result = obj.find((p) => p.id === searchId);
  if (!result) {
    alert("No player has ID: " + searchId);
    return;
  }
  alert(`Player has ID: ${searchId} is ${result.name}`);
}

function updateGoal(obj) {
  let searchId = Number(prompt("Enter the player's ID need to search: "));
  let result = obj.find((p) => p.id === searchId);
  if (!result) {
    alert("No player has ID: " + searchId);
    return;
  }
  let goalAdd = Number(prompt("Enter the number of goals to be added: "));
  result.goals += goalAdd;
  alert("The goal has been successfully added!!!");
}

function sellPlayer(obj) {
  let searchId = Number(prompt("Enter the player's ID need to search: "));
  let playerNeedToTranfer = obj.findIndex((p) => p.id === searchId);
  if (playerNeedToTranfer !== -1) {
    obj.splice(playerNeedToTranfer, 1);
    alert("The player has been transferred!!!");
    return;
  }
  alert("No player has ID: " + searchId);
}

main();
