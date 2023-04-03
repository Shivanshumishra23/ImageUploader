const express = require('express');
const app =express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(express.json());

//server static files
app.use(express.static("public"));

//setup view engin
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use("/",require('./server/router/router'));

//connect mongodb database
require('./server/database/database')();

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  