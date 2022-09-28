const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

let port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.all((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

let index = 0;

function randomInt(){
    // min = Math.ceil(0);
    // max = Math.floor(10);
    max = 10
    min = 0
    return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get("/getIndex", function(req, res) {
    index = randomInt();

    res.send({
        move: index
    })
});


// app.post("/post", function(req, res) {
//     let body = req.body;
//     res.send({
//         msg: `${body.message}`
//     });
// });

app.listen(port, () => {
    console.log("listening port: " + port);
});