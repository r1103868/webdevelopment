const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
    let btn = document.getElementById("save");
    btn.addEventListener("click",save )

	// we moeten zowel op het input als het change event reageren,
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
    let colorDemos=document.getElementsByClassName("colorDemo");
    let info = document.getElementsByClassName("info");
    // Als ze aangepast worden direct de update erop uitgevoerd
    let kleur = "rgb("+sliders[0].value + "," +  sliders[1].value + "," +  sliders[2].value+")";
    // maak het blokje rood
    colorDemos[0].style.backgroundColor= kleur;
    info[0].innerHTML = sliders[0].value;
    info[1].innerHTML = sliders[1].value;
    info[2].innerHTML = sliders[2].value;
}
const save = () => {
    let sliders = document.getElementsByClassName("slider");
    div = document.getElementById("test");
    nieuw = document.createElement("div");
    nieuw.className = "colorDemo"
    const r = sliders[0].value;
    const g = sliders[1].value;
    const b = sliders[2].value;
    nieuw.style.backgroundColor = "rgb("+r + "," + g + "," +  b +")";
    div.appendChild(nieuw);

    nieuw.addEventListener("click", (event) => {
        let colorDemo=document.getElementsByClassName("colorDemo");
    colorDemo[0].style.backgroundColor = nieuw.style.backgroundColor
    });

    const removes = document.createElement("button");
    removes.textContent = "x";
    removes.addEventListener("click", (event) => {
        event.stopPropagation();
        event.target.parentElement.remove()});
    nieuw.appendChild(removes);
}
// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);