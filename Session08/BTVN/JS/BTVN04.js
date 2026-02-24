const players = [
  "Messi - Forward - 25",
  "Ronaldo - Forward - 30",
  "Neymar - Forward - 18",
  "De Bruyne - Midfielder - 8",
  "Kante - Midfielder - 2",
  "Van Dijk - Defender - 5",
  "Alisson - Goalkeeper - 0",
];

function getReversedNames(players) {
  return players
    .map((player) => player.split(" - ")[0])
    .reverse();
}

let result = getReversedNames(players);

console.log(result);

/*
CÁCH KHÁC DÙNG REDUCE()
function getReversedNames(players) {
  return players.reduce((acc, player) => {
    const name = player.split(" - ")[0];
    acc.unshift(name);
    return acc;
  }, []);
}
*/