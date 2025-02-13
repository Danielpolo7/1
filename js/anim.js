var audio = document.querySelector("#audio");
var lyrics = document.querySelector("#lyrics");

/*audio.addEventListener("play", function() {
  console.log("Audio está reproduciéndose");
});*/

document.addEventListener("click", function() {
  audio.muted = false;
  audio.volume = 1;
  var playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      console.log("Audio reproduciéndose");
    }).catch(error => {
      console.log("No se pudo reproducir el audio:", error);
    });
  }
}, { once: true });



var lyricsData = [
  { text: "Ooh", time: 2 },
  { text: "I", time: 5 },
  { text: "I just woke up from a dream", time: 8 },
  { text: "Where you and I had to say goodbye", time: 13 },
  { text: "And I don't know what it all means", time: 18 },
  { text: "But since I survived, I realized", time: 22 },
  { text: "Wherever you go, that's where I'll follow", time: 26 },
  { text: "Nobody's promised tomorrow", time: 32 },
  { text: "So I'ma love you every night like it's the last night", time: 36 },
  { text: "Like it's the last night", time: 38 },
  { text: "If the world was ending, I'd wanna be next to you", time: 44 },
  { text: "If the party was over and our time on Earth was through", time: 53 },
  { text: "I'd wanna hold you just for a while", time: 61 },
  { text: "And die with a smile", time: 65 },
  { text: "If the world was ending, I'd wanna be next to you", time: 71 },
  { text: "Woo-ooht", time: 79 },
  { text: "Ooh, lost", time: 82 },
  { text: "Lost in the words that we scream", time: 86 },
  { text: "I don't even wanna do this anymore", time: 91 },
  { text: "'Cause you already know what you mean to me", time: 95 },
  { text: "And our love's the only war worth fighting for", time: 99 },
  { text: "Wherever you go, that's where I'll follow", time: 105 },
  { text: "Nobody's promised tomorrow", time: 109 },
  { text: "So I'ma love you every night like it's the last night", time: 114 },
  { text: "Like it's the last night", time: 117 },
  { text: "If the world was ending, I'd wanna be next to you", time: 122 },
  { text: "TE QUIERO UN POQUITO MUCHITO <3.", time: 128 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 216000);