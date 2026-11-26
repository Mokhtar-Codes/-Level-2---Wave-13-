// ---------- data ----------

let players = [
  {
    id: 1,
    name: "Messi",
    goals: 30,
    isFavourite: false,
    positions: ["RW", "CAM"],
  },
  {
    id: 2,
    name: "Ronaldo",
    goals: 25,
    isFavourite: true,
    positions: ["ST", "LW"],
  },
  {
    id: 3,
    name: "Neymar",
    goals: 15,
    isFavourite: false,
    positions: ["LW", "CAM"],
  },
];

const list = document.querySelector("#player-list");
const summary = document.querySelector("#summary");
const form = document.querySelector("#player-form");
const input = document.querySelector("#player-input");
const goalsInput = document.querySelector("#goals-input");
const positionsInput = document.querySelector("#positions-input");
const deleteFavouritesButton = document.querySelector("#delete-favourites");

// ---------- data changes ----------

function addPlayer(name, goals, positions) {
  const newPlayer = {
    id: Date.now(),
    name,
    goals,
    isFavourite: false,
    positions,
  };

  players.push(newPlayer);
  render();
}

function toggleFavourite(id) {
  const player = players.find((player) => player.id === id);

  if (player) {
    player.isFavourite = !player.isFavourite;
  }

  render();
}

function deletePlayer(id) {
  players = players.filter((player) => player.id !== id);
  render();
}

// 1. The listener goes outside createPlayerElement() because this is one page-level button, not a button created for each player.
// 2. We use filter() to keep only players whose isFavourite is false.

function deleteAllFavourites() {
  players = players.filter((player) => !player.isFavourite);
  render();
}

// ---------- drawing ----------

function createPlayerElement(player) {
  const { id, name, goals, isFavourite, positions } = player;

  const item = document.createElement("li");

  item.textContent = `${name} - ${goals} goals - ${positions}`;

  if (isFavourite) {
    item.classList.add("favourite");
  }

  const toggleButton = document.createElement("button");
  toggleButton.textContent = isFavourite ? "Unfavourite" : "Favourite";
  toggleButton.addEventListener("click", () => toggleFavourite(id));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deletePlayer(id));

  item.append(toggleButton, deleteButton);

  return item;
}

function render() {
  list.textContent = "";

  if (players.length === 0) {
    summary.textContent = "No players in the squad.";
    return;
  }

  players.forEach((player) => {
    list.append(createPlayerElement(player));
  });

  const favouriteCount = players.filter((player) => player.isFavourite).length;

  summary.textContent = `${players.length} players, ${favouriteCount} favourite(s).`;
}


// ---------- listening ----------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input.value.trim();
  const goalsText = goalsInput.value.trim();
  const positionsText = positionsInput.value.trim();

  if (!name || !goalsText || !positionsText) return;

  const goals = Number(goalsText);
  const positions = positionsText.split(",");

  addPlayer(name, goals, positions);

  input.value = "";
  goalsInput.value = "";
  positionsInput.value = "";
});

deleteFavouritesButton.addEventListener("click", () => {
  deleteAllFavourites();
});

render();
