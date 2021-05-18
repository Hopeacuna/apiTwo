


//  api key = 100801758866817

let base = "https://efa-cors-anywhere.herokuapp.com/https://superheroapi.com/api/";
let key = 100801758866817;

let baseURL = base + key + "/";


let choiceOne = document.querySelector("#choiceOne");
let choiceTwo = document.querySelector("#choiceTwo");

 // ! THIS IM KEEPING TO LOOK AT LATER
    // ? i cant get my compare stats() to understand the values in my array
let statOneArray = [];
let statTwoArray = [];

let heroOneName;
let heroTwoName;

let heroOneImg;
let heroTwoImg;

// function heroSelections() {
//     console.log( choiceOne.value);
//     console.log( choiceTwo.value);


    // let selectedOne = baseURL + choiceOne.value + "/";
    // let selectedTwo = baseURL + choiceTwo.value + "/";

    function compareStats() {
        // event.preventDefault();
        console.log(statOneArray, statTwoArray, "test");
        let oneArrayWins = 0;
        let twoArrayWins = 0;
        for (let i = 0; i <= 5; i++ ) {
            console.log(statOneArray[i]);
            console.log(statTwoArray[i]);
            if (statOneArray[i] > statTwoArray[i]) {
                oneArrayWins = oneArrayWins + 1;
            }
            else if (statOneArray[i] < statTwoArray[i]) {
                twoArrayWins = twoArrayWins + 1;
            }
            else {
                console.log('draw')
            }
        }
        console.log(oneArrayWins, twoArrayWins, 'wins');
        showMeTheWinner(oneArrayWins, twoArrayWins);
    }

    function showMeTheWinner(winsOne, winsTwo) {
        let createDisplay = document.createElement("p");
        let createImg = document.createElement("img");

        while (document.querySelector('.resultsDisplay').firstChild) {
            document.querySelector('.resultsDisplay').removeChild(document.querySelector('.resultsDisplay').firstChild);
            
        }
        
        if (winsOne > winsTwo) {
            console.log("first choice wins");
            document.querySelector(".resultsDisplay").appendChild(createDisplay).innerText = `${heroOneName} Wins!`;
            document.querySelector(".winningImage").appendChild(createImg).href = heroOneImg;
            
        }
        else if (winsOne < winsTwo) {
            console.log("second choice wins");
            document.querySelector(".resultsDisplay").appendChild(createDisplay).innerText = `${heroTwoName} Wins!`
            document.querySelector(".winningImage").appendChild(createImg).href = heroTwoImg;
            
        }
        else {
            console.log("its a draw");
            console.log(winsOne, winsTwo, 'draw console');
            document.querySelector(".resultsDisplay").appendChild(createDisplay).innerText = `DRAW!`
        }
    }




function fetchItems() {

    let selectedOne = baseURL + choiceOne.value + "/";
    let selectedTwo = baseURL + choiceTwo.value + "/";
    let imageSelectionOne = selectedOne + "image/url";
    let imageSelectionTwo = selectedTwo + "image/url";

    fetch(selectedOne)    

        .then(function (result) {
            // console.log(result);
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            let jsonOne = json;
            let statsOne = jsonOne.powerstats;
            let combatOne = parseInt(statsOne.combat);
            let durabilityOne = parseInt(statsOne.durability);
            let intelligenceOne = parseInt(statsOne.intelligence);
            let powerOne = parseInt(statsOne.power);
            let speedOne = parseInt(statsOne.speed);
            let strengthOne = parseInt(statsOne.strength);
            // console.log('COMBATONE:', typeof combatOne)
            statOneArray.push(combatOne, durabilityOne, intelligenceOne, powerOne, speedOne, strengthOne);
            console.log(statOneArray);
            heroOneName = jsonOne.name
            document.getElementById("imgOne").src = jsonOne.image.url;
            console.log(typeof heroOneName);
            console.log(document.getElementById("nameDisplayOne"));
            document.getElementById("nameDisplayOne").innerText = heroOneName;
            fetchTwo();
        })

    function fetchTwo() {

    fetch(selectedTwo)

        .then(function (result) {
            // console.log(result);
            return result.json();
        })
        .then(function (json) {
            // console.log(json);
            let jsonTwo = json;
            let statsTwo = jsonTwo.powerstats;
            let combatTwo = parseInt(statsTwo.combat);
            let durabilityTwo = parseInt(statsTwo.durability);
            let intelligenceTwo = parseInt(statsTwo.intelligence);
            let powerTwo = parseInt(statsTwo.power);
            let speedTwo = parseInt(statsTwo.speed);
            let strengthTwo = parseInt(statsTwo.strength);
            statTwoArray.push(combatTwo, durabilityTwo, intelligenceTwo, powerTwo, speedTwo, strengthTwo);
            console.log(statTwoArray);
            heroTwoName = jsonTwo.name
            console.log(jsonTwo.image.url);
            document.getElementById("imgTwo").src = jsonTwo.image.url;
            console.log(heroTwoName);
            document.getElementById("nameDisplayTwo").innerText = heroTwoName;
            compareStats();
           
        })
    }

    
        
}





