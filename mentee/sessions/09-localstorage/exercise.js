// ---------- storage ----------

  // Step 1:
  // I removed JSON.stringify() to deliberately break the storage.
  // localStorage.setItem("players", players);

  // Step 2:
  // The stored value was [object Object] for each player.

  // Step 3:
  // I restored JSON.stringify(), but the page still did not work
  // because the previously stored data was invalid.

function savePlayers() {
  localStorage.setItem("players", JSON.stringify(players));
}

  // Without valid JSON in Local Storage,
  // JSON.parse() throws a SyntaxError.
  
function loadPlayers() {
  const saved = localStorage.getItem("players");
  if (saved === null) {
    return [];
  }
  return JSON.parse(saved);
}

let players = loadPlayers();

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
  savePlayers();
  render();
}

function toggleFavourite(id) {
  const player = players.find((player) => player.id === id);

  if (player) {
    player.isFavourite = !player.isFavourite;
  }

  savePlayers();

  render();
}

function deletePlayer(id) {
  players = players.filter((player) => player.id !== id);
  savePlayers();
  render();
}

function deleteAllFavourites() {
  players = players.filter((player) => !player.isFavourite);
  savePlayers();
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

// ---------- Exercise 2: Modify ----------

/*
Putting JSON.stringify() back did not fix the problem
because Local Storage still contained the invalid data
([object Object]).

When I refreshed the page, JSON.parse() tried to parse
the invalid data and threw a SyntaxError.

To recover, I had to remove the corrupted data using
localStorage.removeItem("players") in the console.

After refreshing the page, the application worked again
because loadPlayers() returned an empty array.
*/