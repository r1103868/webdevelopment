const setup = () => {
    let knop = document.getElementById("but");
    knop.addEventListener("click", Bereken)
}
    const Bereken = () => {
        let prijs = document.getElementsByClassName("prijs")
        let BTw = document.getElementsByClassName("btw")
        let aantal = document.getElementsByClassName("nummers")
        let subtotaal = document.getElementsByClassName("subtotaal");
        let tot = document.getElementById("totaal")
        let totaal = 0
        console.log(parseFloat(BTw[0].textContent)) ;
        for (let i = 0; i < aantal.length; i++) {
            let sub = 0
            sub = (parseInt(prijs[i].textContent,10) * aantal[i].value * ((parseFloat(BTw[i].textContent) / 100) +1))
            subtotaal[i].innerHTML = sub.toFixed(2).toString()
            totaal += sub;
        }
        tot.innerHTML = totaal.toFixed(2) + " Eur"
    }
window.addEventListener("load", setup);