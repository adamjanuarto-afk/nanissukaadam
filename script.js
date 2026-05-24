// Efek Ketikan Nama
const text = "DANISSA SYAHIRA UTOMO";
let index = 0;
function type() {
    if (index < text.length) {
        document.querySelector(".typed-name").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}
window.onload = type;

// Fungsi Musik
function playMusic() {
    const audio = document.getElementById("myAudio");
    audio.play();
    document.getElementById("surprise-btn").style.display = "none";
}