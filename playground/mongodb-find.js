const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the mongoDB server");
  }
  console.log("Connected to mongoDB server");

  db
    .collection("Todos")
    .find()
    .count()
    .then(count => {
      console.log("Todos counted : ", count);
    })
    .catch(err => {
      console.log("Unable to fetch todos: ", err);
    });

  //db.close();
});
