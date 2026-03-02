const setup = () => {
let i;
let belangrijks = document.getElementsByClassName("belangrijk");

for (i = 0; i < belangrijks.length; i += 1) {
    belangrijks[i].classList.add("opvallend");
    console.log(belangrijks.className);
}
}
window.addEventListener("load", setup);