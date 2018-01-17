const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the mongoDB server");
  }
  console.log("Connected to mongoDB server");

  db
    .collection("Todos")
    .find({ _id: new ObjectID("5a5f59547ccef22261d99e77") })
    .toArray()
    .then(docs => {
      console.log("Todos");
      console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch(err => {
      console.log("Unable to fetch todos: ", err);
    });

  //db.close();
});
