const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the mongoDB server");
  }
  console.log("Connected to mongoDB server");

  //delete many
  /*
  db
    .collection("Todos")
    .deleteMany({ text: "walk the dog" })
    .then(res => {
      console.log(res);
    });
  */

  //deleteOne
  /*
  db
    .collection("Todos")
    .deleteOne({ text: "walk the cat" })
    .then(res => {
      console.log(res);
    });
  */

  //findOneAndDelete
  db
    .collection("Todos")
    .findOneAndDelete({ completed: false })
    .then(res => {
      console.log(res);
    });

  //db.close();
});
