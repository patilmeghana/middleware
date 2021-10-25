const express = require("express");
const app = express();
const router = express.Router();
const middleware = function (req, res, next) {
    console.log("current url is", req.originalUrl);
    next();
}
//app.use(middleware);

app.get("/", function (req, res) {
    res.send("hello world! in express")
});

router.get("/login", middleware, function (req, res) {
    res.send("This is login page")
});
app.use('/', router);


app.listen(4500);
