const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const DEFAULTRAPPER = 'dylan'

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan, Dylan'
    }
}
app.use('/static', express.static(path.join(__dirname, 'www')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/www/index.html');

})

// url format: /api/Chance the Rapper
app.get('/api/:rapperName', (request, response) => {
    const rapper = request.params.rapperName.toLowerCase();
    if (rappers[rapper]) {
        response.json(rappers[rapper]);
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