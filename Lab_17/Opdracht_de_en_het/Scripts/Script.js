const setup = () => {
    let btn = document.getElementById("button");
    btn.addEventListener("click",trigram1);
    let output = document.getElementById("output");
}
const trigram1 = () => {
    let woord = document.getElementById("woord").value;
    let output = document.getElementById("output");
    let i = 0
    woord = " " + woord + " "
    while(woord.substring(i,i+4).length === 4){
        if(woord.substring(i,i+4).localeCompare(" de ") === 0)
        {
            woord = woord.substring(0,i) + " het " + (woord.substring(i+4));
            i++
        }
        else
        {
            i++;
        }
    }
    output.textContent = woord.trim();
}
window.addEventListener("load", setup);