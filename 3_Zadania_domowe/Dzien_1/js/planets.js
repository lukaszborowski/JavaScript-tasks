document.addEventListener("DOMContentLoaded", function() {

    
    console.log("Planets");
    const planets = [
        {
            name: "Merkury",
            numberOfMoons: 0
        },
        {
            name: "Wenus",
            numberOfMoons: 0
        },
        {
            name: "Ziemia",
            numberOfMoons: 1
        },
        {
            name: "Mars",
            numberOfMoons: 2
        },
        {
            name: "Jowisz",
            numberOfMoons: 63
        },
        {
            name: "Saturn",
            numberOfMoons: 60
        },
        {
            name: "Uran",
            numberOfMoons: 27
        },
        {
            name: "Neptun",
            numberOfMoons: 13
        }
    ];

    function sortPlanet(planets) {
        planets.sort(function (a, b){
            return a.numberOfMoons - b.numberOfMoons;
        })
        return planets.reverse();
    }

    sortPlanet(planets);
    console.log(planets);

});