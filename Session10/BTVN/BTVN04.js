const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];

function analyzeSalary(minYears, teamPlayers) {
  let filtered = teamPlayers.filter((p) => p.years >= minYears);
  if (filtered.length === 0) {
  console.log(`Total salary: 0,
Highest Salary: null,
Lowest Salary: null`);
    return;
  }

  let totalSalary = filtered.reduce((sum, p) => sum + p.salary, 0);

  let highestPaid = filtered.reduce((max, p) => {
    return p.salary > max.salary ? p : max
  });

  let lowestPaid = filtered.reduce((min, p) => {
    return p.salary < min.salary ? p : min
  });

  console.log(`Total salary: ${totalSalary},
Highest Salary: { Name: ${highestPaid.name}, Years: ${highestPaid.years}, Salary: ${highestPaid.salary} },
Lowest Salary: { Name: ${lowestPaid.name}, Years: ${lowestPaid.years}, Salary: ${lowestPaid.salary} }`);
}

analyzeSalary(10, players);
analyzeSalary(30, players);