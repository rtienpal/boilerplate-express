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
    if (process.env.MESSAGE_STYLE === 'uppercase') {
      res.json({'message': 'HELLO JSON'})
      console.log('entered json with uppercase')
    }
    else {
      res.json({'message': 'Hello json'})
      console.log('entered json with lowercase')
    }
})



































 module.exports = app;
