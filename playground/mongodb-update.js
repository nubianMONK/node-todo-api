// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')


//findOneAndUpdate
db.collection('Todos').findOneAndUpdate({ _id: new ObjectID("5c546d4d38b55727dc31adc4")}, {
  $set: {
    completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
   console.log(result);
  });
});
