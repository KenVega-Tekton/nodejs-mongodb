const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the mongoDB server");
  }
  console.log("Connected to mongoDB server");

  db
    .collection("Users")
    .find({ name: "Ken2" })
    .count()
    .then(count => {
      console.log("Users counted with the name Ken2 : ", count);
    })
    .catch(err => {
      console.log("Unable to fetch todos: ", err);
    });

  //db.close();
});
