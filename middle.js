const express = require('express');
const app = express();
const bp = require('body-parser');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
const myfun = function (req, res, next) {
    console.log("middleware is called");
    //here we are not calling next funcn
}

app.use(myfun);
app.get('/', function (req, res) {
    res.send('GET request');
})

app.listen(8080, function () {
    console.log("ExpressJS started at 8080");
})