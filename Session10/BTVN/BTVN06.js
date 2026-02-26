const players = [
  {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
    matches: 34,
    yellowCards: 2,
  },
  {
    name: "Ronaldo",
    position: "Forward",
    age: 39,
    goals: 30,
    assists: 10,
    matches: 38,
    yellowCards: 4,
  },
  {
    name: "Neymar",
    position: "Forward",
    age: 32,
    goals: 18,
    assists: 20,
    matches: 32,
    yellowCards: 3,
  },
  {
    name: "De Bruyne",
    position: "Midfielder",
    age: 33,
    goals: 8,
    assists: 25,
    matches: 35,
    yellowCards: 1,
  },
  {
    name: "Kante",
    position: "Midfielder",
    age: 33,
    goals: 2,
    assists: 5,
    matches: 36,
    yellowCards: 0,
  },
  {
    name: "Van Dijk",
    position: "Defender",
    age: 33,
    goals: 5,
    assists: 3,
    matches: 33,
    yellowCards: 2,
  },
  {
    name: "Alisson",
    position: "Goalkeeper",
    age: 31,
    goals: 0,
    assists: 1,
    matches: 37,
    yellowCards: 0,
  },
];

function generateRankingReport(minMatches, players) {
  let filtered = players.filter((p) => p.matches >= minMatches);
  if (filtered.length === 0) {
    console.log("No player");
    return;
  }
  let ranked = filtered
    .map((player, index) => {
      let performanceScore = Number(
        ((player.goals + player.assists) / player.matches).toFixed(2),
      );

      let efficiencyScore = Number(
        (performanceScore - (player.yellowCards / player.matches) * 10).toFixed(
          2,
        ),
      );

      return {
        ...player,
        performanceScore,
        efficiencyScore,
        originalIndex: players.indexOf(players),
      };
    })
    .sort((a, b) => {
      if (a.efficiencyScore !== b.efficiencyScore) {
        return b.efficiencyScore - a.efficiencyScore;
      }
      if (a.performanceScore !== b.performanceScore) {
        return b.performanceScore - a.performanceScore;
      }
      if (a.goals !== b.goals) {
        return b.goals - a.goals;
      }
      return a.originalIndex - b.originalIndex;
    });

  // ====== IN BÁO CÁO ======
  console.log("XẾP HẠNG ĐỘI BÓNG (từ minMatches trở lên)");

  ranked.forEach((player, index) => {
    console.log(
      `${index + 1}. ${player.name} - Efficiency: ${
        player.efficiencyScore
      } | Performance: ${player.performanceScore} | Goals: ${player.goals}`,
    );
  });

  console.log(`\nTổng số cầu thủ xếp hạng: ${ranked.length}`);

  console.log(`\nCầu thủ xuất sắc nhất: ${ranked[0].name}`);

  let top3 = ranked.slice(0, 3);
  let avgEfficiency =
    top3.reduce((sum, p) => sum + p.efficiencyScore, 0) / top3.length;

  console.log(`\nTrung bình efficiency top 3: ${avgEfficiency.toFixed(2)}`);
}

generateRankingReport(35, players);
