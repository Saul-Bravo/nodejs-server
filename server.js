const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

let port = 8080;

app.use(express.json());
app.use(cors());
app.all((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/get", function(req, res) {
    res.send("<h1>hola</h1>")
});

app.post("/post", function(req, res) {
    let body = req.body;
    res.send({
        msg: `${body.message}`
    });
});

app.listen(port, () => {
    console.log("listening port: " + port);
});