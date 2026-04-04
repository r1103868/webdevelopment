// Globale variabele waarin alle personen worden bewaard
let global = {
    personen: []
};

// Functie die wordt uitgevoerd wanneer je op "Bewaar" klikt
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // Waarden uit de inputvelden halen
    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById("txtFamilienaam").value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let kinderen = document.getElementById("txtAantalKinderen").value;

    // Validatie uitvoeren (controle op fouten)
    valideer();

    // Enkel verder gaan als er GEEN fouten zijn
    if (document.querySelectorAll(".invalid").length === 0) {

        // Nieuw persoon-object maken met de ingevoerde gegevens
        let persoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            geboortedatum: geboortedatum,
            email: email,
            kinderen: kinderen
        };

        // De lijst (select element) ophalen
        let lijst = document.getElementById("lstPersonen");

        // Kijken of er een persoon geselecteerd is
        let index = lijst.selectedIndex;

        if (index === -1) {
            // GEEN selectie → nieuwe persoon toevoegen

            // Toevoegen aan de array
            global.personen.push(persoon);

            // Nieuwe option maken voor de lijst
            let option = document.createElement("option");

            // Value = positie in de array
            option.value = global.personen.length - 1;

            // Tekst die zichtbaar is in de lijst
            option.text = persoon.voornaam + " " + persoon.familienaam;

            // Option toevoegen aan de lijst
            lijst.appendChild(option);

        } else {
            // WEL selectie → bestaande persoon aanpassen

            // Gegevens overschrijven in de array
            global.personen[index] = persoon;

            // Ook de naam in de lijst aanpassen
            lijst.options[index].text =
                persoon.voornaam + " " + persoon.familienaam;
        }
    }
};

// Functie voor de knop "Nieuw"
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Alle inputvelden leegmaken
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    // Selectie in de lijst verwijderen
    document.getElementById("lstPersonen").selectedIndex = -1;
};

// Functie die wordt uitgevoerd wanneer je een persoon selecteert in de lijst
const aanpassentekst = () => {
    let lijst = document.getElementById("lstPersonen");

    // Index van geselecteerde persoon
    let i = lijst.selectedIndex;

    // Alleen uitvoeren als er effectief iets geselecteerd is
    if (i !== -1) {

        // Persoon ophalen uit de array
        let persoon = global.personen[i];

        // Gegevens in de inputvelden zetten
        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.kinderen;
    }
};

// Setup functie die wordt uitgevoerd wanneer de pagina geladen is
const setup = () => {

    // Event listener voor knop "Bewaar"
    document.getElementById("btnBewaar")
        .addEventListener("click", bewaarBewerktePersoon);

    // Event listener voor knop "Nieuw"
    document.getElementById("btnNieuw")
        .addEventListener("click", bewerkNieuwePersoon);

    // Event listener wanneer selectie verandert in de lijst
    document.getElementById("lstPersonen")
        .addEventListener("change", aanpassentekst);
};

// Zorgt ervoor dat setup wordt uitgevoerd zodra de pagina geladen is
window.addEventListener("load", setup);