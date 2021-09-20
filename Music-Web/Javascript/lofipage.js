var playlist_songs = document.getElementById("playlist_songs")
var title = document.getElementById("title")
var audio = document.getElementById("audio")
var play_songs = document.getElementsByClassName("icon_play")
var song_wrapper = document.getElementById("song_wrapper")
var play_icon = document.querySelector("ion-icon")


let Songs = JSON.parse(localStorage.getItem("Lofi"))
console.log("Songs", Songs[0])

var Song = Songs[0]
console.log(play_songs)

var song_list = Song.lofi_songs

let html = ``
song_list.map((data, e) => {
    html = `
            <div class="song_wrapper" id="song_wrapper" key=${e}>
                <div class="song_section">
                    <p>${e+1}</p>
                    <div class="song_img">
                        <img src="${data.song_img}" alt=${data.song_title}>
                    </div>
                    <div class="song_cont">
                        <p class="song_name">${data.song_title}</p>
                    </div>
                </div>
                <audio src="${data.audio}" id="audio" type="audio/mp3"></audio>
                <div class="progress_section">
                    <ion-icon name="play-outline" class="icon_play" id="icon_play"></ion-icon>
                    <div class="progress_bar"></div>
                </div>
            </div>
            `
    console.log(html)
    playlist_songs.innerHTML += html

})


console.log(play_songs.length)

function playSong() {
    song_wrapper.classList.add("play")
    console.log("addedd")
}


for (var i = 0; i <= play_songs.length; i++) {
    var p_song = play_songs[i]

    p_song.addEventListener("click", (e) => {
        var p_btn_clicked = e.target

        if (p_btn_clicked == p_song) {
            console.log("SHitt yea")
        } else {
            console.log("deadd");
            // p_btn_clicked.parentNode.parentNode.children[1].pause()
        }


        p_btn_clicked.parentNode.parentNode.children[1].play()
        console.log(p_btn_clicked.parentNode.parentNode.children[0].children[2].children[0].innerHTML)
        console.log("kpp123")
        console.log("play icon :", play_icon.innerHTML)

        var isPlaying = song_wrapper.classList.contains("play")

        if (isPlaying) {
            p_btn_clicked.parentNode.parentNode.children[1].pause()
            song_wrapper.classList.remove("play")
            console.log(isPlaying)
        } else {
            p_btn_clicked.parentNode.parentNode.children[1].play()
            song_wrapper.classList.add("play")
            console.log(isPlaying)
        }

    })


}