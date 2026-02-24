const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

let displayPlayers = "--- DANH SÁCH CẦU THỦ ---\n"
players.forEach(p => {
    displayPlayers += `+ ${p}\n`
});

console.log(displayPlayers);
