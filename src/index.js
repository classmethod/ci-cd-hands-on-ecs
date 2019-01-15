const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

const fizzbuzz = require('./model/fizzbuzz');

app.set('views', __dirname + '/../template/views');

app.engine('ejs', ejs.renderFile);

app.use(express.static('template'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('*', (req, res) => {
    //while(true){} // CPUをたくさん使用する処理
    
    const numbers = fizzbuzz(req.query.count);
    res.render("index.ejs", { numbers: numbers });
});

app.listen(3000, () => {
    console.log("Started fizz buzz applicagtion!");
});
