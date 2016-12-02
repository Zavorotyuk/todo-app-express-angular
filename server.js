const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  db.collection("quotes").save(req.body, (err, result) => {
    if(err) return console.log(err)
    console.log("Saved to database")
    res.redirect("/")
  })
})

MongoClient.connect("mongodb://user:password@ds113938.mlab.com:13938/node-tutorial", (err, database) => {
  if(err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log("Listen on 3000");
  })
})
