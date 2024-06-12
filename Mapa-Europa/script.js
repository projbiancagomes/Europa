// Class to handle all details in country paths on the map.

class Country {
    constructor() {

        this.countryPaths = document.querySelectorAll("path");
        this.countryPopup = document.getElementById("country-popup");
        this.countryName = document.getElementById("country-name");
        this.countryCapital = document.getElementById("capital-city");
        this.countryPopulation = document.getElementById("population");
        this.countryLanguage = document.getElementById("language");


        this.countryPaths.forEach((path) => {
            path.addEventListener('click', this.countryClick.bind(this));
        });
    }

    // Function to handle each path being clicked.

    countryClick(event) {
        let countryPath = event.target;
        let soundId = countryPath.getAttribute("data-sound");
        let sound = document.getElementById(soundId);
        let countryName = countryPath.getAttribute('name');
        let population = countryPath.getAttribute("data-population");
        let capital = countryPath.getAttribute("data-capital");
        let language = countryPath.getAttribute("data-language");

        // Play audio sound associated with the path that has been clicked and show the country details when audio plays

        if (sound) {
            sound.play();
            this.showDetails(countryName, population, capital, language);
        }
    }

    // Function to display country details when clicked

    showDetails(name, population, capital, language) {
        this.countryName.textContent = "Country: " + name;
        this.countryPopulation.textContent = 'Population: ' + population;
        this.countryCapital.textContent = 'Capital: ' + capital;
        this.countryLanguage.textContent = 'Language: ' + language;
        this.countryPopup.style.display = 'block';
    }
}

const country = new Country();