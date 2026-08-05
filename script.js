console.log("Lets run the JS");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}


async function getsongs() {
  let a = await fetch("http://127.0.0.1:3000/songs/");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");

  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];

    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }

  return songs;
}

const playMusic = (track,pause=false)=>{
 
  currentSong.src = "\\songs\\" +track;
  if(!pause){
    currentSong.play()
   play.src="pause.svg"
  }

  currentSong.play();
document.querySelector(".songinfo").textContent =
    decodeURIComponent(track.split("/").pop());
   document.querySelector(".songtime ").innerHTML ="00:00/00:00"
}
let currentSong=new Audio();
async function main() {
  
  // get the list of all songs
  let songs = await getsongs();
  playMusic(songs[0],true)

  // showa all the songs in playlist
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];

  for (const song of songs) { 
    songUL.innerHTML += `<li>
          <img class="invert" src="music.svg" alt="">

              <div class="info">
                <div>${decodeURIComponent(song).split("\\songs\\")[1]}</div>
                <div></div>
              </div>
              <div class="playNow">

                <span>Play Now</span>
                <img class="invert" src="play.svg" alt="">

              </div>
   </li>`;
  }

  // attach an event listner to each song
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li"),
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML.trim());
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    })
  })

  // atttach an event listner to play,next and previous 
  play.addEventListener("click",()=>{
    if( currentSong.paused ){
      currentSong.play()
      play.src="pause.svg"
    }
    else{
      currentSong.pause()
      play.src="play.svg"
    }
  })
  // Listen for time update event
  currentSong.addEventListener("timeupdate",()=>{
    console.log(currentSong.currentTime,currentSong.duration)
    document.querySelector(".songtime").innerHTML =
    `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`
  })
  
}
 
main();
