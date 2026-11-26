// Session 07 — what you build in class, and the exercise.

console.log("make.js running");

// DOM Challenge — My Song List 🎵

// The goal

// Turn an array of JavaScript objects into a dynamic webpage that displays a list of songs, highlights favourite songs, and shows a summary.

// Your HTML should not contain any hardcoded songs. JavaScript should generate them using the data provided.

// 1.  HTML — Build the structure
// 2. CSS — Style your favourites
// 3. JavaScript — Bring your page to life

//Starter Data

const songs = [
  { title: "Blue", plays: 12, isFavourite: true },
  { title: "Rush", plays: 40, isFavourite: false },
  { title: "Home", plays: 3, isFavourite: false },
];

// const summary = document.getElementById("summary");
// const songContainer = document.getElementById("song-list");

function getSummary(songs) {
  totalSongs = songs.length;
  totalFavorites = songs.filter((song) => song.isFavourite).length;
  return `${totalFavorites} favourites of ${totalSongs}`;
}

// function createSongElement(song) {
//     const songElement = document.createElement("li");
//     songElement.innerText = `${song.title} - ${song.plays} plays`;
//     if(song.isFavourite) {
//         songElement.classList.add("favourite");
//     }

//     return songElement;
// }

function appendSongElement(song, container) {
  container.append(song, container);
}

// function renderSongs(songs, summary, container) {
//     summary.innerText = getSummary(songs);
//     songs.forEach((song) => appendSongElement(song, container));
// }

// renderSongs(songs, summary, songContainer);

const summary = document.getElementById("summary");
const songContainer = document.getElementById("song-list");

function createSongElement({ title, plays, isFavourite }) {
  const songElement = document.createElement("li");
  songElement.textContent = `${title} - ${plays} plays`;

  if (isFavourite) {
    songElement.classList.add("favourite");
  }

  return songElement;
}

function renderSongs() {
  songContainer.textContent = "";

  if (songs.length === 0) {
    summary.textContent = "Nothing here yet";
    return;
  }

  songs.forEach((song) => {
    songContainer.append(createSongElement(song));
  });

  const favourites = songs.filter((song) => song.isFavourite).length;

  summary.textContent = `${favourites} favourites of  ${songs.length}`;
}

renderSongs();
