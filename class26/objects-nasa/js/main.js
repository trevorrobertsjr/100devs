//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//no need to pass parameters to the handler. Instead, just get values from DOM
document.querySelector("button").addEventListener("click", getNASA)

function getNASA() {
    let nasaInput = document.querySelector("input").value;
    let apiKey = document.querySelector("textarea").value;
    console.log(nasaInput)
    //Get NASA details
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${nasaInput}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h2").innerText = data.title;
            if (data.media_type == "image") {
                // document.querySelector("img").src = data.hdurl;
                document.querySelector("img").src = data.url;
                document.querySelector("iframe").src = "";
            } else if (data.media_type == "video") {
                document.querySelector("img").src = "";
                document.querySelector("iframe").src = data.url;
            }
            document.querySelector("h3").innerText = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

