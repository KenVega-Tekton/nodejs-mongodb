const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/Todo");
let { User } = require("./models/User");

let app = express();

app.use(bodyParser.json()); // para leer req.body

app.post("/todos", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("started on port 3000");
});
