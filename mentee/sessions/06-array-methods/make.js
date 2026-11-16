// Session 06 — what you build in class, and the exercise.

console.log("make.js running");

// > 1. Your **count** → `filter(...).length`
// > 2. Your **filter** loop → `filter`
// > 3. Your **find** loop → `find`, **with a check for not-found**
// > 4. Your **transform** loop → `map`
// > 5. **Keep your sum as a `for...of` loop.** Write a comment saying why you didn't convert it
// > 6. One **chain**: `filter` then `map`, in one statement

// const players = [
//   {
//     name: "Francisco Lindor",
//     homeRuns: 31,
//     isStarting: true,
//     positions: ["Shortstop"],
//   },
//   {
//     name: "Juan Soto",
//     homeRuns: 43,
//     isStarting: false,
//     positions: ["Left field", "Right field"],
//   },
//   {
//     name: "Carson Benge",
//     homeRuns: 21,
//     isStarting: true,
//     positions: ["Right field", "Left field", "Center field"],
//   },
// ];

// function itemDescription(players) {
//   const description = [];

//   for (const player of players) {
//     const { name, homeRuns } = player;

//     description.push(`Player name: ${name} - Home Runs: ${homeRuns}`);
//   }
//   return description;
// }

// console.log(itemDescription(players));

//.map
// function itemDescription(players) {
//   return players.map((player) => {
//     const { name, homeRuns } = player;
//     return `Player name: ${name} - Home Runs: ${homeRuns}`;
//   });
// }

// console.log(itemDescription(players));

//
// function matchCount(player) {
//   let count = 0;
//   for (let i = 0; i < player.length; i++) {
//     if (player[i].isStarting) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(matchCount(players));

//.filter
// function matchCount(players) {
//   return players.filter((player) => player.isStarting).length;
// }

// console.log(matchCount(players));

// function homeRunTotal(players) {
//   let total = 0;
//   for (let i = 0; i < players.length; i++) {
//     total += players[i].homeRuns;
//   }
//   return total;
// }

// sum for of
// function homeRunTotal(players) {
//   let total = 0;
//   for (const player of players) {
//     total += player.homeRuns;
//   }
//   return total;
// }
// console.log(homeRunTotal(players));

// function findPlayer(players) {
//   for (const player of players) {
//     if (player.name === "Juan Soto") {
//       return player;
//     }
//   }

//   return null;
// }

// console.log(findPlayer(players));
//.find
// const findPlayer = players.find(
//   (player) => player.name === "Carson Beng" || "Not Found",
// );

// console.log(findPlayer);

// function findPlayer(players, name) {
//   const existingPlayer = players.find((player) => player.name === name);

//   if (!existingPlayer) {
//     return "Not Found";
//   }

//   return existingPlayer;
// }

// console.log(findPlayer(players, "Carson Beng"));

// const findCarson1 = players.find((player) => {
//   if (player.name === "Carson Benge") {
//     return player.name;
//   }
//   return "Not found";
// });
// console.log(findCarson1);

// let x = 0;
// let y = "0";

// console.log(typeof x);
// console.log(typeof y);

// console.log(x == y);
// console.log(x === y);

// function listOfPlayers(player) {
//   for (let i = 0; i < player.length; i++) {
//     return `#${i + 1}: ${player[i].name} - Home Runs: ${player[i].homeRuns}`;
//   }
// }

// transer map and numbered list

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

function listOfPlayers(player) {
  return player.map((player, index) => {
    return `${index + 1} ${player.name} Home Runs ${player.homeRuns}`;
  });
}

console.log(listOfPlayers(players));

// function printKeyboardList(keyboards) {
//     // for(i = 0; i < keyboards.length; i++) {
//     //     console.log(`1. ${keyboards[i].name}`);
//     // }

//     keyboards.map((keyboard, index) => console.log(`${index + 1}. ${keyboard.name}`));

//     return null;
// }
// // printKeyboardList(keyboards);
