const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

//-----    Connect to our mongo dbs using mongoose package   -----//
mongoose.connect('mongodb+srv://account:password@cluster0.mzo7m.mongodb.net/todolistDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.get("/", function(req, res) {
    res.render("home");
});


//-----    Server listening   -----//
app.listen(3000, function() {
    console.log("Server started on port 3000");
});
