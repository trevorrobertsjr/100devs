document.querySelector('button').addEventListener('click', getRapper)

async function getRapper() {
    let rapper = document.querySelector('input').value;
    console.log(rapper);
    // fetch(`localhost:8000/api/${rapper}`)
    // .then(response)
    // .then(data)
    try {
        const res = await fetch(`http://localhost:8000/api/${rapper}`);
        const data = await res.json();
        // console.log(data);
        document.querySelector('h2').innerText = `Birth Name: ${data.birthName}`
    }
    catch (err) {
        console.log(err);

    }
}