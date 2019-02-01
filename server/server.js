let express = require('express');
let bodyParser = require('body-parser');

let{mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
  // console.log(request.body);
  let todo = new Todo({
    text: request.body.text
  });

  todo.save().then((doc) => {
    response.send(doc);
  }, (e) => {
    response.status(400).send(e);
  });
})

app.listen(3000, () => {
  console.log('Started on port 3000');
});
//Instantiate a new Todo

// let newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });



//Instantiate a new Todo

// let newTodo = new Todo({
//   text: 'Make Eforiro',
//   completed: true,
//   completedAt: Date.now()
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

//
//Instantiate a new User

// let newUser = new User({
//   email: 'buddhie2@gmail.com',
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved new User', doc);
// }, (e) => {
//   console.log('Unable to save new User');
// });
