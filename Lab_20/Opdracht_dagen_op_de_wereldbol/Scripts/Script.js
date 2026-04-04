const setup = () => {
    let button = document.getElementById('buttton');
    button.addEventListener('click', berekenen);
}
const berekenen = () => {

    // Haal het inputveld op waarin de geboortedatum staat
    let datumstring = document.getElementById('geboortejaar');

    // Maak een Date-object van de ingevoerde datum
    let gb = new Date(datumstring.value);

    // Bereken het verschil in milliseconden tussen nu en de geboortedatum
    let totaal = Date.now() - gb;

    // Zet milliseconden om naar dagen:
    // /1000 → seconden
    // /60 → minuten
    // /60 → uren
    // /24 → dagen
    // Math.floor → afronden naar beneden (gehele dagen)
    let dagen = Math.floor(totaal / 1000 / 60 / 60 / 24);
    console.log(dagen);
}
window.addEventListener("load", setup);