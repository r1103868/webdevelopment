const setup = () => {
let input = document.getElementById("input").textContent.toString();
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
    let count = 0;
    let position = input.indexOf("an");

    while (position !== -1) {
        count++;
        position = input.indexOf('an', position + 1);
    }
    console.log(count);
output.innerHTML = count.toString();


// Lastindexoff
    let count2 = 0;
    let position2 = input.lastIndexOf("an");

    //lastIndexOf
    while (position2 !== -1) {
        count2++;
        position2 = input.lastIndexOf("an", position2 - 1);
    }
output2.innerHTML = count2.toString();
}
window.addEventListener("load", setup);