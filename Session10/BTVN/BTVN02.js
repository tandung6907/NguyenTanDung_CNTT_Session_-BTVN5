const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35,
};

function addPerformanceScore() {
  console.log(`Name: ${player.name}
Position: ${player.position}
Goals: ${player.goals}
Assists: ${player.assists}
Matches Played: ${player.matchesPlayed}
Performance Per Match: ${((player.goals + player.assists) / player.matchesPlayed).toFixed(2)}
isKeyPlayer: ${(player.goals + player.assists) / player.matchesPlayed > 1.0 ? "True" : "False"}`);
}

addPerformanceScore();
