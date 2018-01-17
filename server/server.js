let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

// save new something

let Todo = mongoose.model("Todo", {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

let newTodo = new Todo({
  text: "cook dinner 2",
  completed: false,
  completedAt: 534
});

newTodo
  .save()
  .then(doc => console.log(doc))
  .catch(e => console.log(e));
