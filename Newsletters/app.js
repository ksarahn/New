const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function() {
    console.log("server started on port 3000");
});