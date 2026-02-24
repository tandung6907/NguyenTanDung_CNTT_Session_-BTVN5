const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(players) {
  const minGoals = Number(prompt("Nhập số bàn thắng tối thiểu: "));
  if (isNaN(minGoals)) return;

  const grouped = players
    .map((player) => {
      const [name, position, goals, assists, matches] = player.split(" - ");
      return {
        name,
        position,
        goals: Number(goals),
        assists: Number(assists),
        matches: Number(matches),
      };
    })

    .filter((player) => player.goals >= minGoals)

    .reduce((acc, player) => {
      if (!acc[player.position]) {
        acc[player.position] = {
          count: 0,
          totalGoals: 0,
          totalAssists: 0,
          totalMatches: 0,
        };
      }

      acc[player.position].count += 1;
      acc[player.position].totalGoals += player.goals;
      acc[player.position].totalAssists += player.assists;
      acc[player.position].totalMatches += player.matches;

      return acc;
    }, {});

  if (Object.keys(grouped).length === 0) {
    console.log("Không có cầu thủ nào đạt điều kiện.");
    return;
  }
  Object.entries(grouped).forEach(([position, stats]) => {
    const totalPerformance = stats.totalGoals + stats.totalAssists;
    const avgPerformance = (totalPerformance / stats.totalMatches).toFixed(2);

    console.log(`\nVị trí: ${position}`);
    console.log(`Số cầu thủ: ${stats.count}`);
    console.log(`Tổng bàn thắng: ${stats.totalGoals}`);
    console.log(`Tổng kiến tạo: ${stats.totalAssists}`);
    console.log(`Tổng số trận: ${stats.totalMatches}`);
    console.log(`Trung bình hiệu suất/trận: ${avgPerformance}`);
  });
}

reportByPosition(players);
