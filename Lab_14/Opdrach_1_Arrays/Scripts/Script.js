const setup = () => {
    // Array aan
const familieleden = ["Sep","Fred","Lien","Lee","Jezus"]
    console.log(familieleden.length)
    // 1 3 5 opvragen door de index
    console.log(familieleden[0],familieleden[2],familieleden[4])

    const opvragen = () => {
    // promt aanmaken en in een functie steken
    let voegtoe = prompt("Geef mij een naam")
        familieleden.push(voegtoe)
    }
    opvragen()
    console.log(familieleden)
    // In een string maken door een join
    console.log(familieleden.join("-"))
}
window.addEventListener("load", setup);