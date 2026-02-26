const player = {
  name: "Messi",
  position: "Forward",
  age: 36,
  goals: 25,
  assists: 15,
};

function showPlayerInfor() {
  console.log(`Name: ${player.name}
Position: ${player.position}
Age: ${player.age}
Goals: ${player.goals}
Assists: ${player.assists}
Total contribution: ${player.goals + player.assists}`);
}

showPlayerInfor();
