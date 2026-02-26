const teamHistory = [
  {
    name: "Messi",
    position: "Forward",
    nationality: "Argentina",
    seasons: {
      "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
      "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
      "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 },
    },
  },
  {
    name: "Ronaldo",
    position: "Forward",
    nationality: "Portugal",
    seasons: {
      "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
      "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
      "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
    },
  },
];

function generatePlayerSeasonReport(playerName, teamHistory) {
  // tạo biến player gán vào phần tử tìm được
  const player = teamHistory.find((p) => p.name === playerName);
  // không tồn tại thì return
  if (!player) {
    return `No player found with that name ${playerName}`;
  }

  // tồn tại thì tạo biến seasons trỏ tiếp vào object seasons ở bên trong
  const seasons = player.seasons;
  // tạo biến tích lũy sự nghiệp
  let careerStats = {
    totalMatches: 0,
    totalGoals: 0,
    totalAssists: 0,
    totalYellowCards: 0,
  };

  let bestSeason = null;
  let bestSeasonName = "";

  // Duyệt qua từng mùa
  for (let seasonName in seasons) {
    // tạo biến lưu trữ thông tin tại mùa có seasonName
    const season = seasons[seasonName];

    // Cộng vào biến tích lũy
    careerStats.totalMatches += season.matches;
    careerStats.totalGoals += season.goals;
    careerStats.totalAssists += season.assists;
    careerStats.totalYellowCards += season.yellowCards;
    
    // Tìm mùa tốt nhất
    if (
        // Chưa có mùa giải tốt nhất -> chọn 
      !bestSeason ||
      // So goals
      season.goals > bestSeason.goals ||
      // goals = nhau -> so assists
      (season.goals === bestSeason.goals && season.assists > bestSeason.assists)
    ) {
      bestSeason = season;
      bestSeasonName = seasonName;
    }
  }

// Trả về
return {
    name: player.name,
    position: player.position,
    nationality: player.nationality,
    careerStats,
    bestSeason: {
        bestSeasonName,
        ...bestSeason
    }
};
}

console.log(generatePlayerSeasonReport("Messi", teamHistory));
console.log(generatePlayerSeasonReport("Ronaldo", teamHistory));
console.log(generatePlayerSeasonReport("ABC", teamHistory));
