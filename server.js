//dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");
const Note = require("./Note");
const app = express();

app.listen(3002, () => {
  console.log("API server now on port 3002!");
});
