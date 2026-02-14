const setup = () => {
    //pElement inladen
    let wijziging =document.getElementById("wijzig");
    wijziging.addEventListener("click", test)
}
const test = () => {
    let pElement=document.getElementById("txtOutput");
    //Tekst element veranderen naar Welkom
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);