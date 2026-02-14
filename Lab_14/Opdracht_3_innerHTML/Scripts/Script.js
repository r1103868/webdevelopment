const setup = () => {
    //pElement inladen
    let pElement=document.getElementById("txtOutput");
    //Tekst element veranderen naar Welkom
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);