let express = require('express');
let app = express();
let dotenv = require('dotenv').config()

app.use('/public', express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
    console.log('entered /')
    if (process.env.VAR_NAME === "allCaps") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }
})

app.get('/json', (req, res) => {
    res.json({'message': 'Hello json'})
    console.log('enetered /json')
})



































 module.exports = app;
