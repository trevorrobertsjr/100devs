const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/www/index.html');

})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})