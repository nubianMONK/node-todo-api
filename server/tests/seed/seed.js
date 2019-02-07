const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'akinbode@gmail.com',
    password: 'userOnePass',
    tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userOneId, access: 'auth'}, 'cde4546').toString()
    }]
}, {
  _id: userTwoId,
  email: 'lagbaja@gmail.com',
  password: 'userTwoPass',

}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 246
}];

const populateTodos = ()=>{
    return Todo.deleteMany({})
    .then(()=>{
        Todo.insertMany(todos);
    });
};

const populateUsers = (done) => {
  User.deleteMany({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])

  }).then(() => done());
};


module.exports = {todos, populateTodos, users, populateUsers};