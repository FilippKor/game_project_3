



document.getElementById("sort-select").addEventListener("change", function() {
    let selectedOption = this.value;

    // Means
    let ourTeamSection = document.getElementById("our-team")
    let pickScientistSection = document.getElementById("info__section")

    // Numbers
    let cheackBornAgeSection = document.getElementById("leap-year__section")
    let calculatorOfTimeSection = document.getElementById("time-calculator__section")
    let calculatorSection = document.getElementById("calculator__section")
    let guessTheNumberSection = document.getElementById("guess-the-number-section")
    let threeNumbersSection = document.getElementById("highest-number__section")

    // Games
    let dinoGameSection = document.getElementById("dino-game");
    let soccerGameSection = document.getElementById("soccer")
    let paperRockGameSection = document.getElementById("prs__section")
    switch(selectedOption) {
        case "interactive":
            // Games
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")

            // Number
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
            cheackBornAgeSection.classList.remove("display-none")

            // Means
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        case "number":
            //  Games 
            soccerGameSection.classList.add("display-none");
            dinoGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none")

            // Numbers
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
            cheackBornAgeSection.classList.remove("display-none")

            // Means
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
            
            break;
        case "games":
            // Games
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")

            // Numbers
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
            cheackBornAgeSection.classList.add("display-none")

            // Means
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
            break;
        case "means":
            // Games
            dinoGameSection.classList.add("display-none");
            soccerGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none");

            // Numbers
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
            cheackBornAgeSection.classList.add("display-none")

            // Means
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        default:
            break;

    }
});


let cheakAgeNight = document.querySelector(".cheak-age-night")
let guessNumberNight = document.querySelector(".guess-number-night")
let prsNight = document.querySelector(".prs-night")
let calculatorNight = document.querySelector(".calculator-night")
let timeCalculatorNight = document.querySelector(".time-calculator-night")
let dinosaurNight = document.querySelector(".dinosaur-night")
let soccerNight = document.querySelector(".soccer-night")
let threeNumbersNight = document.querySelector(".three-numbers-night")
let ourTeamNight = document.querySelector(".our-team-night")
let scientistNight = document.querySelector(".scientist-night")
// Header
let header = document.getElementById('header');
let sort = document.getElementById("sort-select")
let option = document.querySelector(".sort-option")




// Footer
let footer = document.querySelector(".footer")

document.querySelector('.switch').addEventListener('click', function() {
    this.classList.toggle('night');
    if (this.classList.contains('night')) {
        cheakAgeNight.classList.add("night-section")
        guessNumberNight.classList.add("night-section")
        prsNight.classList.add("night-section")
        calculatorNight.classList.add("night-section")
        timeCalculatorNight.classList.add("night-section")
        dinosaurNight.classList.add("night-section")
        soccerNight.classList.add("night-section")
        threeNumbersNight.classList.add("night-section")
        ourTeamNight.classList.add("night-section")
        scientistNight.classList.add("night-section")




        // Header
        header.classList.add("header-night")
        sort.style.backgroundColor = "#333"
        sort.style.color = "#fff"
        option.style.backgroundColor = "#333"
        option.style.border = "2px #fff solid"

        // Footer
        footer.classList.add("footer-night")
    } else {
        cheakAgeNight.classList.remove("night-section")
        guessNumberNight.classList.remove("night-section")
        prsNight.classList.remove("night-section")
        calculatorNight.classList.remove("night-section")
        timeCalculatorNight.classList.remove("night-section")
        dinosaurNight.classList.remove("night-section")
        soccerNight.classList.remove("night-section")
        threeNumbersNight.classList.remove("night-section")
        ourTeamNight.classList.remove("night-section")
        scientistNight.classList.remove("night-section")

        // Header
        header.classList.remove("header-night")
        sort.style.backgroundColor = "#fff"
        sort.style.color = "#333"
        option.style.backgroundColor = "#fff"
        option.style.border = "2px #000 solid"
        
        // Footer
        footer.classList.remove("footer-night")

    }
});
