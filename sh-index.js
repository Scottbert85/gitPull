const mongoose = require("mongoose");
const express = require("express");
const {connect} = require('./config/config');

const person=require('./routes/api/sh-person')

const app = express();

app.use(express.json());

mongoose
  .connect(connect, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("connected to db"))
  .catch(error => console.log("DB Connection error", error));

app.use(express.static("public"));
app.use('/api/person', person);

app.listen(3000, () => console.log("listening on port 3000"));
