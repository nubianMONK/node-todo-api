const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5c57361ea600fa5a98f48be9';

let user_id = '5c549cce359b34057ca0c9e6';

// if (!ObjectID.isValid(id) {
//   console.log('ID not valid');
// })
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(user_id).then((user) => {
  if(!user) {
    return console.log('User Id not found');
  }
  console.log(JSON.stringify(user, undefined,2));
}).catch((e) => console.log(e));
