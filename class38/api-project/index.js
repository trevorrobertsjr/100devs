const express = require('express');
const app = express();
const PORT = 8000;
const DEFAULTRAPPER = 'Dylan'

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Sheyaa',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'Dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan, Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/www/index.html');

})

// url format: /api/Chance the Rapper
app.get('/api/:rapperName', (request, response) => {
    if (rappers[request.params.rapperName]) {
        response.json(rappers[request.params.rapperName]);
    }
    else {
        response.json(rappers[DEFAULTRAPPER]);
    }
})

// url format: /api?rapper=Chance the Rapper
// app.get('/api', (request, response) => {
//     let rapper = request.query.rapper;
//     response.json(rappers[rapper]);
// })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})