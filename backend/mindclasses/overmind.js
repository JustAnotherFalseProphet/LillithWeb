const fs = require('fs');

class Overmind{
    constructor (){

    }
    getSentence() {
        return 'This is a sentence';
    }
    addSentence(sentence){
       console.log('minding ' + sentence);
       fs.appendFile(process.cwd() + "\\useridentification.txt", sentence + "\r\n", function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
    
    }
}

module.exports = Overmind;