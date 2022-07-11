const musicContainer = document.getElementById("music-container");
const headContainer = document.getElementById("head-container");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pauseBtn = document.getElementById("pause");

const playFolk = document.getElementById("play-folk");
const playRock = document.getElementById("play-rock");
const playMix = document.getElementById("play-mix");
const playMix2 = document.getElementById("play-mix2");

const song_title = document.getElementById("song-title");
const saveSong = document.getElementById("save-song");
const savedPlaylists = document.getElementById("saved-playlists");

const current_img = document.getElementById("current-img");
const current_title = document.getElementById("song-title");

const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");

const currTime = document.querySelector("#currTime");
const durTime = document.querySelector("#durTime");

const volume = document.getElementById("slider");

// song Titles
const songs = [
  "hey",
  "ukulele",
  "summer",
  "Podington Bear - Starling",
  "Monk Turner + Fascinoma - It's Your Birthday!",
  "Chad Crouch - Algorithms",
  "Broke for Free - Night Owl",
  "Black Ant - Fater Lee",
];
const folk = [
  "Jahzzar - The last ones",
  "Jason Shaw - RUNNING WATERS",
  "Micheal Chapman & the woodpiles - a strangers map of texas",
];
const rock = [
  "Jahzzar - Take Me Higher",
  "John Wesley Coleman - Tequila 10 Seconds",
  "Silence Is Sexy - Holiday (instrumental)",
];

// keep track
let songIndex = 1;

// initially load song

function loadSong(song) {
  song_title.innerText = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");

  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function playFolkSong() {
  loadSong(folk[songIndex]);

  musicContainer.classList.add("play");
  headContainer.classList.add("play");

  playFolk.querySelector("i.fa-solid").classList.remove("fa-play");
  playFolk.querySelector("i.fa-solid").classList.add("fa-pause");

  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseFolkSong() {
  headContainer.classList.remove("play");
  playFolk.querySelector("i.fa-solid").classList.add("fa-play");
  playFolk.querySelector("i.fa-solid").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function playRockSong() {
  loadSong(rock[songIndex]);

  musicContainer.classList.add("play");
  headContainer.classList.add("play");

  playRock.querySelector("i.fa-solid").classList.remove("fa-play");
  playRock.querySelector("i.fa-solid").classList.add("fa-pause");

  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseRockSong() {
  headContainer.classList.remove("play");
  playRock.querySelector("i.fa-solid").classList.add("fa-play");
  playRock.querySelector("i.fa-solid").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function playMixSong() {
  loadSong(songs[songIndex]);

  musicContainer.classList.add("play");
  headContainer.classList.add("play");

  playMix.querySelector("i.fa-solid").classList.remove("fa-play");
  playMix.querySelector("i.fa-solid").classList.add("fa-pause");
  playMix2.querySelector("i.fa-solid").classList.remove("fa-play");
  playMix2.querySelector("i.fa-solid").classList.add("fa-pause");

  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseMixSong() {
  headContainer.classList.remove("play");
  playMix.querySelector("i.fa-solid").classList.add("fa-play");
  playMix.querySelector("i.fa-solid").classList.remove("fa-pause");
  playMix2.querySelector("i.fa-solid").classList.add("fa-play");
  playMix2.querySelector("i.fa-solid").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;
  let newArray = [...songs, ...rock, ...folk];

  if (songIndex < 0) {
    songIndex = newArray.length - 1;
  }

  loadSong(newArray[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;
  let newArray = [...songs, ...rock, ...folk];

  if (songIndex > newArray.length - 1) {
    songIndex = 0;
  }

  loadSong(newArray[songIndex]);

  playSong();
}

function addSong() {
  const newSong = document.createElement("div");

  if (song_title > 1) {
    newSong = "";
  } else {
    newSong.innerHTML = `<h5>${song_title.innerText}</h5>`;
    savedPlaylists.appendChild(newSong);
  }
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function volumeChange() {
  audio.volume = volume.value / 100;
}

//get duration & currentTime for Time of song
function DurTime(e) {
  const { duration, currentTime } = e.srcElement;
  var sec;
  var sec_d;

  // define minutes currentTime
  let min = currentTime == null ? 0 : Math.floor(currentTime / 60);
  min = min < 10 ? "0" + min : min;

  // define seconds currentTime
  function get_sec(x) {
    if (Math.floor(x) >= 60) {
      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec = Math.floor(x) - 60 * i;
          sec = sec < 10 ? "0" + sec : sec;
        }
      }
    } else {
      sec = Math.floor(x);
      sec = sec < 10 ? "0" + sec : sec;
    }
  }

  get_sec(currentTime, sec);

  // change currentTime DOM
  currTime.innerHTML = min + ":" + sec;

  // define minutes duration
  let min_d = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
  min_d = min_d < 10 ? "0" + min_d : min_d;

  function get_sec_d(x) {
    if (Math.floor(x) >= 60) {
      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec_d = Math.floor(x) - 60 * i;
          sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
        }
      }
    } else {
      sec_d = isNaN(duration) === true ? "0" : Math.floor(x);
      sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
    }
  }

  // define seconds duration

  get_sec_d(duration);

  // change duration DOM
  durTime.innerHTML = min_d + ":" + sec_d;
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

saveSong.addEventListener("click", addSong);

volume.addEventListener("change", volumeChange);

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

playFolk.addEventListener("click", () => {
  const isFolkPlaying = headContainer.classList.contains("play");

  if (isFolkPlaying) {
    pauseFolkSong();
  } else {
    playFolkSong();
  }
});
playRock.addEventListener("click", () => {
  const isRockPlaying = headContainer.classList.contains("play");

  if (isRockPlaying) {
    pauseRockSong();
  } else {
    playRockSong();
  }
});
playMix.addEventListener("click", () => {
  const isMixPlaying = headContainer.classList.contains("play");

  if (isMixPlaying) {
    pauseMixSong();
  } else {
    playMixSong();
  }
});
playMix2.addEventListener("click", () => {
  const isMix2Playing = headContainer.classList.contains("play");

  if (isMix2Playing) {
    pauseMixSong();
  } else {
    playMixSong();
  }
});

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// Song ends
audio.addEventListener("ended", nextSong);

// Time of song
audio.addEventListener("timeupdate", DurTime);
