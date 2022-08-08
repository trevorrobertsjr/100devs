//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        // console.log(data.message)
        // setAttribute not needed because src attribute already available in dom for img tag
        // introduces minimal latency. Just use .src instead.
        // document.querySelector("img").setAttribute("src", data.message)
        document.querySelector("img").src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });