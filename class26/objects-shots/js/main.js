//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// const drinkEvent = document.querySelector("button");
// drinkEvent.addEventListener("click", () => { getDrink(document.querySelector("input").value) })

// function getDrink(drinkInput) {
//     console.log(drinkInput)
//     //Get drink details
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`, { mode: 'cors' })
//         .then(res => res.json())
//         .then(data => {
//             document.querySelector("h2").innerText = data.drinks[0].strDrink
//             document.querySelector("img").src = data.drinks[0].strDrinkThumb
//             document.querySelector("h3").innerText = data.drinks[0].strInstructions
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });

// }

const drinkEvent = document.querySelector("button");
drinkEvent.addEventListener("click", simpleGetDrink)

function simpleGetDrink() {
    //no need to pass parameters here. Instead, just get value from DOM
    let drinkInput = document.querySelector("input").value;
    //Get drink details
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`, { mode: 'cors' })
        .then(res => res.json())
        .then(data => {
            document.querySelector("h2").innerText = data.drinks[0].strDrink
            document.querySelector("img").src = data.drinks[0].strDrinkThumb
            document.querySelector("h3").innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}