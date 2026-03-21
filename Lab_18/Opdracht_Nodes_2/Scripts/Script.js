const setup = () => {
let litems = document.querySelectorAll('li');
for (let i = 0; i < litems.length; i++)
{
    litems[i] = litems[i].style.color = "red";
    litems[i] = litems[i].classList.add('listitems');
}
let afb = document.createElement("img");
afb.setAttribute("src", "./Images/cat.jpg")
    document.body.appendChild(afb);
}
window.addEventListener("load", setup);