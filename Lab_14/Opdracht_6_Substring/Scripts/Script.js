const setup = () => {
    // Als alles ingeladen is kan ik pas op de knop drukken
let btnSubstring = document.getElementById("btnSubstring");
btnSubstring.addEventListener("click",Substrings)

}
// alle elemententen in een variabel steken
let woord = document.getElementById("txtInput");
let plaats = document.getElementById("txtplaats");
let hoeveel = document.getElementById("txthoeveel");
let output = document.getElementById("output");
const Substrings = () => {
    // de elementen hun value in variabelen steken
    let tekst = woord.value;
    console.log(tekst);
    let plaat = plaats.value;
    console.log(plaat);
    let hoeveels = hoeveel.value;
    console.log(hoeveels);
    //Stubtring uitvoeren en in out steken
let out = tekst.substring(plaat,hoeveels)
    output.innerHTML = out;
}
window.addEventListener("load", setup);