const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findOneAndRemove({_id: '5c57b26938b55727dc325bf3'}).then((todo) => {
//   console.log(todo);
// })

Todo.findByIdAndRemove('5c57b26938b55727dc325bf3').then((todo) => {
  console.log(todo);
})
