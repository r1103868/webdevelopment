const setup = () => {
let ddl = document.getElementById("ddl");
let gemeente = prompt("Enter gemeente:");
let gemeentes = [];
while(gemeente !== null && gemeente.localeCompare("stop") !== 0 ){
    gemeentes.push(gemeente);
    gemeente =  prompt("Enter gemeente:");
}
gemeentes.sort();
    for(let i = 0; i < gemeentes.length; i++){
        let string = `<option name=\"${gemeentes[i]}\">${gemeentes[i]}</option>`;
        ddl.innerHTML += string;
    }
}
window.addEventListener("load", setup);
