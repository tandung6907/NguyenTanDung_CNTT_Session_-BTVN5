const playerName = [
  "messi",
  "ronaldo",
  "neymer",
  "de bruyne",
  "kante",
  "van dijk",
  "alisson",
];

function getUpperName(playerName) {
    return playerName.map(name => name.toUpperCase());
}

let upperName = getUpperName(playerName);

console.log(upperName);