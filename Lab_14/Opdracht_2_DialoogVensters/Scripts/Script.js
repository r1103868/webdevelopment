const setup = () => {
    // Mededeling maken
window.alert("Dit is een mededeling");
// confirm mededeling
window.confirm("Weet u het zeker");
// prompt opvragen
window.prompt("Weet is u naam", "onbekend");

//confirm in en variable steken
let conf = window.confirm("Wet u het zeker?");
console.log(conf);
}
// prompot in een variabel steken
let prompt = window.prompt("Dit is een mededeling");
console.log(prompt);

window.addEventListener("load", setup);
