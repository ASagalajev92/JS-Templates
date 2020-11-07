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

// //-----    MongoDB cluster connection   -----//
// mongoose.connect('mongodb+srv://account:password@cluster-link/dbName', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

//-----    MongoDB connection using localhost   -----//
mongoose.connect('mongodb://localhost:27017/dbName', {
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
