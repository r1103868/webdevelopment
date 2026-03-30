let openKaarten = []; // Houdt maximaal 2 open kaarten bij
let canClick = true;  // Blokkeert klikken tijdens timeout

const setup = () => {
    const buttton = document.getElementById("buttton");
    buttton.addEventListener("click", start);
};

const draaiKaart = (event) => {
    if (!canClick) return; // Klik blokkeren tijdens timeout
    const wrongSound = document.getElementById("wrongSound");
    wrongSound.play();
    const kaart = event.currentTarget;

    // Kaart mag alleen draaien als het de achterkant is en nog niet matched
    if (!kaart.classList.contains("achterkant") || kaart.classList.contains("matched")) return;

    kaart.style.backgroundImage = "url('" + kaart.dataset.image + "')";
    kaart.classList.remove("achterkant");

    openKaarten.push(kaart);

    if (openKaarten.length === 2) {
        canClick = false; // Blokkeer klikken
        const [kaart1, kaart2] = openKaarten;

        if (kaart1.dataset.image === kaart2.dataset.image) {
            // Match gevonden
            kaart1.classList.add("matched");
            kaart2.classList.add("matched");
            openKaarten = [];
            canClick = true; // Klikken weer toegestaan
        } else {
            // Geen match → draai terug na 1 seconde
            setTimeout(() => {
                kaart1.style.backgroundImage = "";
                kaart2.style.backgroundImage = "";
                kaart1.classList.add("achterkant");
                kaart2.classList.add("achterkant");
                openKaarten = [];
                canClick = true; // Klikken weer toegestaan
            }, 1000);
            wrongSound.play();
        }
    }
};

const start = () => {
    const buttton = document.getElementById("buttton");
    const playfield = document.getElementById("playField");
    playfield.innerHTML = "";

    let kaartenArray = [];

    // Voeg alle kaarten toe aan de array (2 van elk)
    for (let i = 1; i < 7; i++) {
        for (let j = 0; j < 2; j++) {
            kaartenArray.push("images/Afbeelding" + i + ".png");
        }
    }

    // Shuffle kaarten
    for (let i = kaartenArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [kaartenArray[i], kaartenArray[j]] = [kaartenArray[j], kaartenArray[i]];
    }

    // Voeg kaarten toe aan playfield
    kaartenArray.forEach(image => {
        const kaart = document.createElement("div");
        kaart.classList.add("kaart", "achterkant");

        kaart.dataset.image = image;
        kaart.addEventListener("click", draaiKaart);

        playfield.appendChild(kaart);
    });

    buttton.remove();
};

window.addEventListener("load", setup);