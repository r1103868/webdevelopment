const setup = () => {
let leeftijd = 34;
let interest = 0.12;
let isGevaarlijk = true;
let vandaag = new Date();
const print = message => {
    console.log(typeof leeftijd,typeof interest,typeof isGevaarlijk,typeof vandaag);
}
print();
}

window.addEventListener("load", setup);