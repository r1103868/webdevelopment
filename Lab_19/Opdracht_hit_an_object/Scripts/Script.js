    let global = {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal ms voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we kunnen annuleren
    };
    const setup = () => {
       let button = document.getElementById("playButton");
       button.addEventListener("click", start)
    }
    const start = () => {
        let scores = document.getElementsByClassName("score");
        let bom = document.getElementById("bom");
        let target = document.getElementById("target");
        timerId = setInterval(plaats, global.MOVE_DELAY);
        target.addEventListener("click",update);
        score.textContent = "Aantal score " + global.score;
        bom.remove();
    }
    const plaats = () => {
        let target = document.getElementById("target");
        let scores = document.getElementsByClassName("score");
        let welke =  Math.round(Math.random() * 4)
        target.src = "Images/" + welke + ".png";

    }
    const update = () => {
        let target = document.getElementById("target");
        if(target.src.endsWith("0.png"))
        {
            alert("verloren")
        }
        let hoogte = Math.round(Math.random() * 750)
        let breedte = Math.round(Math.random() * 550)
        target.style.top = hoogte + "px";
        target.style.left = breedte + "px";
        global.score++;
        score.textContent = "Aantal score " + global.score;

    }
    window.addEventListener("load", setup);