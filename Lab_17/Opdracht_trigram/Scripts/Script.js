const setup = () => {
let btn = document.getElementById("button");
btn.addEventListener("click",trigram1);
let output = document.getElementById("output");
}
const trigram1 = () => {
    let woord = document.getElementById("woord").value;
    i = 1;
    outputs = woord.substring(0, 3);
    let boolean = false;
    while (!boolean)
    {
        if (woord.substring(i, i + 3).length === 3)
        {
            outputs += " - " + woord.substring(i, i + 3)
            i++;
        }
        else
        {
            boolean = true;
            output.textContent = outputs;

        }
    }

}
window.addEventListener("load", setup);