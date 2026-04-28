const setup = () => {
    // Array waarin we alle opgeslagen kleuren bijhouden
    let aantal = [];

    // Haal opgeslagen kleuren uit localStorage
    let opslaanJSON = localStorage.getItem("sa");

    // Als er data bestaat in localStorage
    if (opslaanJSON !== null) {
        let opslaan = JSON.parse(opslaanJSON);

        // Loop door alle opgeslagen kleuren
        for (let i = 0; i < opslaan.length; i++) {

            // Maak een object per kleur
            let save = {
                id: opslaan[i].id,
                slider1: opslaan[i].slider1,
                slider2: opslaan[i].slider2,
                slider3: opslaan[i].slider3
            };

            // Voeg toe aan array
            aantal.push(save);

            // Maak een nieuw kleurvakje (div)
            let div = document.getElementById("test");
            let nieuw = document.createElement("div");
            nieuw.className = "colorDemo";

            // Koppel unieke id aan het HTML element
            nieuw.dataset.id = save.id;

            // Stel de achtergrondkleur in
            nieuw.style.backgroundColor =
                "rgb(" + save.slider1 + "," + save.slider2 + "," + save.slider3 + ")";

            // Voeg het vakje toe aan de pagina
            div.appendChild(nieuw);

            // Als je op een vakje klikt → zet die kleur als actieve kleur
            nieuw.addEventListener("click", (event) => {
                let colorDemo = document.getElementsByClassName("colorDemo");
                colorDemo[0].style.backgroundColor =
                    event.currentTarget.style.backgroundColor;
            });

            // Maak een verwijderknop (x)
            const removes = document.createElement("button");
            removes.textContent = "x";

            // Als je op de x klikt → verwijder uit DOM én localStorage
            removes.addEventListener("click", (event) => {
                event.stopPropagation(); // voorkomt dat klik ook de div activeert

                const parent = event.target.parentElement; // het vakje zelf
                const id = parent.dataset.id; // id ophalen

                // Haal huidige data op
                let data = JSON.parse(localStorage.getItem("sa")) || [];

                // Verwijder het juiste item
                data = data.filter(item => item.id !== Number(id));

                // Sla opnieuw op
                localStorage.setItem("sa", JSON.stringify(data));

                // Verwijder uit de pagina
                parent.remove();
            });

            // Voeg de knop toe aan het vakje
            nieuw.appendChild(removes);
        }
    }

    // Huidige sliderwaarden ophalen
    let huidge;
    let huidgeJSON = localStorage.getItem("aanpasbare");

    // Als er nog niets opgeslagen is → standaardwaarden
    if (huidgeJSON === null) {
        huidge = {
            slider1: 0,
            slider2: 0,
            slider3: 0
        };
    } else {
        // Anders: laad opgeslagen waarden
        huidge = JSON.parse(huidgeJSON);
    }

    // DOM elementen ophalen
    let colorDemos = document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");
    let btn = document.getElementById("save");

    // Save knop → sla huidige kleur op
    btn.addEventListener("click", () => save(aantal));

    // Zet sliders op vorige waarden
    sliders[0].value = huidge.slider1;
    sliders[1].value = huidge.slider2;
    sliders[2].value = huidge.slider3;

    // Stel kleur in op basis van sliders
    let kleur =
        "rgb(" + sliders[0].value + "," + sliders[1].value + "," + sliders[2].value + ")";

    colorDemos[0].style.backgroundColor = kleur;

    // Event listeners zodat kleur live verandert
    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
};

const update = () => {
    // Haal sliders en UI elementen op
    let sliders = document.getElementsByClassName("slider");
    let colorDemos = document.getElementsByClassName("colorDemo");
    let info = document.getElementsByClassName("info");

    // Maak kleur op basis van sliderwaarden
    let kleur =
        "rgb(" + sliders[0].value + "," + sliders[1].value + "," + sliders[2].value + ")";

    // Update kleurvak
    colorDemos[0].style.backgroundColor = kleur;

    // Toon waarden naast sliders
    info[0].innerHTML = sliders[0].value;
    info[1].innerHTML = sliders[1].value;
    info[2].innerHTML = sliders[2].value;

    // Sla huidige sliderwaarden op
    let aanpasbare = {
        slider1: sliders[0].value,
        slider2: sliders[1].value,
        slider3: sliders[2].value
    };

    localStorage.setItem("aanpasbare", JSON.stringify(aanpasbare));
};

const save = (arr) => {
    let sliders = document.getElementsByClassName("slider");
    let div = document.getElementById("test");

    // Nieuw kleurvak maken
    let nieuw = document.createElement("div");
    nieuw.className = "colorDemo";

    // RGB waarden ophalen
    const r = sliders[0].value;
    const g = sliders[1].value;
    const b = sliders[2].value;

    // Unieke id genereren
    let id = Date.now();

    // Object maken
    let save = {
        id: id,
        slider1: r,
        slider2: g,
        slider3: b
    };

    // Toevoegen aan array + opslaan
    arr.push(save);
    localStorage.setItem("sa", JSON.stringify(arr));

    // data-id koppelen aan div
    nieuw.dataset.id = id;

    // Kleur instellen
    nieuw.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    // Toevoegen aan pagina
    div.appendChild(nieuw);

    // Klik → zet als actieve kleur
    nieuw.addEventListener("click", (event) => {
        let colorDemo = document.getElementsByClassName("colorDemo");
        colorDemo[0].style.backgroundColor =
            event.currentTarget.style.backgroundColor;
    });

    // Verwijderknop maken
    const removes = document.createElement("button");
    removes.textContent = "x";

    // Klik → verwijderen uit DOM + storage
    removes.addEventListener("click", (event) => {
        event.stopPropagation();

        const parent = event.target.parentElement;
        const id = parent.dataset.id;

        let data = JSON.parse(localStorage.getItem("sa")) || [];
        data = data.filter(item => item.id !== Number(id));

        localStorage.setItem("sa", JSON.stringify(data));

        parent.remove();
    });

    nieuw.appendChild(removes);
};

// Start de app wanneer pagina geladen is
window.addEventListener("load", setup);