const { MongoClient, ObjectID } = require("mongodb");

let obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos").insertOne(
  //   {
  //     text: "Something to do",
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) return console.log("unable to insert todo ", err);

  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  // insert new doc in Users (name , age , location )

  db.collection("Users").insertOne(
    {
      name: "Ken23",
      age: 23,
      location: "Tekton Labs"
    },
    (err, result) => {
      if (err) return console.log("unable to insert user", err);
      console.log(result.ops[0]._id.getTimestamp());
    }
  );

  db.close();
});
