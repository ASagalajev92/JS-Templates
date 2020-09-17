// SETTING UP EXPRESS AND BODY-PARSER

const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

app.get("/", function (req,res) {
  res.send("Local server is running and is prepared for development !");

});



app.listen(port, function () {
  console.log("Server is running on port :" + port);

});
