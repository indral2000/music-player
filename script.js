const audio = document.getElementById('audio');
let currentSongIndex = 0;

// Daftar lagu dengan judul
const songs = [
    { title: 'Foster The People - Pumped Up Kicks', path: 'music/song1.mp3' },
    { title: 'twenty one pilots - Jumpsuit', path: 'music/song3.mp3' },
    { title: 'Dr. Dre - I Need A Doctor ft. Eminem, Skylar Grey', path: 'music/song4.mp3' },
    { title: 'Eminem - Mockingbird', path: 'music/song2.mp3' },
    { title: 'Eminem - Lose Yourself', path: 'music/song5.mp3' },
    { title: 'Eminem - The Real Slim Shady', path: 'music/song6.mp3' },
    { title: 'Eminem - Godzilla ft. Juice WRLD', path: 'music/song7.mp3' },
    { title: 'Eminem - Without Me', path: 'music/song8.mp3' },
    { title: 'Eminem - Rap God ', path: 'music/song9.mp3' },
    { title: 'Eminem - Venom', path: 'music/song10.mp3' },
    { title: 'Eminem - Temporary feat. Skylar Grey', path: 'music/song11.mp3' },
    { title: 'Eminem ft. Rihanna - The Monster', path: 'music/song12.mp3' },
];

// Fungsi untuk memuat lagu berdasarkan path dan judul
function loadSong(path, title) {
    audio.src = path;
    document.getElementById('song-title').innerText = title;
    audio.play();
}

// Fungsi untuk memutar atau menjeda lagu
function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Fungsi untuk beralih ke lagu berikutnya
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex].path, songs[currentSongIndex].title);
}

// Fungsi untuk kembali ke lagu sebelumnya
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex].path, songs[currentSongIndex].title);
}

// Muat lagu pertama saat halaman dimuat
loadSong(songs[0].path, songs[0].title);

// Event listener untuk otomatis beralih ke lagu berikutnya saat lagu selesai
audio.addEventListener('ended', nextSong);

// Fungsi untuk menyaring lagu berdasarkan input pencarian
function filterSongs() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const songList = document.getElementById('song-list');
    const listItems = songList.getElementsByTagName('li');

    Array.from(listItems).forEach(item => {
        const songTitle = item.textContent.toLowerCase();
        item.style.display = songTitle.includes(searchInput) ? 'block' : 'none';
    });
}