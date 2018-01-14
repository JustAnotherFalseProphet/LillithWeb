const express = require('express');
const app = express();
const Overmind = require('./mindclasses/overmind');

const bodyParser = require('body-parser');
app.use(bodyParser.text()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var currentmind = new Overmind(); 
app.get('/', (req, res) => res.send(currentmind.getSentence()));
app.post('/', (req, res) => {
    currentmind.addSentence(req.body);
    res.send('Ack');
});

app.listen(15000, () => console.log('Lashed up 15K'));