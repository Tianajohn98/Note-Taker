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

//routes for HtML

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post("/api/notes", (req, res) => {
  data = req.body;
  let id = uniqueID();

  let note = new Note(data.title, data.text, id);
  localNotes = [];
  localNotes.push(note);
  fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let database = JSON.parse(data);
      localNotes = localNotes.concat(database);
    }

    fs.writeFile(
      path.join(__dirname, "/db/db.json"),
      JSON.stringify(localNotes),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });

  res.sendFile(path.join(__dirname, "/db/db.json"));
});
