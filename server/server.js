
const {ObjectID} = require('mongodb');
let express = require('express');
let bodyParser = require('body-parser');

let{mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (request, response) => {
  Todo.find().then((todos) => {
    response.send({todos});
  }, (e) => {
    response.status(400).send(e);
  })
});


app.get('/todos/:id', (request, response) => {
  let id = request.params.id;
  if (!ObjectID.isValid(id)){
    return response.status(404).send();
  };
  Todo.findById(id).then((todo) => {
    if(!todo) {
      return response.status(404).send();
    }
    response.send({todo});
  }).catch((e) => response.status(400).send());

});

app.listen(port, () => {
  console.log(`Started up on port ${port}`);
});

module.exports = {app};
