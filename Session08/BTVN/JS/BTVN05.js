const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1",
];

function reportTopPerformers(players) {
  const minPerformance = Number(prompt("Nhập hiệu suất tối thiểu: "));

  const total = players
    .map((player) => {
      const [name, , goals, assists] = player.split(" - ");
      const performance = Number(goals) + Number(assists);
      return { name, performance };
    })
    .filter((player) => player.performance >= minPerformance)
    .map((player) => {
      console.log(`${player.name}: ${player.performance}`);
      return player.performance;
    })
    .reduce((sum, performance) => sum + performance, 0);

  console.log("Tổng hiệu suất: ", total);
  return total;
}

reportTopPerformers(players);
