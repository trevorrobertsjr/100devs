//The user will enter an anime name. Display an image if there is one and a random fact about it.

document.querySelector("button").addEventListener("click", getAnime)

function getAnime() {
    //no need to pass parameters here. Instead, just get value from DOM
    let animeInput = document.querySelector("input").value;
    console.log(animeInput)
    //Get Anime details
    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeInput}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector("h2").innerText = animeInput
            document.querySelector("img").src = data.img
            document.querySelector("h3").innerText = data.data[getRandomNumber(data.total_facts)].fact
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function getRandomNumber(max) {
    let index = Math.floor(Math.random() * (max));
    console.log(index);
    return index;
}