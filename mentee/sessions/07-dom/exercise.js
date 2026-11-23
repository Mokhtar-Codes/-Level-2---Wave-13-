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
    isFavourite: true,
    positions: ["ST", "LW"],
  },
  {
    name: "Neymar",
    goals: 15,
    isFavourite: false,
    positions: ["LW", "CAM"],
  },
];

// TEST 1: Wrong ID
// const list = document.querySelector("#player-lsit");
// Error: Cannot set properties of null (setting 'textContent')
// Fix: Use the correct ID "player-list" instead of "player-lsit"

const list = document.querySelector("#player-list");
const summary = document.querySelector("#summary");

function createPlayerElement({ name, goals, isFavourite, positions }) {
  const item = document.createElement("li");

  item.textContent = `${name} - ${goals} goals - ${positions}`;

  if (isFavourite) {
    item.classList.add("favourite");
  }

  // TEST 2: I removed return item;
  // Result: The list displayed "undefined" three times.
  // Fix: Added return item back.
  return item;
}

function render() {
  // TEST 3: I removed list.textContent = "";
  // Result: Calling render() twice duplicated the players.
  // Fix: Restored the clearing line.
  list.textContent = "";

  if (players.length === 0) {
    summary.textContent = "No players in the squad.";
    return;
  }

  const favouriteCount = players.filter((player) => player.isFavourite).length;

  summary.textContent = `${players.length} players, ${favouriteCount} favourite(s).`;

  players.forEach((player) => {
    list.append(createPlayerElement(player));
  });
}

render();