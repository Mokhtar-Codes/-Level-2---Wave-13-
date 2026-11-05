/* 1. Parsons

```js
const weather = {
  city: "Lisbon",
  days: [
    { date: "Mon", condition: "Sunny" },
    { date: "Tue", condition: "Cloudy" },
  ],
};
```
Goal output: `Cloudy` — one step per line.*/

// A => B => C 

const days = weather.days;
const tuesday = days[1];
console.log(tuesday.condition); // console.log(weather.days[1].condition);


/* 2. Modify

> Add a function to your Make task that takes one object and **changes** it — for example, `markFavourite(song)` sets `isFavourite` to `true`. It shouldn't return anything.
>
> Before running it, predict: after `markFavourite(songs[2])`, what's `songs[2].isFavourite`?
>
> Then run it, and write one sentence: **why did this work, when `f(x)` in today's warm-up didn't change `x`? */


// ARRAY OF OBJECTS

const players = [
  {
    name: "Messi",
    goals: 30,
    isFavourite: false,
    positions: ["RW", "CAM"],
  },
  {
    name: "Ronaldo",
    goals: 25,
    isFavourite: false,
    positions: ["ST", "LW"],
  },
  {
    name: "Neymar",
    goals: 15,
    isFavourite: false,
    positions: ["LW", "CAM"],
  },
];

// Each object contains:
// - name: string
// - goals: number
// - isFavourite: boolean
// - positions: array of strings


// FUNCTION 1 — GET PLAYER NAME
// Takes one player object and returns its name.

function getName(player) {
  return player.name;
}

// FUNCTION 2 — CHECK TOP SCORE
// Takes one player object.
// Returns true if the player scored at least 20 goals.
// Otherwise, returns false.

function isTopScorer(player) {
  return player.goals >= 20;
}

// CALL FUNCTIONS USING ARRAY INDEXE

console.log(getName(players[0]));
// Output: Messi

console.log(getName(players[2]));
// Output: Neymar

console.log(isTopScorer(players[0]));
// Output: true

console.log(isTopScorer(players[2]));
// Output: false

// REFERENCE TEST

// Create another variable pointing to the first player.
const favourite = players[0];

// Modify the object through the new variable.
favourite.goals = 40;

// Check the original object.
console.log(players[0].goals);
// Output: 40

// Explanation:
// favourite and players[0] reference the same object. No new object was created. Therefore, modifying favourite. goals also changes players[0].goals.

// FUNCTION THAT MODIFIES AN OBJECT
// This function takes one player object and modifies it. It does not explicitly return anything.

function markFavourite(player) {
  player.isFavourite = true;
}

// PREDICTION BEFORE RUNNING

// Prediction:
// After calling markFavourite(players[2]),
// players[2].isFavourite will become true.

// Before modification:

console.log(players[2].isFavourite);
// Output: false

// CALL THE MODIFYING FUNCTION

markFavourite(players[2]);

// VERIFY THE RESULT AFTER MODIFICATION

console.log(players[2].isFavourite);
// Output: true

// FINAL EXPLANATION

// Why did this work when f(x) in the warm-up did not change x?

// Objects are passed by value of their reference, so the function can modify properties of the original object. In the warm-up, x was a primitive, so changing the local parameter did not change x (Copy).