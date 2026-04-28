const global = {
    score: 0
}
const setup = () => {
let play = document.getElementById("play");
play.addEventListener("click", startgame)
}
    const score = () => {
        let foto = document.getElementById("img");
        if(foto.src.includes("Images/" + 0 + ".png")){
            alert("Game over je score is " + global.score);
        } else
        {
            global.score ++;
            toon = document.getElementById("hits");
            toon.textContent = "aantal hits " + global.score;
        }
    }
const verplaats = () => {
    let foto = document.getElementById("img");
    let hoogte = Math.random() * 750;
    let width = Math.random() * 550
    foto.style.marginLeft = width + "px";
    foto.style.marginTop = hoogte + "px";
}
const veranderfoto = () => {
    let foto = document.getElementById("img");
    let keuze = Math.round(Math.random() * 4);
    foto.src = "Images/" +keuze + ".png";
}
const startgame = () => {
    veranderfoto();
    let play = document.getElementById("play");
    play.style.display = "none"
    let foto = document.getElementById("img");
    foto.addEventListener("click", score);
    foto.addEventListener("click", verplaats);
    setInterval(veranderfoto, 5000)
}
window.addEventListener("load", setup);