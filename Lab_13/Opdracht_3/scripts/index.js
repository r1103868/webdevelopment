
const setup = () => {
    // butten inladen als variabelen
	let btnOptellen=document.getElementById("btnOptellen");
	let btnAftrekken=document.getElementById("btnAftrekken");
	let btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	let btnDelen=document.getElementById("btnDelen");
	// als er op de button wordt geklikt naar welke funtie je moet gaan bv click, optellen gaat naar de functie optellen
	btnOptellen.addEventListener("click", optellen);
	btnAftrekken.addEventListener("click", aftrekken);
	btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
	btnDelen.addEventListener("click", delen);
} 

const optellen = () => {
    //Hier worden de getallen ingeladen als de de knop is ingedrukt
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");
	// De waarde van de knoppen inladen en omzetten naar een int
	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);
    // de waarde optellin en in resultaat steken
	let resultaat = g1+g2;
    /// resultaat  de getallen in de uitkomst in een string zetten
	let resultaatTekst=g1+" + "+g2+" = "+resultaat;
    // de tekst tonen in de textbox van txtoutput
	txtOutput.innerHTML=resultaatTekst;
}

const aftrekken = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks");
    let txtRechts=document.getElementById("txtRechts");

    let g1=parseInt(txtLinks.value, 10);
    let g2=parseInt(txtRechts.value, 10);
    let resultaat = g1-g2;

    let resultaatTekst=g1+" - "+g2+" = "+resultaat;
    txtOutput.innerHTML=resultaatTekst;
}

const vermenigvuldigen = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks");
    let txtRechts=document.getElementById("txtRechts");

    let g1=parseInt(txtLinks.value, 10);
    let g2=parseInt(txtRechts.value, 10);
    let resultaat = g1*g2;

    let resultaatTekst=g1+" * "+g2+" = "+resultaat;
    txtOutput.innerHTML=resultaatTekst;
}

const delen = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks");
    let txtRechts=document.getElementById("txtRechts");

    let g1=parseInt(txtLinks.value, 10);
    let g2=parseInt(txtRechts.value, 10);
    let resultaat = g1/g2;

    let resultaatTekst=g1+" / "+g2+" = "+resultaat;
    txtOutput.innerHTML=resultaatTekst;
}
 
window.addEventListener('load',setup); 

















