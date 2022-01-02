//dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");
const Note = require("./Note");
const app = express();

app.listen(3002, () => {
  console.log("API server now on port 3002!");
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let uniqueIDs = [];
let localNotes = [];
