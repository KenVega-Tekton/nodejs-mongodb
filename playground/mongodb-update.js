const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to the mongoDB server");
  }
  console.log("Connected to mongoDB server");

  db
    .collection("Todos")
    .findOneAndUpdate(
      { _id: new ObjectID("5a5f59d07ccef22261d99e78") },
      { $set: { completed: false } },
      { returnOriginal: false }
    )
    .then(res => {
      console.log(res);
    });

  db
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5a5e6f197bcc1c571ea2f85a") },
      { $set: { name: "Alexander" }, $inc: { age: 3 } },
      { returnOriginal: false }
    )
    .then(res => {
      console.log(res);
    });

  //db.close();
});
