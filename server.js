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

app.get("/get", function(req, res) {
    res.send({
        users:[
            {
                userId: 1,
                firstname: "Saul",
                lastname: "Bravo",
                phoneNumber: "6141758192"
            },
            {
                userId: 2,
                firstname: "Jorge",
                lastname: "Rodriguez",
                phoneNumber: "6141234567"
            },
            {
                userId: 3,
                firstname: "Maria",
                lastname: "Lopez",
                phoneNumber: "6147654321"
            },
            {
                userId: 4,
                firstname: "Rosa",
                lastname: "Perez",
                phoneNumber: "6148462738"
            },
            {
                userId: 5,
                firstname: "Rubén",
                lastname: "Ramirez",
                phoneNumber: "6144913745"
            }
        ]
    })
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