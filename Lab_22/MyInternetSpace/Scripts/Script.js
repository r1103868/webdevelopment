// Deze functie wordt uitgevoerd wanneer de pagina geladen is
const setup = () => {
    let opslaan = []; // Array om links tijdelijk op te slaan
    let opslaanJSON = localStorage.getItem("opslaans"); // Haal opgeslagen data uit localStorage

    // Als er al opgeslagen gegevens zijn
    if (opslaanJSON !== null) {
        opslaans = JSON.parse(opslaanJSON); // Zet JSON om naar een array

        // Loop door alle opgeslagen links
        for (let i = 0; i < opslaans.length; i++) {
            opslaanveld = document.getElementById("opslaanveld"); // Container in HTML
            veld = document.createElement("div"); // Maak een div per item
            veld.classList.add("geschiedenis"); // Voeg class toe

            // Maak een knop
            go = document.createElement("button");
            go.textContent = "GO!";
            go.addEventListener("click", open(opslaans[i])); // Open link bij klik

            // Controleer of het een Google-link is
            if (opslaans[i].includes("google")) {
                titel = document.createElement("p");
                titel.textContent = "Google!";
                titel.style.color = "white";
                veld.appendChild(titel);

                veld.classList.add("google");
                go.classList.add("youtube");

                // Haal zoekterm uit URL
                zoek = document.createElement("p");
                zoek.textContent = opslaans[i].substring(32);
                zoek.style.color = "white";
                veld.appendChild(zoek);

                // Controleer of het een YouTube-link is
            } else if (opslaans[i].includes("youtube")) {
                titel = document.createElement("p");
                titel.textContent = "Youtube";
                titel.style.color = "white";
                veld.appendChild(titel);

                veld.classList.add("youtube");
                go.classList.add("youtubebutton");
                go.style.color = "white";

                zoek = document.createElement("p");
                zoek.textContent = opslaans[i].substring(45);
                zoek.style.color = "white";
                veld.appendChild(zoek);

                // Anders: Instagram-link
            } else {
                titel = document.createElement("p");
                titel.textContent = "Instagram";
                titel.style.color = "white";
                veld.appendChild(titel);

                veld.classList.add("instagram");
                go.classList.add("youtube");

                // Haal gebruikersnaam uit URL
                zoek = document.createElement("p");
                zoek.textContent = opslaans[i].split("/")[3];
                zoek.style.color = "white";
                veld.appendChild(zoek);
            }

            // Voeg knop toe aan div
            divgo = document.createElement("div");
            divgo.appendChild(go);
            veld.appendChild(divgo);

            // Voeg alles toe aan de pagina
            opslaanveld.appendChild(veld);

            // Voeg link toe aan array
            opslaan.push(opslaans[i]);
        }
    }

    // Knop om nieuwe link toe te voegen
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => link(opslaan));
};


// Functie die input verwerkt en juiste URL maakt
const link = (arr) => {
    tekst = document.getElementById("link"); // Inputveld
    tekst = tekst.value;

    pagina = tekst.substring(0,2); // Prefix (/y, /g, /i)
    console.log(pagina);

    zoekopdracht = tekst.substring(3,tekst.length); // Zoekterm
    console.log(zoekopdracht);

    // YouTube
    if (pagina === "/y") {
        url = "https://www.youtube.com/results?search_query=" + zoekopdracht;
        open(url);
        linken(url, arr);

        // Google
    } else if (pagina === "/g") {
        url = "https://www.google.com/search?q=" + zoekopdracht;
        open(url);
        linken(url, arr);

        // Instagram
    } else if (pagina === "/i") {
        url = "https://www.instagram.com/" + zoekopdracht + "/";
        open(url);
        linken(url, arr);

        // Refresh pagina
    } else if (tekst.toLowerCase() === "refresh") {
        location.reload();

        // Ongeldige prefix
    } else if (tekst.toLowerCase().substring(0,1) === "/") {
        alert("invalid prefix");

        // Geen prefix ingegeven
    } else {
        alert("geen prefix prefix");
    }
};


// Functie die nieuwe link toevoegt aan lijst + localStorage
const linken = (text, arr) => {
    opslaanveld = document.getElementById("opslaanveld");

    veld = document.createElement("div");
    veld.classList.add("geschiedenis");

    go = document.createElement("button");
    go.textContent = "GO!";
    go.addEventListener("click", open(text));

    // Google
    if(text.includes("google")) {
        titel = document.createElement("p");
        titel.textContent = "Google!";
        titel.style.color = "white";
        veld.appendChild(titel);

        veld.classList.add("google");
        go.classList.add("youtube");

        zoek = document.createElement("p");
        zoek.textContent = text.substring(32);
        zoek.style.color = "white";
        veld.appendChild(zoek);

        // YouTube
    } else if (text.includes("youtube")) {
        titel = document.createElement("p");
        titel.textContent = "Youtube";
        titel.style.color = "white";
        veld.appendChild(titel);

        veld.classList.add("youtube");
        go.classList.add("youtubebutton");
        go.style.color = "white";

        zoek = document.createElement("p");
        zoek.textContent = text.substring(45);
        zoek.style.color = "white";
        veld.appendChild(zoek);

        // Instagram
    } else {
        titel = document.createElement("p");
        titel.textContent = "Instagram";
        titel.style.color = "white";
        veld.appendChild(titel);

        veld.classList.add("instagram");
        go.classList.add("youtube");

        zoek = document.createElement("p");
        zoek.textContent = text.split("/")[3];
        zoek.style.color = "white";
        veld.appendChild(zoek);
    }

    // Voeg knop toe
    divgo = document.createElement("div");
    divgo.appendChild(go);
    veld.appendChild(divgo);

    // Voeg toe aan pagina
    opslaanveld.appendChild(veld);

    // Sla op in array en localStorage
    arr.push(text);
    console.log(arr);
    localStorage.setItem("opslaans", JSON.stringify(arr));
};

// Start setup wanneer pagina geladen is
window.addEventListener("load", setup);