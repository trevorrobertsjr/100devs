//node-fetch is an ES-module.
//must add "type": "module", to package.json
//CANNOT use require with node-fetch since it's an ES-module.
import fetch from 'node-fetch';
async function getACuteDogPhoto() {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);

    }
}
getACuteDogPhoto()