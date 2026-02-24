const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

function filterPlayersByPosition(players) {
  const position = prompt(
    "Nhập vị trí cần tìm (Forward/Midfielder/Defender/Goalkeeper):",
  );

  if (position === null) return [];

  return players.filter((player) => {
    const playerPosition = player.split(" - ")[1];
    return playerPosition.toLowerCase() === position.toLowerCase();
  });
}

let result = filterPlayersByPosition(players);

console.log(result);
