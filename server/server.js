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
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
