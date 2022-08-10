//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)
  // const url = `https://openlibrary.org/isbn/${choice}.json`
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=details&format=json`
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let bookData = Object.values(data)[0]
      console.log(bookData.details.title)
      document.querySelector("h2").innerText += bookData.details.title
      // if(data.media_type === "image"){
      //   document.querySelector('img').src = data.hdurl
      // }else if(data.media_type === 'video'){
      //   document.querySelector('iframe').src = data.url
      // }else{
      //   alert('Media Not Supported - Contact NASA IMMEDIATLY')
      // }

      // document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

