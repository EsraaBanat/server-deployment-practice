'use strict'
const express = require('express');
const stamper = require('../middlewares/stamper');
const notFoundHandler = require('../handlers/404');
const internalErrorHandler = require('../handlers/500');

const app = express();

app.get('/', handleHomePage);
app.get('/data', handleData);
app.get('/test', stamper, (req, res) => {
    res.json({
        id: 2,
        name: 'test',
        email: 'test@gmail.com',
        time: req.timeStamp
    });
});
app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(500).send(result);
})

app.use('*', notFoundHandler);
app.use(internalErrorHandler);

module.exports = {
    app,
    start,
}



// Functions :
function start (port) {
    app.listen(port, () => {
        console.log(`Server is  listening on ${port}`);
    })
}

function handleHomePage  (req, res) {
    res.status(200).send('Hello World');
}
function handleData  (req, res) {
    res.json({
        id: 1,
        name: 'Esraa',
        email : 'esraa@gmail.com'
    });
}