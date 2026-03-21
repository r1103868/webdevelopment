const setup = () => {
    but = document.getElementById("btn")
    but.addEventListener("click", p1)
}
const p1 = () => {
    let afb = document.createElement("p");
    afb.textContent = "Hallo";
    document.querySelector("#myDIV").appendChild(afb);
}
window.addEventListener("load", setup);