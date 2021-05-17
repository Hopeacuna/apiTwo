


//  api key = 100801758866817

let base = "https://efa-cors-anywhere.herokuapp.com/https://superheroapi.com/api/";
let key = 100801758866817;

let baseURL = base + key + "/";


let choiceOne = document.querySelector("#choiceOne");
let choiceTwo = document.querySelector("#choiceTwo");


async function heroSelections() {
    console.log( choiceOne.value);
    console.log( choiceTwo.value);


    let selectedOne = baseURL + choiceOne.value + "/";
    let selectedTwo = baseURL + choiceTwo.value + "/";

    // console.log(selectedOne, selectedTwo);

    fetch(selectedOne)

        .then(function (result) {
            // console.log(result);
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            compareStats(json);
            let jsonOne = json;
            compareStats(jsonOne);
        })

    fetch(selectedTwo)

        .then(function (result) {
            // console.log(result);
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            let jsonTwo = json;
            compareStats(jsonTwo);

        })

        function compareStats(jsonResults) {
            
        }

}





// function fight(selectedOne, selectedTwo) {
//     console.log(selectedOne);

//     console.log(selectedTwo);
// }




// fetch(baseURL)

//     .then(function (result) {
//         console.log(result);
//         return result.json();
//     })
//     .then(function (json) {
//         console.log(json);

//     })