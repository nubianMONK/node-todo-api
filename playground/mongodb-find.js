// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').find({_id: new ObjectID('5c527b2bf29443517cf40ce6')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  db.collection('Users').find({name: 'Akinbode Akinpo Akinkunmi'}).toArray().then((user) => {
    console.log(`Todos user: ${user}`);
    console.log(JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });



});
