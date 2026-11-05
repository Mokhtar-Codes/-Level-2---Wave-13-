// Session 04 — what you build in class, and the exercise.

console.log("make.js running");

// > Model data from something you care about — a playlist, a menu, a football squad, a reading list.

// > 1. An **array of at least 3 objects**. Each object has at least 3 properties, including **one number and one boolean**

// > 2. At least one object has **an array inside it** — tags, ingredients, positions

// > 3. **Two functions** that each take one object and **return** something

// > 4. Call them on items by index — `songs[0]`, `songs[2]` — and log the results

// > 5. **A reference test:** make a second variable pointing at one item (`const favourite = songs[0]`), change something through it, then log the original. Explain what happened in a comment

const players = [
  {
    name: "Francisco Lindor",
    homeRuns: 31,
    isStarting: true,
    positions: ["Shortstop"],
  },
  {
    name: "Juan Soto",
    homeRuns: 43,
    isStarting: false,
    positions: ["Left field", "Right field"],
  },
  {
    name: "Carson Benge",
    homeRuns: 21,
    isStarting: true,
    positions: ["Right field", "Left field", "Center field"],
  },
];

function getLineupStatus(player) {
  if (player.isStarting) {
    return "Starting";
  }
  return "On the bench";
}

function describePlayer(player) {
  return `${player.name} plays ${player.positions} and has ${player.homeRuns} home runs.`;
}

console.log(describePlayer(players[0])); // Lindor plays Shortstop and has 31 home runs.
console.log(getLineupStatus(players[0])); // Starting
console.log(describePlayer(players[2])); // Carson Benge plays RF,LF,CF and has 21 home runs.
console.log(getLineupStatus(players[2])); // Starting
console.log(getLineupStatus(players[1])); // On the bench

const favPlayer = players[0];
favPlayer.homeRuns = favPlayer.homeRuns + 1;
console.log(players[0]);
