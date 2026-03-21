const setup = () => {
    let pelement = document.querySelectorAll('p')
    pelement = pelement[0].textContent = "Goed gedaan"
}
window.addEventListener("load", setup);