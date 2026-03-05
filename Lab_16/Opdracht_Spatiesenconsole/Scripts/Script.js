const setup = () => {
    let button = document.getElementById("btn")
   button.addEventListener("click", spaties1);
}
const spaties1 = () => {
    let string = document.getElementById("text").value;
    let splitString = string.split("").join(" ");
    console.log(splitString);
}
window.addEventListener("load", setup);