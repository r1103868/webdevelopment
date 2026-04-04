const setup = () => {
    let student = {
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen :
            ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos : 2
    }
 let strings = JSON.stringify(student)
    console.log(strings)


  let tests = JSON.parse(strings)
    console.log(tests.voornaam)
}
window.addEventListener("load", setup);