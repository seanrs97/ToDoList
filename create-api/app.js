const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//IMPORT ROUTES 
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
    res.send("we are home");
})
// CONNECT TO DB
//mongoose.connect("mongodb+srv://test:test@testapi-vl3sr.mongodb.net/test?retryWrites=true&w=majority")
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true},
    () => console.log("Connected to db")
); 
//HOW DO WE LISTEN TO SERVER
app.listen(3000);