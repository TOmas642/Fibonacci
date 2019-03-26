const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Kontaktujte mě na vaclav.strnad@gyarab.cz");
});

app.get("/about", function(req, res) {
  res.send("<h1>About</h1>");
});

app.get("/hobbies", function(req, res) {
  res.send("<h4>Hobbies</h4>");
});

app.get("/calc", function(req, res) {
  var formular = "<form action ='/calc' method='post'>";
  formular += "<input type='text' name='n1' placeholder='První číslo'/>";
  formular += "<input type='text' name='n2'placeholder='Druhé číslo'/>";
  formular += "<button type ='submit' name='submit'>Kalkuluj</button>";
  formular += "</form>";
  res.send(formular);
});

app.post("/calc", function(req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;

  res.send("Součet je: " + result);
});

app.get("/fibo/:n", function(req, res) {
  var nu = Number(req.params.n);
  var arr = [];
  if (nu === 1) {
    arr = [0];
  } else if (nu > 1) {
    arr = [0, 1];
    for (let i = 2; i < nu; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
      console.log(arr[i - 2]);
    }
  }
  if (arr.length > 0) {
    res.send("Posloupnost: " + arr);
  } else {
    res.send("Zadejte číslo větší než nula");
  }
});

app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});
