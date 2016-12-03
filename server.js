const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const app = express();
app.set('viev engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  db.collection('todoes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {todoes: result})
  })
})

app.post("/todoes", (req, res) => {
  db.collection("todoes").save(req.body, (err, result) => {
    if(err) return console.log(err)
    console.log("Saved to database")
    res.redirect("/")
  })
})

MongoClient.connect("mongodb://password@ds113938.mlab.com:13938/node-tutorial", (err, database) => {
  if(err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log("Listen on 3000");
  })
})
